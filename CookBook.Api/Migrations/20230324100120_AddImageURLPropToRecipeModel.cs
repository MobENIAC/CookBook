using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CookBook.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddImageURLPropToRecipeModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageURL",
                table: "Recipe",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageURL",
                table: "Recipe");
        }
    }
}
