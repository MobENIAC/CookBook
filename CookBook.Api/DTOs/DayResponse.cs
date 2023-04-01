using CookBook.Api.DTOs;
using CookBook.Api.Models;

public class DayResponse
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public virtual List<RecipeResponse>? Recipe { get; set; }
}