using CookBook.Api.Models;

public class UserRequest
{
    public required string UserId { get; set; }
    public List<int>? MondayRecipes { get; set; }
    public List<int>? TuesdayRecipes { get; set; }
    public List<int>? WednesdayRecipes { get; set; }
    public List<int>? ThursdayRecipes { get; set; }
    public List<int>? FridayRecipes { get; set; }
    public List<int>? SaturdayRecipes { get; set; }
    public List<int>? SundayRecipes { get; set; }



}