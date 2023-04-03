using Microsoft.EntityFrameworkCore;
using CookBook.Api.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("CookBookConnection") ?? throw new InvalidOperationException("Connection string 'CookBookConnection' not found."))
    );
builder.Services.AddScoped<IIngridientsClient, IngridientsClient>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

/* if (app.Environment.IsDevelopment())
{ */
    app.UseSwagger();
    app.UseSwaggerUI();
/* } */

app.UseCors(policy =>
  {
      policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
  });

app.UseHttpsRedirection();

app.UseAuthorization();
app.MapControllers();

app.Run();
