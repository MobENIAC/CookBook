using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CookBook.Api.Models;
using CookBook.Api.DTOs;

namespace CookBook.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RecipesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Recipes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RecipeResponse>>> GetRecipes()
        {
            if (_context.Recipe == null)
            {
                return NotFound();
            }
            var recipes = await _context.Recipe
                                  .Include(recipe => recipe.Categories)
                                  .Include(recipe => recipe.Ingredients)
                                  .ToListAsync();

            var recipesResponse = recipes.Select(recipes => new RecipeResponse
            {
                Id = recipes.Id,
                Name = recipes.Name,
                Categories = recipes.Categories
                                                        .Select(cat => new CategoryResponse
                                                        {
                                                            Id = cat.Id,
                                                            Name = cat.Name,
                                                            Type = cat.Type
                                                        }),
                Ingredients = recipes.Ingredients
                                                        .Select(ing => new IngredientResponse
                                                        {
                                                            Id = ing.Id,
                                                            Name = ing.Name,
                                                            Unit = ing.Unit,
                                                            Quantity = ing.Quantity
                                                        })
            }).ToListAsync();



            return recipesResponse;
        }

        // GET: api/Recipes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Recipe>> GetRecipe(int id)
        {
            if (_context.Recipe == null)
            {
                return NotFound();
            }
            var recipe = await _context.Recipe.FindAsync(id);

            if (recipe == null)
            {
                return NotFound();
            }

            return recipe;
        }

        // PUT: api/Recipes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecipe(int id, Recipe recipe)
        {
            if (id != recipe.Id)
            {
                return BadRequest();
            }

            _context.Entry(recipe).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RecipeExists(id))
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

        // POST: api/Recipes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Recipe>> PostRecipe(Recipe recipe)
        {
            if (_context.Recipe == null)
            {
                return Problem("Entity set 'ApplicationDbContext.Recipe'  is null.");
            }
            _context.Recipe.Add(recipe);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRecipe", new { id = recipe.Id }, recipe);
        }

        // DELETE: api/Recipes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecipe(int id)
        {
            if (_context.Recipe == null)
            {
                return NotFound();
            }
            var recipe = await _context.Recipe.FindAsync(id);
            if (recipe == null)
            {
                return NotFound();
            }

            _context.Recipe.Remove(recipe);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RecipeExists(int id)
        {
            return (_context.Recipe?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
