
using Microsoft.AspNetCore.Mvc;
using OpenAI_API;
using OpenAI_API.Completions;


namespace CookBook.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AiController : ControllerBase
{
    private readonly IConfiguration _config;
    
    public AiController(IConfiguration config)
    {
        _config = config;
    }

    [HttpGet]
    public async Task<IActionResult> UseChatGPT(string query)
    {
        string outputResult = "";

        var key = _config["ChatGPTKey"];


        var openai = new OpenAIAPI(key);
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
}