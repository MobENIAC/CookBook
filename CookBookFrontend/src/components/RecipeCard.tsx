import { FC, useEffect, useState } from "react";
import { IRecipe } from "../services/interfaces";
import "../stylesheets/RecipeCardSS.css";


type CardProps = {
  recipe: IRecipe,
}
export const RecipeCard: FC<CardProps> = ({ recipe }) => {

  return (
    <>
      <img className="card__image" src={recipe.imageURL} alt={recipe.name} />
      <div className="container">
        <h4><strong>{recipe.name}</strong></h4>
        <h5>Category</h5>
        <p>{recipe.categories[0]?.name !== undefined && recipe.categories[0].name}</p>
        <p>{recipe.categories[0]?.name === undefined && <em>No categories</em>}</p>
      </div>
    </>
  );
}

