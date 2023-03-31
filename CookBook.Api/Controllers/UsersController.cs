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
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            if (_context.User == null)
            {
                return NotFound();
            }

            var allDays = _context.Day.Include(c => c.Recipes);

            var response = _context.User.Select(user => new User
            {
                Id = user.Id,
                UserId = user.UserId,
                Days = allDays.Where(d => user.Days!.Select(day => day.Id == d.Id).FirstOrDefault()).ToList()
            }).ToList();

            return response;
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

            var user = new User
            {
                UserId = request.UserId,
                Days = request?.Days?.Select(day => new Day
                {
                    Name = day.Name,
                    Recipes = day.RecipeIds!
                     .Select(id => _context.Recipe
                        .Where(recipe => recipe.Id == id)
                        .FirstOrDefault()).ToList()!
                }).ToList()
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
    }
}