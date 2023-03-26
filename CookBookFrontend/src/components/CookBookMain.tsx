import { FC, useEffect, useState } from "react";
import { getRecipes, updateRecipe } from "../services/api";
import { IRecipe } from "../services/interfaces";
import { AddRecipe } from "./AddRecipe";
import { EditRecipe } from "./EditRecipe";
import { Gallery } from "./Gallery";
import { Header } from "./Header";

type CookBookProps = {
  addedRecipe: IRecipe | undefined;
}

export const CookBookMain: FC<CookBookProps> = ({ addedRecipe }) => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  const getData = async () => {
    const recipesFromApi = await getRecipes();
    setRecipes(recipesFromApi);
  }

  const addData = async (data: IRecipe) => {
    setRecipes([...recipes, data]);
  }

  const changeData = async (data: IRecipe) => {
    await updateRecipe(data);
  }

  if (addedRecipe !== undefined) {
    addData(addedRecipe);
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
