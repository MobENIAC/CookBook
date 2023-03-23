import {
    IRecipe
  } from "./interfaces";

export const getRecipes = async () => {
 const recipes : IRecipe[] = await fetch("https://cookbookeniacapi.azurewebsites.net/api/Recipes")
 .then((response) => response.json())
 .then((data) => data);
 return recipes;
}

