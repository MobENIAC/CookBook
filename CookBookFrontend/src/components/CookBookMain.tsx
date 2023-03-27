import { FC, SyntheticEvent, useEffect, useState } from "react";
import { deleteRecipesById, getRecipes, updateRecipe } from "../services/api";
import { IRecipe } from "../services/interfaces";
import "../stylesheets/RecipeViewModalSS.css"
import "../stylesheets/RecipeCardSS.css"
import { Gallery } from "./Gallery";
import { Header } from "./Header";
import { Search } from "./Search";



export const CookBookMain = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [searchRecipe, setSearchRecipe] = useState<string>("");


  const getData = async () => {
    const recipesFromApi = await getRecipes();
    setRecipes(recipesFromApi);
  }

  const changeData = async (data: IRecipe) => {
    await updateRecipe(data);
  }

  const deleteData = async (recipeId: number) => {
    await deleteRecipesById(recipeId);
    getData();
  }

  const searchedRecipe = (searchWord: string) => {
    setSearchRecipe(searchWord);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header recipes={recipes} />
      <Search searchedRecipe={searchedRecipe} recipes={recipes} />
      <Gallery recipes={recipes} editedData={changeData} deletedData={deleteData} recipeSearchWord={searchRecipe} />
    </>
  );
}
