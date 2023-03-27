using System.Text.Json.Serialization;

public class IngridientResponse 
{
    [JsonPropertyName("idIngredient")]
    public string? idIngredient { get; set; }
    [JsonPropertyName("strIngredient")]
    public string? strIngredient { get; set; }
}

public class Meals 
{
    [JsonPropertyName("meals")]
    public List<IngridientResponse>? ingridientList { get; set; }
}
