namespace CookBook.Api.DTOs;
public class CategoryResponse
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string Type { get; set; }
}