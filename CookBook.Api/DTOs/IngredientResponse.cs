namespace CookBook.Api.DTOs;

public class IngredientResponse
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string Unit { get; set; }
    public required double Quantity { get; set; }

}