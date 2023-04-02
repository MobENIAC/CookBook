import { FC } from "react";
import { IRecipe } from "../services/interfaces";
import '../stylesheets/RecipeCard.css';

type CardProps = {
  recipe: IRecipe,
}
export const RecipeCard: FC<CardProps> = ({ recipe }) => {

  return (
    <>
      {<img className="card__image" src={recipe.imageURL} alt={recipe.name} />}
      <div className="recipeCard__container">
        <h4 className="card__headline"><strong>{recipe.name}</strong></h4>
        <h5 className="card__headline">Category</h5>
        <p>{recipe.categories[0]?.name !== undefined && recipe.categories[0].name}</p>
        <p>{recipe.categories[0]?.name === undefined && <em>No categories</em>}</p>
      </div>
    </>
  );
}

