namespace CookBook.Api.Models;
public class Recipe
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public List<Category> Categories { get; set; }
    public List<Ingredient> Ingredients { get; set; }

}