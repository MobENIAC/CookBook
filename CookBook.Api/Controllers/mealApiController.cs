using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CookBook.Api.Models;
using CookBook.Api.DTOs;
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