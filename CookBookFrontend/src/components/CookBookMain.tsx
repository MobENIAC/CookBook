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

  const handleSearchChange = (e: any) => {
    setSearchRecipe(e.target.value);
};

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header recipes={recipes} />
      <Search />
      <div>
            <input className=""
                                type="search"
                                placeholder="Search here"
                                onChange={handleSearchChange}
                                value={searchRecipe} />

      </div>
      <Gallery recipes={recipes} editedData={changeData} deletedData={deleteData} searchRecipe={searchRecipe}/>
    </>
  );
}
