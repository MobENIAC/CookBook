namespace CookBook.Api.Models;
public class Recipe
{
    public int Id { get; set; }
    public string? CreatedByUser { get; set; }
    public required string Name { get; set; }
    public string? ImageURL { get; set; }
    public string? Description { get; set; }
    public string? Instructions { get; set; }
    public virtual List<Category>? Categories { get; set; }
    public virtual List<Ingredient>? Ingredients { get; set; }

}
