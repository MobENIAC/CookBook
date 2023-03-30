using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CookBook.Api.Models;
using CookBook.Api.DTOs;
using CookBook.Api.Services;
using OpenAI_API;
using OpenAI_API.Completions;

namespace CookBook.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AiController : ControllerBase
{
    private readonly IAppConfig _appconfig;

    private readonly IConfiguration _config;

    public AiController(IConfiguration config, IAppConfig appconfig)
    {
        _config = config;
        _appconfig = appconfig;
    }
    [HttpGet]
    public async Task<IActionResult> UseChatGPT(string query)
    {


        string outputResult = "";
        //  var val = _config.GetValue<string>("chatGptApiKey:apiKey1:");

        var openai = new OpenAIAPI(_config["chatGptApiKey:apiKey1:"]);
        CompletionRequest completionRequest = new CompletionRequest();
        completionRequest.Prompt = query;
        completionRequest.Model = OpenAI_API.Models.Model.DavinciText;
        completionRequest.MaxTokens = 500;
        completionRequest.FrequencyPenalty = 0.0;
        completionRequest.PresencePenalty = 0.0;
        completionRequest.TopP = 1.0;
        completionRequest.Temperature = 0.3;


        var completions = await openai.Completions.CreateCompletionAsync(completionRequest);

        foreach (var completion in completions.Completions)
        {
            outputResult += completion.Text;
        }

        return Ok(outputResult);
    }

    [HttpGet("{street}/address")]
    public IActionResult GetChatGPTTest(string? street)
    {

        var result = _appconfig.GetTestValue();
        return Ok(result);
        //  var val = _config.GetValue<string>("testKey");
        //     return Ok(val);
    }
}