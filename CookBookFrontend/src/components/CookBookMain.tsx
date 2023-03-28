import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { deleteRecipesById, getCategories, getRecipes, updateRecipe } from "../services/api";
import { ICategory, IRecipe } from "../services/interfaces";
import '../stylesheets/CookBookMain.css'
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
    const categoriesFromApi = await getCategories();
    setCategories(categoriesFromApi);
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
  };
  const filteredRecipes: IRecipe[] = recipes.filter(recipe => {
    if (filterCategory.length >0) {
    return recipe.categories.some(category => category.name === filterCategory);  
    }
    return recipe
  });

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="main">
      <Header recipes={recipes} />
      <section className="filter__search__recipes">
        <div className="filter__main">
          <label htmlFor="filter">Filter Categories</label>
          <Form.Select
            // className="selectCategories filter__select form-select form-select-lg"
            className= "form-select-sm mt-3"
            id="filter"
            name="filter"
            value={filterCategory}
            onChange={handleChange}
          >
            {/* <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option> */}

            <option className="filter__options" value=''>All Categories</option>
            {
              categories.map((cat) => {
                return (
                  <>
                    <option className="filter__options" value={cat.name}>{cat.name}</option>
                  </>
                )
              })
            }
          </Form.Select>
        </div>
        <Search searchedRecipe={searchedRecipe} recipes={recipes} />
      </section>
      <Gallery recipes={filteredRecipes} editedData={changeData} deletedData={deleteData} recipeSearchWord={searchRecipe} filterCategory={filterCategory} />
    </section>
  );
}
