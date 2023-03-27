using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CookBook.Api.Migrations
{
    /// <inheritdoc />
    public partial class updateRecipeProps : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Recipe",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Instructions",
                table: "Recipe",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Recipe");

            migrationBuilder.DropColumn(
                name: "Instructions",
                table: "Recipe");
        }
    }
}
