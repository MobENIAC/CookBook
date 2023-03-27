namespace CookBook.Api.Services;
public interface IIngridientsClient 
{
    Task<Meals> GetIngridientsFromApi();
}