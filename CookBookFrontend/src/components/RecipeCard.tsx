import { FC } from "react";
import { IRecipe } from "../services/interfaces";
import "../stylesheets/RecipeCardSS.css";


type CardProps = {
    recipe : IRecipe,
} 
export const RecipeCard : FC<CardProps> = ({recipe})=>{

return(
<>
<div className="card">
  <img className="card__image" src={recipe.imageURL} alt="Avatar" />
  <div className="container">
    <h4><strong>{recipe.name}</strong></h4> 
    <h5>Category</h5>
    <p>{recipe.categories[0].name}</p> 
  </div>
</div>
</>
);
}

