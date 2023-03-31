using CookBook.Api.Models;

public class User
{
    public int Id { get; set; }
    public required string UserId { get; set; }
    public virtual List<Recipe>? MondayRecipes { get; set; }
    public virtual List<Recipe>? TuesdayRecipes { get; set; }
    public virtual List<Recipe>? WednesdayRecipes { get; set; }
    public virtual List<Recipe>? ThursdayRecipes { get; set; }
    public virtual List<Recipe>? FridayRecipes { get; set; }
    public virtual List<Recipe>? SaturdayRecipes { get; set; }
    public virtual List<Recipe>? SundayRecipes { get; set; }



}