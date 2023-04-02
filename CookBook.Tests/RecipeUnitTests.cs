using CookBook.Api.Controllers;
using CookBook.Api.DTOs;
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

    RecipeRequest addNewRecipe = new RecipeRequest
    {
        Name = "Lasagne",
        Categories = new List<CategoryRequest>()
                {
                    new CategoryRequest
                {
                    Name = "Italian",
                    Type = "Ethnic"
                },
                new CategoryRequest
                {
                    Name = "Lunch",
                    Type = "MealType"
                }},
        Ingredients = new List<IngredientRequest>()
                {
                    new IngredientRequest
                {
                    Name = "Cheese",
                    Unit = "g",
                    Quantity = 300
                }}
    };
    RecipeRequest updateRecipe = new RecipeRequest
    {
        Name = "Lasagne",
        Categories = new List<CategoryRequest>()
                {
                new CategoryRequest
                {
                    Name = "Italian",
                    Type = "Ethnic"
                },
                new CategoryRequest
                {
                    Name = "Lunch",
                    Type = "MealType"
                },
                new CategoryRequest
                {
                    Name = "Seafood",
                    Type = "Diatery"
                }
                },
        Ingredients = new List<IngredientRequest>()
                {
                    new IngredientRequest
                {
                    Name = "Shrimp",
                    Unit = "g",
                    Quantity = 100
                }}
    };

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

    [Fact]
    public void GET_GetRecipe_returns_one_recipe()
    {
        using (var context = new ApplicationDbContext(ContextOptions))
        {
            //arrange
            var controller = new RecipesController(context);

            //act
            var recipes = controller.GetRecipe(1);

            //assert
            Assert.Equal("Rösti", recipes.Result.Value?.Name);
        }
    }

    [Fact]
    public void GET_GetRecipe_has_categories()
    {
        using (var context = new ApplicationDbContext(ContextOptions))
        {
            //arrange
            var controller = new RecipesController(context);

            //act
            var recipes = controller.GetRecipe(1);

            //assert
            Assert.Equal("Swiss", recipes.Result.Value?.Categories?[0].Name);
            Assert.Equal("Ethnic", recipes.Result.Value?.Categories?[0].Type);
        }
    }

    [Fact]
    public void GET_GetRecipe_has_ingredients()
    {
        using (var context = new ApplicationDbContext(ContextOptions))
        {
            //arrange
            var controller = new RecipesController(context);

            //act
            var recipes = controller.GetRecipe(1);

            //assert
            Assert.Equal("Potato", recipes.Result.Value?.Ingredients?[0].Name);
            Assert.Equal("g", recipes.Result.Value?.Ingredients?[0].Unit);
            Assert.Equal(300, recipes.Result.Value?.Ingredients?[0].Quantity);
        }
    }

    [Fact]
    public void POST_postRecipe_posts_a_new_recipe()
    {
        using (var context = new ApplicationDbContext(ContextOptions))
        {
            //arrange
            var controller = new RecipesController(context);

            //act
            var recipes = controller.PostRecipe(addNewRecipe);
            var newRecipe = controller.GetRecipe(3);

            //assert
            Assert.Equal("Lasagne", newRecipe.Result.Value?.Name);
        }
    }

    [Fact]
    public void POST_postRecipe_posts_a_new_category()
    {
        using (var context = new ApplicationDbContext(ContextOptions))
        {
            //arrange
            var controller = new RecipesController(context);

            //act
            var recipes = controller.PostRecipe(addNewRecipe);
            var newRecipe = controller.GetRecipe(3);

            //assert
            Assert.Equal("Lunch", newRecipe.Result.Value?.Categories?[1].Name);
            Assert.Equal("MealType", newRecipe.Result.Value?.Categories?[1].Type);
        }
    }

    [Fact]
    public void POST_postRecipe_posts_an_existing_category()
    {
        using (var context = new ApplicationDbContext(ContextOptions))
        {
            //arrange
            var controller = new RecipesController(context);

            //act
            var recipes = controller.PostRecipe(addNewRecipe);
            var newRecipe = controller.GetRecipe(3);

            //assert
            Assert.Equal("Italian", newRecipe.Result.Value?.Categories?[0].Name);
            Assert.Equal(2, newRecipe.Result.Value?.Categories?[0].Id);
        }
    }

    [Fact]
    public void PUT_PutRecipe_updates_a_recipe()
    {
        using (var context = new ApplicationDbContext(ContextOptions))
        {
            //arrange
            var controller = new RecipesController(context);

            //act
            var addRecipe = controller.PostRecipe(addNewRecipe);
            var putRecipe = controller.PutRecipe(3, updateRecipe);
            var updatedRecipe = controller.GetRecipe(3);

            //assert
            Assert.Equal("Lasagne", updatedRecipe.Result.Value?.Name);
        }
    }

    [Fact]
    public void PUT_PutRecipe_updates_a_new_category_to_recipe()
    {
        using (var context = new ApplicationDbContext(ContextOptions))
        {
            //arrange
            var controller = new RecipesController(context);

            //act
            var addRecipe = controller.PostRecipe(addNewRecipe);
            var putRecipe = controller.PutRecipe(3, updateRecipe);
            var updatedRecipe = controller.GetRecipe(3);

            //assert
            Assert.Equal("Lasagne", updatedRecipe.Result.Value?.Name);
            Assert.Equal("Seafood", updatedRecipe.Result.Value?.Categories?[2].Name);
            Assert.Equal("Diatery", updatedRecipe.Result.Value?.Categories?[2].Type);
        }
    }

    [Fact]
    public void PUT_PutRecipe_keeps_existing_categories_in_recipe()
    {
        using (var context = new ApplicationDbContext(ContextOptions))
        {
            //arrange
            var controller = new RecipesController(context);

            //act
            var addRecipe = controller.PostRecipe(addNewRecipe);
            var putRecipe = controller.PutRecipe(3, updateRecipe);
            var updatedRecipe = controller.GetRecipe(3);

            //assert
            Assert.Equal("Lasagne", updatedRecipe.Result.Value?.Name);
            Assert.Equal("Italian", updatedRecipe.Result.Value?.Categories?[0].Name);
            Assert.Equal(2, updatedRecipe.Result.Value?.Categories?[0].Id);
            Assert.Equal("Lunch", updatedRecipe.Result.Value?.Categories?[1].Name);
            Assert.Equal("MealType", updatedRecipe.Result.Value?.Categories?[1].Type);
        }
    }

    [Fact]
    public void PUT_PutRecipe_updates_all_ingredients()
    {
        using (var context = new ApplicationDbContext(ContextOptions))
        {
            //arrange
            var controller = new RecipesController(context);

            //act
            var addRecipe = controller.PostRecipe(addNewRecipe);
            var putRecipe = controller.PutRecipe(3, updateRecipe);
            var updatedRecipe = controller.GetRecipe(3);

            //assert
            Assert.Equal("Shrimp", updatedRecipe.Result.Value?.Ingredients?[0].Name);
            Assert.Equal(1, updatedRecipe.Result.Value?.Ingredients?.Count());
        }
    }

    [Fact]
    public void DELETE_deletes_recipes()
    {
        using (var context = new ApplicationDbContext(ContextOptions))
        {
            //arrange
            var controller = new RecipesController(context);

            //act
            var addRecipe = controller.PostRecipe(addNewRecipe);
            var deleteRecipe = controller.DeleteRecipe(3);
            var updatedRecipe = controller.GetRecipe(3);

            //assert
            Assert.Equal(null, updatedRecipe.Result.Value?.Name);
        }
    }

    // [Fact]
    // public void POST_user_shopping_list()
    // {
    //     using (var context = new ApplicationDbContext(ContextOptions))
    //     {
    //         //arrange
    //         var controller = new UsersController(context);

    //         //act
    //         var recipes = controller.GetUserShoppingList(135);

    //         //assert
    //        Assert.Equal(2, recipes.Result.Value?.ingredientShoppingList?.Count);
    //     }
    // }
}

