import { FC, useEffect, useState } from "react";
import { getRecipes, updateRecipe } from "../services/api";
import { IRecipe } from "../services/interfaces";
import { AddRecipe } from "./AddRecipe";
import { EditRecipe } from "./EditRecipe";
import { Gallery } from "./Gallery";
import { Header } from "./Header";

type CookBookProps = {
  editRecipe: IRecipe | undefined;
}

export const CookBookMain: FC<CookBookProps> = ({ editRecipe }) => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  const getData = async () => {
    const recipesFromApi = await getRecipes();
    setRecipes(recipesFromApi);
  }

  const changeData = async (data: IRecipe) => {
    const editRecipe = await updateRecipe(data);
    recipes.map((x) => {
      if (x.id === editRecipe.id) {
        x = editRecipe;
      }
    });
  }

  if (editRecipe !== undefined) {
    changeData(editRecipe);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header recipes={recipes} />
      <Gallery recipes={recipes} editedData={changeData} />
    </>
  );

}
