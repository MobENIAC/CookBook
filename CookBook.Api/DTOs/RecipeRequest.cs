namespace CookBook.Api.DTOs;

public class RecipeRequest
{
    public required string Name { get; set; }
    public string? CreatedByUser { get; set; }
    public string? ImageURL { get; set; }
    public string? Description { get; set; }
    public string? Instructions { get; set; }
    public List<CategoryRequest>? Categories { get; set; }
    public List<IngredientRequest>? Ingredients { get; set; }

}
