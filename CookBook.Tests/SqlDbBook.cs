
public class SqlCDControllerTest : CDDatabaseTests
{
    public SqlCDControllerTest() : base(
        new DbContextOptionsBuilder<ApplicationDbContext>()
        .UseInMemoryDatabase(databaseName: "tests.db")
        .Options)
    { }
}