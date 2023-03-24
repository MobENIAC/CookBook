using CookBook.Api.Controllers;
using CookBook.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace CookBook.Tests;

public abstract class RecipeUnitTests
{
    protected RecipeUnitTests(DbContextOptions<ApplicationDbContext> contextOptions)
    {
        ContextOptions = contextOptions;
        Seed();
    }
    protected DbContextOptions<ApplicationDbContext> ContextOptions { get; }

    private void Seed()
    {
        using (var context = new ApplicationDbContext(ContextOptions))
        {
            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();

            var oneRecipe = new Recipe
            {
                Name = "Rösti",
                Categories = new List<Category>()
                {
                    new Category
                {
                    Name = "Swiss",
                    Type = "Ethnic"
                }},
                Ingredients = new List<Ingredient>()
                {
                    new Ingredient
                {
                    Name = "Potato",
                    Unit = "g",
                    Quantity = 300
                }}
            };

            var twoRecipe = new Recipe
            {
                Name = "Pizza",
                Categories = new List<Category>()
                {
                    new Category
                {
                    Name = "Italian",
                    Type = "Ethnic"
                },
                new Category
                {
                    Name = "Vegetarian",
                    Type = "Diatery"
                }},
                Ingredients = new List<Ingredient>()
                {
                    new Ingredient
                {
                    Name = "Flour",
                    Unit = "g",
                    Quantity = 300
                }}
            };

            context.AddRange(oneRecipe, twoRecipe);
            context.SaveChanges();
        }
    }

    [Fact]
    public void GET_GetRecipes_returns_recipes()
    {
        using (var context = new ApplicationDbContext(ContextOptions))
        {
            //arrange
            var controller = new RecipesController(context);

            //act
            var recipes = controller.GetRecipes();
            var recipeList = recipes.Result.Value?.ToList();
            //assert
            Assert.Equal(2, recipes.Result.Value?.Count());
            Assert.Equal("Rösti", recipeList?[0].Name);
            Assert.Equal("Pizza", recipeList?[1].Name);
        }
    }
}