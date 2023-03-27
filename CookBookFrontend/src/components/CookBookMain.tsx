import { FC, SyntheticEvent, useEffect, useState } from "react";
import { deleteRecipesById, getRecipes, updateRecipe } from "../services/api";
import { ICategory, IRecipe } from "../services/interfaces";
import "../stylesheets/RecipeViewModalSS.css"
import "../stylesheets/RecipeCardSS.css"
import { Gallery } from "./Gallery";
import { Header } from "./Header";
import { Search } from "./Search";



export const CookBookMain = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [searchRecipe, setSearchRecipe] = useState<string>("");
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [filterCategory, setFilterCategory] = useState<string>("");


  const getData = async () => {
    const recipesFromApi = await getRecipes();
    setRecipes(recipesFromApi);
    recipes.map((recipe) => {
    recipe.categories.map(category =>  categories.push(category));
     })
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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterCategory(e.target.value);
    console.log(filterCategory);
  };


  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header recipes={recipes} />
    <section className="filter__recipes">
      <div className="gallery__filter">
        <label htmlFor="filter">Filter Categories</label>
        <select
          className="selectCategories"
          id="filter"
          name="filter"
          value={filterCategory}
          onChange={handleChange}
        >
          <option value=''>all</option>
          {
            categories.map((cat) => {
              return (
                <>
                  <option value={cat.name}>{cat.name}</option>
                </>
              )
            })
          }
        </select>
      </div>    
      <Search searchedRecipe={searchedRecipe} recipes={recipes} />
    </section>
    <Gallery recipes={recipes} editedData={changeData} deletedData={deleteData} recipeSearchWord={searchRecipe} filterCategory={filterCategory}/>
    </>
  );
}
