namespace CookBook.Api.DTOs;

public class RecipeResponse
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public string? ImageURL { get; set; }
    public List<CategoryResponse>? Categories { get; set; }
    public List<IngredientResponse>? Ingredients { get; set; }
   
}
