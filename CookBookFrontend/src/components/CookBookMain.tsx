import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { deleteRecipesById, getCategories, getRecipes, updateRecipe } from "../services/api";
import { ICategory, IRecipe } from "../services/interfaces";
import '../stylesheets/CookBookMain.css'
import { Gallery } from "./Gallery";
import { Header } from "./Header";
import { Search } from "./Search";
import Login from './Login';
import { auth } from '../services/firebase';

export const CookBookMain = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [searchRecipe, setSearchRecipe] = useState<string>("");
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [filterCategory, setFilterCategory] = useState<string>("");
  const [user, setUser] = useState<any>(null);

  const getData = async () => {
    const recipesFromApi = await getRecipes();
    setRecipes(recipesFromApi);
    const categoriesFromApi = await getCategories();
    setCategories(categoriesFromApi);
  }

  const changeData = async (data: IRecipe) => {
    await updateRecipe(data);
    getData();
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
    if (filterCategory.length > 0) {
      return recipe.categories.some(category => category.name === filterCategory);
    }
    return recipe
  });

  useEffect(() => {
    getData();
/*     auth.onAuthStateChanged(user => {
      setUser(user);
    }) */
  }, []);

  return (
    <section className="main">
{/*       <div>
        {user === null && <Login />}
      </div>       <div className="home">
        {user !== null &&
          <>
            <h1>Hello, <span></span>{user.displayName}</h1>
            <img src={user.photoURL} alt="" />
          </>}
        {user !== null && <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>}
      </div> */}
      <Header recipes={recipes} />
      <section className="filter__search__recipes">
        <div className="search__filter__main">
          <div className="filter__main">
            {/* <label htmlFor="filter">Filter Categories</label> */}
            <Form.Select
              //  className="selectCategories filter__select form-select form-select-lg"
              className="selectCategories"
              id="filter"
              name="filter"
              value={filterCategory}
              onChange={handleChange}
            >
              <option className="filter__options" value=''>All Categories</option>
              {
                categories.map((cat) => {
                  return (
                    <option key={cat.id} className="filter__options" value={cat.name}>{cat.name}</option>
                  )
                })
              }
            </Form.Select>
          </div>
          <div className="search__cookbook__main">
            <Search searchedRecipe={searchedRecipe} recipes={recipes} />
          </div>
        </div>
      </section>
      <Gallery recipes={filteredRecipes} editedData={changeData} deletedData={deleteData} recipeSearchWord={searchRecipe} filterCategory={filterCategory} />
    </section>
  );
}
