using Microsoft.AspNetCore.Mvc;
using CookBook.Api.Services;

namespace CookBook.Api.Controllers;
[Route("api/[controller]")]
[ApiController]
public class mealApiController : ControllerBase
{
    private readonly IIngridientsClient _ingridientsClient;
    public mealApiController(IIngridientsClient ingridientsClient)
    {
        _ingridientsClient = ingridientsClient;
    }

    [HttpGet]
    public async Task<Meals> GetIngridientResponse()
    {
        var ingridientResponse = await _ingridientsClient.GetIngridientsFromApi();
        return ingridientResponse;
    }
}