using CookBook.Api.Models;
namespace CookBook.Api.DTOs;

public class UserRequest
{
    public required string UserId { get; set; }
    public List<DayRequest>? Day { get; set; }

}
