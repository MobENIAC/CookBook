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
                ImageURL = recipes.ImageURL,
                Description = recipes.Description,
                Instructions = recipes.Instructions,
                Categories = recipes.Categories?
                                    .Select(cat => new CategoryResponse
                                    {
                                        Id = cat.Id,
                                        Name = cat.Name,
                                        Type = cat.Type
                                    }).ToList(),
                Ingredients = recipes.Ingredients?
                                    .Select(ing => new IngredientResponse
                                    {
                                        Id = ing.Id,
                                        Name = ing.Name,
                                        Unit = ing.Unit,
                                        Quantity = ing.Quantity
                                    }).ToList()
            }).ToList();

            return recipesResponse;
        }

        // GET: api/Recipes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RecipeResponse>> GetRecipe(int id)
        {
            if (id == 0)
            {
                return BadRequest();
            }
            var recipe = await _context
                                .Recipe
                                .Include(recipe => recipe.Categories)
                                .Include(recipe => recipe.Ingredients)
                                .FirstOrDefaultAsync(recipe => recipe.Id == id);
            if (recipe == null)
            {
                return NotFound();
            }

            var recipeResponse = new RecipeResponse
            {
                Id = recipe.Id,
                Name = recipe.Name,
                ImageURL = recipe.ImageURL,
                Description = recipe.Description,
                Instructions = recipe.Instructions,
                Categories = recipe.Categories?
                                    .Select(cat => new CategoryResponse
                                    {
                                        Id = cat.Id,
                                        Name = cat.Name,
                                        Type = cat.Type
                                    }).ToList(),
                Ingredients = recipe.Ingredients?
                                    .Select(ing => new IngredientResponse
                                    {
                                        Id = ing.Id,
                                        Name = ing.Name,
                                        Unit = ing.Unit,
                                        Quantity = ing.Quantity
                                    }).ToList()
            };

            return recipeResponse;
        }

        // PUT: api/Recipes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecipe(int id, RecipeRequest request)
        {
            // if (id is null)
            // {
            //     return BadRequest();
            // }

            var recipe = await _context
                                .Recipe
                                .Include(recipe => recipe.Categories)
                                .Include(recipe => recipe.Ingredients)
                                .FirstOrDefaultAsync(recipe => recipe.Id == id);
            if (recipe == null)
            {
                return NotFound();
            }
            var categoryList = await _context.Category.ToListAsync();
            var ingredientList = await _context.Ingredient.ToListAsync();

            recipe.Name = request.Name;
            recipe.ImageURL = request.ImageURL;
            recipe.Description = request.Description;
            recipe.Instructions = request.Instructions;

            recipe.Categories = request.Categories?.Select(cat => categoryList.Select(catDb => catDb.Name).Contains(cat.Name) ?
             categoryList.FirstOrDefault(catDb => catDb.Name == cat.Name)
              : new Category
              {
                  Name = cat.Name,
                  Type = cat.Type
              }).ToList()!;
            recipe.Ingredients = request.Ingredients?
                                .Select(ing => (ingredientList.Select(ingDb => ingDb.Name).Contains(ing.Name) &&
                                                ingredientList.Select(ingDb => ingDb.Quantity).Contains(ing.Quantity)) ?
                                                ingredientList.FirstOrDefault(ingDb => ingDb.Name == ing.Name)
                                                : new Ingredient
                                                {
                                                    Name = ing.Name,
                                                    Unit = ing.Unit,
                                                    Quantity = ing.Quantity
                                                }).ToList()!;

            _context.Entry(recipe).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return Ok();
        }

        // POST: api/Recipes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Recipe>> PostRecipe(RecipeRequest request)
        {
            if (_context.Recipe == null)
            {
                return Problem("Entity set 'ApplicationDbContext.Recipe'  is null.");
            }

            //  working
            var categoryList = await _context.Category.ToListAsync();
            var ingredientList = await _context.Ingredient.ToListAsync();

            var recipe = new Recipe
            {
                Name = request.Name,
                ImageURL = request.ImageURL,
                Description = request.Description,
                Instructions = request.Instructions,
                Categories = request.Categories?.Select(cat => categoryList.Select(catDb => catDb.Name).Contains(cat.Name) ?
                 categoryList.FirstOrDefault(catDb => catDb.Name == cat.Name)
                  : new Category
                  {
                      Name = cat.Name,
                      Type = cat.Type
                  }).ToList()!,
                Ingredients = request.Ingredients?
                        .Select(ing => (ingredientList.Select(ingDb => ingDb.Name).Contains(ing.Name) &&
                                        ingredientList.Select(ingDb => ingDb.Quantity).Contains(ing.Quantity)) ?
                                        ingredientList.FirstOrDefault(ingDb => ingDb.Name == ing.Name)
                                        : new Ingredient
                                        {
                                            Name = ing.Name,
                                            Unit = ing.Unit,
                                            Quantity = ing.Quantity
                                        }).ToList()!
            };

            var addRecipe = _context.Recipe.Add(recipe);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetRecipe), new { id = recipe.Id }, request);
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
