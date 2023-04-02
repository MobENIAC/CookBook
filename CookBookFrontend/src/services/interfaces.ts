export interface IRecipe {
  id: number;
  name: string;
  imageURL: string;
  description: string;
  instructions: string;
  createdByUser: string;
  categories: ICategory[];
  ingredients: IIngredient[];
}

export interface IShoppingList {
  id: number;
  userId : string;
  ingredientShoppingList : IIngredient[];
}

export interface ICategory {
  id: number;
  name: string;
  type: string;
}

export interface IIngredient {
  id: number;
  name: string;
  unit: string;
  quantity: number;
}

export interface IIngredientApi {
  idIngredient: string;
  strIngredient: string;
}

export interface IListIngredientApi {
  meals: IIngredientApi[];
}

export interface IDayPut {
  id: number;
  name: string;
  recipeIds : number[];
}

export interface IDay {
  id: number;
  name: string;
  recipe : IRecipe[];
}

export interface IUserPut {
  id : number;
  userId : string;
  days : IDayPut[];
}

export interface IUser {
  id : number;
  userId : string;
  days : IDay[];
}

export enum day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}