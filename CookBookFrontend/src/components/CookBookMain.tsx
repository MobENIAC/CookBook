import { FC, useEffect, useState } from "react";
import { deleteRecipesById, getRecipes, updateRecipe } from "../services/api";
import { IRecipe } from "../services/interfaces";
import { AddRecipe } from "./AddRecipe";
import { EditRecipe } from "./EditRecipe";
import { Gallery } from "./Gallery";
import { Header } from "./Header";
import { Search } from "./Search";


export const CookBookMain = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

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

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header recipes={recipes} />
      <Search />
      <Gallery recipes={recipes} editedData={changeData} deletedData={deleteData} />
    </>
  );

}
