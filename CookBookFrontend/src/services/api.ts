import {
  IRecipe,
  ICategory,
  IIngredient,
  IListIngredientApi,
  IUser,
  IUserPut,
  IShoppingList,
} from "./interfaces";

export const getRecipes = async () => {
  const recipes: IRecipe[] = await fetch(
    "https://cookbookeniacapi.azurewebsites.net/api/Recipes"
  )
    /*   const recipes: IRecipe[] = await fetch("http://localhost:5256/api/Recipes") */
    .then((response) => response.json())
    .then((data) => data);
  return recipes;
};

export const getRecipesById = async (recipeId: number) => {
  const recipes: IRecipe = await fetch(
    `https://cookbookeniacapi.azurewebsites.net/api/Recipes/${recipeId}`
  )
    /*   const recipes: IRecipe = await fetch(
        `http://localhost:5256/api/Recipes/${recipeId}`
      ) */
    .then((response) => response.json())
    .then((data) => data);
  return recipes;
};

export const deleteRecipesById = async (recipeId: number) => {
 await fetch(
     `https://cookbookeniacapi.azurewebsites.net/api/Recipes/${recipeId}`,
    {
 /*  await fetch(`http://localhost:5256/api/Recipes/${recipeId}`, { */
    method: "DELETE",
  }
  );
};

export const addRecipe = async (addedRecipe: Partial<IRecipe>) => {
   const recipe = await fetch(
     "https://cookbookeniacapi.azurewebsites.net/api/Recipes",
    {
/*   const recipe = await fetch("http://localhost:5256/api/Recipes", { */
    method: "POST",
    body: JSON.stringify(addedRecipe),
    headers: {
      "content-type": "application/json",
    },
  }
  )
    .then((response) => response.json())
    .then((data) => data);
  return recipe;
};

export const updateRecipe = async (updatedRecipe: IRecipe) => {
  const request = {
    name: updatedRecipe.name,
    imageURL: updatedRecipe.imageURL,
    description: updatedRecipe.description,
    instructions: updatedRecipe.instructions,
    categories: updatedRecipe.categories,
    ingredients: updatedRecipe.ingredients,
    createdByUser: updatedRecipe.createdByUser,
  };

  const recipe = await fetch(
      `https://cookbookeniacapi.azurewebsites.net/api/Recipes/${updatedRecipe.id}`,
   /*  `http://localhost:5256/api/Recipes/${updatedRecipe.id}`,
 */
    {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "content-type": "application/json",
        "access-control-allow-origin": "*",
      },
    }
  ).then((response) => response);
};

export const getIngredientsApi = async () => {
   const ingredientsApi: IListIngredientApi = await fetch(
     "https://cookbookeniacapi.azurewebsites.net/api/mealApi"
 )
/*   const ingredientsApi: IListIngredientApi = await fetch("http://localhost:5256/api/mealApi") */
    .then((response) => response.json())
    .then((data) => data);
  return ingredientsApi;
};

export const getCategories = async () => {
/*   const categories: ICategory[] = await fetch(
    "http://localhost:5256/api/Categories"
  ) */
     const categories: ICategory[] = await fetch(
       "https://cookbookeniacapi.azurewebsites.net/api/Categories"
     )
    .then((response) => response.json())
    .then((data) => data);
  return categories;
};

export const getInstructionsGPT = async (query: string) => {
  const queryStr = "?query=" + encodeURIComponent(query).toString();
 /*  const aiInstructions: string = await fetch(`http://localhost:5256/api/Ai${queryStr}`) */
    const aiInstructions: string = await fetch(
   `https://cookbookeniacapi.azurewebsites.net/api/Ai${queryStr}`
 )
    .then((response) => response.text())
    .then((data) => data);
  return aiInstructions;
};

export const getUsers = async () => {
/*   const users: IUser[] = await fetch(
    "http://localhost:5256/api/Users"
  ) */
  const users: IUser[] = await fetch(
    "https://cookbookeniacapi.azurewebsites.net/api/Users"
  )
    .then((response) => response.json())
    .then((data) => data);
  return users;
};

export const addUser = async (addedUser: Partial<IUser>) => {
/*   const user = await fetch(
    "http://localhost:5256/api/Users", */
  const user = await fetch(
    "https://cookbookeniacapi.azurewebsites.net/api/Users",
    {
      method: "POST",
      body: JSON.stringify(addedUser),
      headers: {
        "content-type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data);
  return user;
};

export const deleteUserById = async (userId: number) => {
/*   await fetch(
    `http://localhost:5256/api/Users/${userId}`, */
  await fetch(
    `https://cookbookeniacapi.azurewebsites.net/api/Users/${userId}`,
    {
      method: "DELETE",
    }
  );
};

export const updateUser = async (id: number, updatedUser: IUserPut) => {
  const request = {
    userId: updatedUser.userId,
    days: updatedUser.days
  };
/*    const recipe = await fetch(
    `http://localhost:5256/api/Users/${id}`,
    {  */
   const recipe = await fetch(
    `https://cookbookeniacapi.azurewebsites.net/api/Users/${id}`,
    { 
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "content-type": "application/json",
        "access-control-allow-origin": "*",
      },
    }
  ).then((response) => response);
};

export const getUserShoppingList = async (id: number) => {
/*    const ingredientsList: IShoppingList = await fetch(
    `http://localhost:5256/api/Users/List/${id}` */
   const ingredientsList: IShoppingList = await fetch(
    `https://cookbookeniacapi.azurewebsites.net/api/Users/List/${id}` 
  )
    .then((response) => response.json())
    .then((data) => data);
  return ingredientsList;
};