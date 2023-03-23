namespace CookBook.Api.Models;
public class Recipe
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public virtual List<Category>? Categories { get; set; }
    public virtual List<Ingredient>? Ingredients { get; set; }

}

// dotnet aspnet-codegenerator controller -name IngredientsController -async -api -m Ingredient -dc ApplicationDbContext --relativeFolderPath Controllers