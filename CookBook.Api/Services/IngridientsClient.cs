using System.Net.Http.Headers;
using System.Text.Json;
using System.Net.Http.Json;

namespace CookBook.Api.Services;
public class IngridientsClient : IIngridientsClient
{

    public async Task<Meals> GetIngridientsFromApi()
    {
        var client = new HttpClient();
        client.DefaultRequestHeaders.Accept.Clear();
        client.DefaultRequestHeaders.Accept.Add( new MediaTypeWithQualityHeaderValue("application/json"));

        var url = $"https://www.themealdb.com/api/json/v1/1/list.php?i=list";
        var ingridientTask = client.GetStreamAsync(url);

        return await JsonSerializer.DeserializeAsync<Meals>(await ingridientTask);
    }

}