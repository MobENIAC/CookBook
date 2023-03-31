using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CookBook.Api.Migrations
{
    /// <inheritdoc />
    public partial class addUserToDb : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Recipe",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserId1",
                table: "Recipe",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserId2",
                table: "Recipe",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserId3",
                table: "Recipe",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserId4",
                table: "Recipe",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserId5",
                table: "Recipe",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserId6",
                table: "Recipe",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Recipe_UserId",
                table: "Recipe",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Recipe_UserId1",
                table: "Recipe",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "IX_Recipe_UserId2",
                table: "Recipe",
                column: "UserId2");

            migrationBuilder.CreateIndex(
                name: "IX_Recipe_UserId3",
                table: "Recipe",
                column: "UserId3");

            migrationBuilder.CreateIndex(
                name: "IX_Recipe_UserId4",
                table: "Recipe",
                column: "UserId4");

            migrationBuilder.CreateIndex(
                name: "IX_Recipe_UserId5",
                table: "Recipe",
                column: "UserId5");

            migrationBuilder.CreateIndex(
                name: "IX_Recipe_UserId6",
                table: "Recipe",
                column: "UserId6");

            migrationBuilder.AddForeignKey(
                name: "FK_Recipe_User_UserId",
                table: "Recipe",
                column: "UserId",
                principalTable: "User",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Recipe_User_UserId1",
                table: "Recipe",
                column: "UserId1",
                principalTable: "User",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Recipe_User_UserId2",
                table: "Recipe",
                column: "UserId2",
                principalTable: "User",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Recipe_User_UserId3",
                table: "Recipe",
                column: "UserId3",
                principalTable: "User",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Recipe_User_UserId4",
                table: "Recipe",
                column: "UserId4",
                principalTable: "User",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Recipe_User_UserId5",
                table: "Recipe",
                column: "UserId5",
                principalTable: "User",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Recipe_User_UserId6",
                table: "Recipe",
                column: "UserId6",
                principalTable: "User",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Recipe_User_UserId",
                table: "Recipe");

            migrationBuilder.DropForeignKey(
                name: "FK_Recipe_User_UserId1",
                table: "Recipe");

            migrationBuilder.DropForeignKey(
                name: "FK_Recipe_User_UserId2",
                table: "Recipe");

            migrationBuilder.DropForeignKey(
                name: "FK_Recipe_User_UserId3",
                table: "Recipe");

            migrationBuilder.DropForeignKey(
                name: "FK_Recipe_User_UserId4",
                table: "Recipe");

            migrationBuilder.DropForeignKey(
                name: "FK_Recipe_User_UserId5",
                table: "Recipe");

            migrationBuilder.DropForeignKey(
                name: "FK_Recipe_User_UserId6",
                table: "Recipe");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropIndex(
                name: "IX_Recipe_UserId",
                table: "Recipe");

            migrationBuilder.DropIndex(
                name: "IX_Recipe_UserId1",
                table: "Recipe");

            migrationBuilder.DropIndex(
                name: "IX_Recipe_UserId2",
                table: "Recipe");

            migrationBuilder.DropIndex(
                name: "IX_Recipe_UserId3",
                table: "Recipe");

            migrationBuilder.DropIndex(
                name: "IX_Recipe_UserId4",
                table: "Recipe");

            migrationBuilder.DropIndex(
                name: "IX_Recipe_UserId5",
                table: "Recipe");

            migrationBuilder.DropIndex(
                name: "IX_Recipe_UserId6",
                table: "Recipe");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Recipe");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Recipe");

            migrationBuilder.DropColumn(
                name: "UserId2",
                table: "Recipe");

            migrationBuilder.DropColumn(
                name: "UserId3",
                table: "Recipe");

            migrationBuilder.DropColumn(
                name: "UserId4",
                table: "Recipe");

            migrationBuilder.DropColumn(
                name: "UserId5",
                table: "Recipe");

            migrationBuilder.DropColumn(
                name: "UserId6",
                table: "Recipe");
        }
    }
}
