namespace CookBook.Api.DTOs;

public class RecipeRequest
{
    public required string Name { get; set; }
    public List<CategoryRequest>? Categories { get; set; }
    public List<IngredientRequest>? Ingredients { get; set; }
   
}
