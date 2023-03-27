# CookBook


dotnet new sln -n CookBook
dotnet new webapi -n CookBook.Api
dotnet new xunit -n CookBook.Tests
dotnet add CookBook.Tests reference CookBook.Api
dotnet sln add */.csproj
dotnet build

dotnet tool install -g dotnet-aspnet-codegenerator
dotnet tool install -g dotnet-ef
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools

npm create vite CookBookFrontend
cd CookBookFrontend
npm install
npm run dev


dotnet aspnet-codegenerator controller -name IngredientsController -async -api -m Ingredient -dc ApplicationDbContext --relativeFolderPath Controllers

// for frontend form validation
npm install react-hook-form yup 
npm install @hookform/resolvers   