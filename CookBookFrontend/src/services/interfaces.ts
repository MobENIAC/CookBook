
export interface IRecipe {
    id: number;
    name: string;
    imageURL: string;
    description: string;
    instructions: string;
    categories: ICategory[];
    ingredients: IIngredient[];
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

  export enum PageEnum {
    recipeList,
    add,
    edit,
}