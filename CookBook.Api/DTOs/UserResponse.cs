using CookBook.Api.Models;
namespace CookBook.Api.DTOs;

public class UserResponse
{
    public int Id { get; set; }
    public required string UserId { get; set; }
    public List<DayResponse>? Days { get; set; }

}
