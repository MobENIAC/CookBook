using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CookBook.Api.Migrations
{
    /// <inheritdoc />
    public partial class addDayAndUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.CreateTable(
                name: "Day",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Day", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DayRecipe",
                columns: table => new
                {
                    DaysId = table.Column<int>(type: "int", nullable: false),
                    RecipesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DayRecipe", x => new { x.DaysId, x.RecipesId });
                    table.ForeignKey(
                        name: "FK_DayRecipe_Day_DaysId",
                        column: x => x.DaysId,
                        principalTable: "Day",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DayRecipe_Recipe_RecipesId",
                        column: x => x.RecipesId,
                        principalTable: "Recipe",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DayUser",
                columns: table => new
                {
                    DaysId = table.Column<int>(type: "int", nullable: false),
                    UsersId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DayUser", x => new { x.DaysId, x.UsersId });
                    table.ForeignKey(
                        name: "FK_DayUser_Day_DaysId",
                        column: x => x.DaysId,
                        principalTable: "Day",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DayUser_User_UsersId",
                        column: x => x.UsersId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DayRecipe_RecipesId",
                table: "DayRecipe",
                column: "RecipesId");

            migrationBuilder.CreateIndex(
                name: "IX_DayUser_UsersId",
                table: "DayUser",
                column: "UsersId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DayRecipe");

            migrationBuilder.DropTable(
                name: "DayUser");

            migrationBuilder.DropTable(
                name: "Day");

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
    }
}
