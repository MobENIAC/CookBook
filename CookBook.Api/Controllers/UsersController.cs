using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CookBook.Api.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CookBook.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UsersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserResponse>>> GetUsers()
        {
            if (_context.User == null)
            {
                return NotFound();
            }

            var allUsers = await _context.User
                                .Include(u => u.Days!)
                                .ThenInclude(d => d.Recipes!)
                                .ThenInclude(r => r.Categories!)
                                .Include(u => u.Days!)
                                .ThenInclude(d => d.Recipes!)
                                .ThenInclude(p => p.Ingredients)
                                .AsNoTracking()
                                .ToListAsync();

            var userResponse = allUsers.Select(user => new UserResponse
            {
                Id = user.Id,
                UserId = user.UserId,
                Days = user.Days!.Select(days => new DayResponse
                {
                    Id = days.Id,
                    Name = days.Name,
                    Recipe = days.Recipes!
                            .Select(res => new RecipeResponse
                            {
                                Id = res.Id,
                                Name = res.Name,
                                CreatedByUser = res.CreatedByUser,
                                ImageURL = res.ImageURL,
                                Description = res.Description,
                                Instructions = res.Instructions,
                                Categories = res.Categories!
                                .Select(cat => new CategoryResponse
                                {
                                    Id = cat.Id,
                                    Name = cat.Name,
                                    Type = cat.Type
                                }).ToList(),
                                Ingredients = res.Ingredients!
                                    .Select(ing => new IngredientResponse
                                    {
                                        Id = ing.Id,
                                        Name = ing.Name,
                                        Unit = ing.Unit,
                                        Quantity = ing.Quantity
                                    }).ToList()
                            }).ToList()
                }).ToList()
            }).ToList();

            return userResponse;
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            if (_context.User == null)
            {
                return NotFound();
            }

            var user = await _context.User.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, UserRequest request)
        {

            if (!UserExists(id))
            {
                return NotFound();
            }

            var allDays = _context.Day.Include(c => c.Recipes);

            var user = await _context.User.Include(u => u.Days)
                .FirstOrDefaultAsync(u => u.Id == id);

            user!.UserId = request.UserId;
            user.Days = request.Days!.Select(day => allDays.Select(ad => ad.Id).Contains(day.Id)
                        ? allDays.FirstOrDefault(ad => ad.Id == day.Id)
                        : new Day
                        {
                            Name = day.Name,
                            Recipes = day.RecipeIds!
                                        .Select(id => _context.Recipe
                                        .Where(recipe => recipe.Id == id)
                                        .FirstOrDefault()).ToList()!
                        }).ToList()!;

            _context.Entry(user).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(UserRequest request)
        {
            if (_context.User == null)
            {
                return Problem("Entity set 'ApplicationDbContext.User'  is null.");
            }

            var daysList = await _context.Day.ToListAsync();

            var foundUser = await _context.User.FirstOrDefaultAsync(user => user.UserId == request.UserId);
            if (foundUser != null)
            {
                return BadRequest();
            }

            List<Day> listOfDays = new List<Day>();
            var monday = new Day { Name = "Monday" };
            listOfDays.Add(monday);

            var tuesday = new Day { Name = "Tuesday" };
            listOfDays.Add(tuesday);

            var wednesday = new Day { Name = "Wednesday" };
            listOfDays.Add(wednesday);

            var thursday = new Day { Name = "Thursday" };
            listOfDays.Add(thursday);

            var friday = new Day { Name = "Friday" };
            listOfDays.Add(friday);

            var saturday = new Day { Name = "Saturday" };
            listOfDays.Add(saturday);

            var sunday = new Day { Name = "Sunday" };
            listOfDays.Add(sunday);

            var user = new User
            {
                UserId = request.UserId,
                Days = listOfDays
            };

            _context.User.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            if (_context.User == null)
            {
                return NotFound();
            }
            var user = await _context.User.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.User.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(int id)
        {
            return (_context.User?.Any(e => e.Id == id)).GetValueOrDefault();
        }

        [HttpGet("List/{id}")]
        public async Task<ActionResult<UserShoppingListResponse>> GetUserShoppingList(int id)
        {
            var userShoppingList = await _context.User
                                .Include(u => u.Days!)
                                .ThenInclude(d => d.Recipes!)
                                .ThenInclude(p => p.Ingredients)
                                .AsNoTracking()
                                .FirstOrDefaultAsync(user => user.Id == id);

            List<IngredientResponse> ingredientsList = new List<IngredientResponse>();

            var tempList = userShoppingList?.Days!
                                            .Select(days => days?.Recipes?
                                                .Select(res => res?.Ingredients?
                                                    .Select(ing => (new IngredientResponse
                                                    {
                                                        Id = ing.Id,
                                                        Name = ing.Name,
                                                        Unit = ing.Unit,
                                                        Quantity = ing.Quantity
                                                    })).ToList()
                                                ).ToList()
                                            ).ToList();

            tempList?.ForEach(a => a?.ForEach(b => b?.ForEach(c => ingredientsList.Add(c))));

            var distinctList = ingredientsList.Select(i => i.Name).Distinct();
            List<IngredientResponse> distinctIngredientsList = new List<IngredientResponse>();

            foreach (var item in distinctList)
            {
                distinctIngredientsList.Add(new IngredientResponse { Name = item, Unit = "", Quantity = 0 });
            }

            foreach (var ing in ingredientsList)
            {
                foreach (var dist in distinctIngredientsList)
                {
                    if (ing.Name == dist.Name)
                    {

                        dist.Unit = ing.Unit;
                        dist.Quantity = dist.Quantity + ing.Quantity;

                    }
                }
            }

            List<IngredientResponse> testList = new List<IngredientResponse>();
            foreach (var ing in ingredientsList)
            {
                testList.Add(new IngredientResponse 
                    { 
                        Name = "",
                        Unit = "",
                        Quantity = 0

                    });
            }

            var counter = 0;
            foreach (var ing in ingredientsList)
            {
                foreach (var dist in testList)
                {
                    if (ing.Name == dist.Name && ing.Unit == dist.Unit)
                    {

                        dist.Unit = ing.Unit;
                        dist.Quantity = dist.Quantity + ing.Quantity;
                        counter +=1;
                        break;
                    }
                    if(dist.Name == "")
                    {
                    dist.Name = ing.Name;
                    dist.Unit = ing.Unit;
                    dist.Quantity = ing.Quantity;
                    break;
                    }
                }
            }

            


            var shoppingList = new UserShoppingListResponse
            {
                Id = userShoppingList!.Id,
                UserId = userShoppingList.UserId,
                ingredientShoppingList = testList.Take(testList.Count() - counter).ToList()
            };

            return shoppingList;
        }
    }
}
