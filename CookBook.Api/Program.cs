using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using CookBook.Api.Services;
using Azure.Identity;
using Azure.Security.KeyVault.Secrets;
using Azure.Core;
using Microsoft.Extensions.Configuration;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("CookBookConnection") ?? throw new InvalidOperationException("Connection string 'CookBookConnection' not found."))
    );
builder.Services.AddScoped<IIngridientsClient, IngridientsClient>();
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// string value = System.Configuration.ConfigurationManager.AppSettings[key];

builder.Configuration.AddUserSecrets<Program>();
var chatGptApiKey = builder.Configuration["chatGptApiKey:apiKey1:"];

var app = builder.Build();

// Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
app.UseSwagger();
app.UseSwaggerUI();
// }
app.UseCors(policy =>
  {
      policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();  //set the allowed origin
  });

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

KeyVaultSecret secret = client.GetSecret("testname");

string secretValue = secret.Value;

builder.Configuration.AddAzureKeyVault(
 new Uri("https://cookbookkeys.vault.azure.net/"), new DefaultAzureCredential()
);

app.UseHttpsRedirection();

app.UseAuthorization();
/* app.MapGet("/", () => secretValue); */
app.MapControllers();

app.Run();
