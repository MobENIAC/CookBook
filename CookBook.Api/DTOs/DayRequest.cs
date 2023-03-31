using CookBook.Api.Models;

public class DayRequest
{
    public required string Name { get; set; }
    public virtual List<int>? RecipeId { get; set; }
}