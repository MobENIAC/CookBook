using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CookBook.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DaysController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DaysController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Days
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Day>>> GetDay()
        {
          if (_context.Day == null)
          {
              return NotFound();
          }
            return await _context.Day.ToListAsync();
        }

        // GET: api/Days/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Day>> GetDay(int id)
        {
          if (_context.Day == null)
          {
              return NotFound();
          }
            var day = await _context.Day.FindAsync(id);

            if (day == null)
            {
                return NotFound();
            }

            return day;
        }

        // PUT: api/Days/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDay(int id, Day day)
        {
            if (id != day.Id)
            {
                return BadRequest();
            }

            _context.Entry(day).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DayExists(id))
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

        // POST: api/Days
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Day>> PostDay(Day day)
        {
          if (_context.Day == null)
          {
              return Problem("Entity set 'ApplicationDbContext.Day'  is null.");
          }
            _context.Day.Add(day);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDay", new { id = day.Id }, day);
        }

        // DELETE: api/Days/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDay(int id)
        {
            if (_context.Day == null)
            {
                return NotFound();
            }
            var day = await _context.Day.FindAsync(id);
            if (day == null)
            {
                return NotFound();
            }

            _context.Day.Remove(day);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DayExists(int id)
        {
            return (_context.Day?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
