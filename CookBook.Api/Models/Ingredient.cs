namespace CookBook.Api.Models;

public class Ingredient
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string MeasurementType { get; set; }
    public required double Measurement { get; set; }
    public virtual List<Recipe> Recipes { get; set; }
   
}