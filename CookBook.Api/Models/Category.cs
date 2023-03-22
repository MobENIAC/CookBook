namespace CookBook.Api.Models;

public class Category
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string Type { get; set; }
    public virtual List<Recipe> Recipes { get; set; }
}