import { useEffect, useState } from "react";
import { getRecipes } from "../services/api";
import { IRecipe } from "../services/interfaces";
import { Gallery } from "./Gallery";

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
            <Gallery recipes={recipes} />
            {/* <h1>Cookbook</h1>
          {recipes.map((x) => (
            <div>
              <div>{x.name}</div>
              <img src={x.imageURL}/>
            </div>
          ))} */}
        </>
    );

}
