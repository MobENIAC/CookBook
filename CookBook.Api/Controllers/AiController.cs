
using Microsoft.AspNetCore.Mvc;
using OpenAI_API;
using OpenAI_API.Completions;


namespace CookBook.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AiController : ControllerBase
{
    private readonly IConfiguration _config;
    // private readonly AzureSecrets _secret;

    // public AiController(IConfiguration config, AzureSecrets secret)
    // {
    //     _config = config;
    //     _secret = secret;
    // }
        public AiController(IConfiguration config)
    {
        _config = config;
    }

    [HttpGet]
    public async Task<IActionResult> UseChatGPT(string query)
    {
        string outputResult = "";

        // SecretClientOptions options = new SecretClientOptions()
        // {
        //     Retry =
        // {
        //     Delay= TimeSpan.FromSeconds(2),
        //     MaxDelay = TimeSpan.FromSeconds(16),
        //     MaxRetries = 5,
        //     Mode = RetryMode.Exponential
        //  }
        // };
        // var client = new SecretClient(new Uri("https://cookbookkeys.vault.azure.net/"), new DefaultAzureCredential(), options);

        // KeyVaultSecret secret = client.GetSecret("chatGptApiKey--apiKey1");

        // string secretValue = secret.Value;

/*         var apiKeyFromVault = _config.GetSection("chatGptApiKey").GetConnectionString("apiKey1"); */

        var openai = new OpenAIAPI("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");
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