using System.Text.Json.Serialization;
using CookBook.Api.Models;

public class Day
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public virtual List<Recipe>? Recipes { get; set; }
    [JsonIgnore]
    public virtual List<User>? Users { get; set; }
    
}