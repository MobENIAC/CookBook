import { useEffect, useState } from "react";
import { IRecipe } from "./services/interfaces";
import "./App.css";
import { getRecipes } from "./services/api";

function App() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  const getData = async () => {
    const recipes = await getRecipes();
    setRecipes(recipes);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Cookbook</h1>
      {recipes.map((x) => (
        <div>{x.name}</div>
      ))}
    </>
  );
}

export default App;
