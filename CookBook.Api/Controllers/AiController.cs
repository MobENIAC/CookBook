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
using Azure.Security.KeyVault.Secrets;
using Azure.Core;
using Azure.Identity;

namespace CookBook.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AiController : ControllerBase
{
    private readonly IConfiguration _config;
    private readonly AzureSecrets _secret;

    public AiController(IConfiguration config, AzureSecrets secret)
    {
        _config = config;
        _secret = secret;
    }
    [HttpGet]
    public async Task<IActionResult> UseChatGPT(string query)
    {
        string outputResult = "";

        SecretClientOptions options = new SecretClientOptions()
        {
            Retry =
        {
            Delay= TimeSpan.FromSeconds(2),
            MaxDelay = TimeSpan.FromSeconds(16),
            MaxRetries = 5,
            Mode = RetryMode.Exponential
         }
        };
        var client = new SecretClient(new Uri("https://cookbookkeys.vault.azure.net/"), new DefaultAzureCredential(), options);

        KeyVaultSecret secret = client.GetSecret("chatGptApiKey--apiKey1");

        string secretValue = secret.Value;

/*         var apiKeyFromVault = _config.GetSection("chatGptApiKey").GetConnectionString("apiKey1"); */

        var openai = new OpenAIAPI(secretValue);
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

    // [HttpGet("/address")]
    // public ActionResult<List<string>> GetChatGPTTest()
    // {
    //     SecretClientOptions options = new SecretClientOptions()
    //     {
    //         Retry =
    //     {
    //         Delay= TimeSpan.FromSeconds(2),
    //         MaxDelay = TimeSpan.FromSeconds(16),
    //         MaxRetries = 5,
    //         Mode = RetryMode.Exponential
    //      }
    //     };
    //     var client = new SecretClient(new Uri("https://cookbookkeys.vault.azure.net/"), new DefaultAzureCredential(), options);

    //     KeyVaultSecret secret = client.GetSecret("chatGptApiKey--apiKey1");

    //     string secretValue = secret.Value;

    //     return secretValue;
    //     //  var val = _config.GetValue<string>("testKey");
    //     //     return Ok(val);
    // }

}