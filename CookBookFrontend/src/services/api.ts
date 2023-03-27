import { IRecipe, ICategory, IIngredient } from "./interfaces";

export const getRecipes = async () => {
  //  const recipes : IRecipe[] = await fetch("https://cookbookeniacapi.azurewebsites.net/api/Recipes")
  const recipes: IRecipe[] = await fetch("http://localhost:5256/api/Recipes")
    .then((response) => response.json())
    .then((data) => data);
  return recipes;
};

export const getRecipesById = async (recipeId: number) => {
  // const recipes : IRecipe = await fetch(`https://cookbookeniacapi.azurewebsites.net/api/Recipes/${recipeId}`)
  const recipes: IRecipe = await fetch(
    `http://localhost:5256/api/Recipes/${recipeId}`
  )
    .then((response) => response.json())
    .then((data) => data);
  return recipes;
};

export const deleteRecipesById = async (recipeId: number) => {
  // await fetch(`https://cookbookeniacapi.azurewebsites.net/api/Recipes/${recipeId}`, {
  await fetch(`http://localhost:5256/api/Recipes/${recipeId}`, {
    method: "DELETE",
  });
};

export const addRecipe = async (addedRecipe: Partial<IRecipe>) => {
  // const recipe = await fetch("https://cookbookeniacapi.azurewebsites.net/api/Recipes", {
  const recipe = await fetch("http://localhost:5256/api/Recipes", {
    method: "POST",
    body: JSON.stringify(addedRecipe),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data);
  return recipe;
};

export const updateRecipe = async (updatedRecipe: IRecipe) => {
  const request = {
    name: updatedRecipe.name,
    imageURL: updatedRecipe.imageURL,
    categories: updatedRecipe.categories,
    ingredients: updatedRecipe.ingredients,
  };

  const recipe = await fetch(
    // `https://cookbookeniacapi.azurewebsites.net/api/Recipes/${updatedRecipe.id}`,
    `http://localhost:5256/api/Recipes/${updatedRecipe.id}`,

    {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "content-type": "application/json",
        "access-control-allow-origin": "*"
      },
    }
  )
    .then((response) => response);
};
