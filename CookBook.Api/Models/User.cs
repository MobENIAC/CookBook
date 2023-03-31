using CookBook.Api.Models;

public class User
{
    public int Id { get; set; }
    public required string UserId { get; set; }
    public virtual List<Day>? Days { get; set; }
}