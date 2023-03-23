namespace CookBook.Api.DTOs;

public class IngredientRequest
{
    public required string Name { get; set; }
    public required string Unit { get; set; }
    public required double Quantity { get; set; }
   
}