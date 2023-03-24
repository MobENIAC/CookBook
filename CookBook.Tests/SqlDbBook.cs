
using Microsoft.EntityFrameworkCore;
namespace CookBook.Tests;
public class SqlCDControllerTest : RecipeUnitTests
{
    public SqlCDControllerTest() : base(
        new DbContextOptionsBuilder<ApplicationDbContext>()
        .UseInMemoryDatabase(databaseName: "tests.db")
        .Options)
    { }
}