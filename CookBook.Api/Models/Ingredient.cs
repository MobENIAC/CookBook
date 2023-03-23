namespace CookBook.Api.Models;

public class Ingredient
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string Unit { get; set; }
    public required double Quantity { get; set; }
    public virtual List<Recipe>? Recipes { get; set; }
   
}