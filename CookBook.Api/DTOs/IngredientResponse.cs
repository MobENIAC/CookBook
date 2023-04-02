namespace CookBook.Api.DTOs;

public class IngredientResponse
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public  string? Unit { get; set; }
    public  double? Quantity { get; set; }

}