/* using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CookBook.Api.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;



    [Route("api/[controller]")]
    [ApiController]
    public class somfsdkf : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public somfsdkf(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUser()
        {
            if (_context.User == null)
            {
                return NotFound();
            }
            return await _context.User
                                    .Include(user => user.MondayRecipes)
                                    .Include(user => user.TuesdayRecipes)
                                    .Include(user => user.WednesdayRecipes)
                                    .Include(user => user.ThursdayRecipes)
                                    .Include(user => user.FridayRecipes)
                                    .Include(user => user.SaturdayRecipes)
                                    .Include(user => user.SundayRecipes) 
                                  .ToListAsync();
        }

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


        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        [HttpPost]
        public async Task<ActionResult<User>> PostUser(UserRequest request)
        {
            if (_context.User == null)
            {
                return Problem("Entity set 'ApplicationDbContext.User'  is null.");
            }

 
             var mondayList = request.MondayRecipes?.Select(request => _context.Recipe.Where(recipe => recipe.Id == request).FirstOrDefault()).ToList();
            var tuesdayList = request.TuesdayRecipes?.Select(request => _context.Recipe.Where(recipe => recipe.Id == request).FirstOrDefault()).ToList();
            var wednesdayList = request.WednesdayRecipes?.Select(request => _context.Recipe.Where(recipe => recipe.Id == request).FirstOrDefault()).ToList();
            var thursdayList = request.ThursdayRecipes?.Select(request => _context.Recipe.Where(recipe => recipe.Id == request).FirstOrDefault()).ToList();
            var fridayList = request.FridayRecipes?.Select(request => _context.Recipe.Where(recipe => recipe.Id == request).FirstOrDefault()).ToList();
            var saturdayList = request.SaturdayRecipes?.Select(request => _context.Recipe.Where(recipe => recipe.Id == request).FirstOrDefault()).ToList();   
            var sundayList = request.SundayRecipes?.Select(request => _context.Recipe.Where(recipe => recipe.Id == request).FirstOrDefault()).ToList();
 
            var response = new User
            {
                UserId = request.UserId,
                MondayRecipes = mondayList,
                TuesdayRecipes = tuesdayList,
                WednesdayRecipes = wednesdayList,
                ThursdayRecipes = thursdayList,
                FridayRecipes = fridayList,
                SaturdayRecipes = saturdayList,
                SundayRecipes = sundayList 
            };

            _context.User.Add(response);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUser), new { id = response.Id }, response);
        }

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
 */