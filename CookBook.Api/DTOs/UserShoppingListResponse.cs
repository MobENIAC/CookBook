using CookBook.Api.Models;
namespace CookBook.Api.DTOs;

public class UserShoppingListResponse
{
    public int Id { get; set; }
    public required string UserId { get; set; }
    public List<IngredientResponse>? ingredientShoppingList { get; set; }

}
