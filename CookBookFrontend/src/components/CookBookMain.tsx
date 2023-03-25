import { useEffect, useState } from "react";
import { getRecipes } from "../services/api";
import { IRecipe } from "../services/interfaces";
import { AddRecipe } from "./AddRecipe";
import { Gallery } from "./Gallery";
import { Header } from "./Header";
import { TEST } from "./TEST";
import { TEST2 } from "./TEST2";

export const CookBookMain = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  const getData = async () => {
    const recipesFromApi = await getRecipes();
    setRecipes(recipesFromApi);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header recipes={recipes} />
      <Gallery recipes={recipes} />
    </>
  );

}
