import { FC, useEffect, useState } from "react";
import { getRecipes, updateRecipe } from "../services/api";
import { IRecipe } from "../services/interfaces";
import { AddRecipe } from "./AddRecipe";
import { Gallery } from "./Gallery";
import { Header } from "./Header";

type CookBookProps = {
  updateRecipe: IRecipe | undefined;
}

export const CookBookMain: FC<CookBookProps> = ({ updateRecipe }) => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  const getData = async () => {
    const recipesFromApi = await getRecipes();
    setRecipes(recipesFromApi);
  }

  const changeData = (updateRecipe: IRecipe) => {
    recipes.map((x) => {
      if (x.id === updateRecipe.id) {
        x = updateRecipe;
      }
    });
  }

  if (updateRecipe !== undefined) {
    changeData(updateRecipe);
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
