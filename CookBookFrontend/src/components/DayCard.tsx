import { FC, useEffect, useState } from "react";
import { IRecipe, IUser } from "../services/interfaces";
import { DayCardViewModal } from "./DayCardViewModal";
import { RecipeCard } from "./RecipeCard";
import { RecipeViewModal } from "./RecipeViewModal";
import '../stylesheets/DayCard.css';
import { Form } from "react-bootstrap";

type DayCardProps = {
  dayName: string;
  recipes: IRecipe[];
  foundId: string;
  getUser: IUser;
  recipesFroApi: IRecipe[]
};

export const DayCard: FC<DayCardProps> = ({
  dayName,
  recipes,
  foundId,
  getUser,
  recipesFroApi
}) => {
  const [showViewModal, setShowViewModal] = useState(false);
  const [showRecipeData, setShowRecipeData] = useState(null as IRecipe | null)
  const [filterRecipe, setFilterRecipe] = useState<string>("");


  const viewRecipeDetails = (recipeData: IRecipe) => {
    setShowRecipeData(recipeData);
    setShowViewModal(!showViewModal);
  }
  const onCancel = () => {
    setShowViewModal(!showViewModal);
  }

  const editData = (data: IRecipe) => {
    return "hello";
  }
  const deleteData = (recipeId: number) => {
    return "hello";
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
     setFilterRecipe(e.target.value);
  };

  return (
    <section className="dayCard">
      <h3>{dayName}</h3>
    <div className="dayCard__filter">
      <div className="filter__main">
            <Form.Select
              className="selectCategories"
              id="filter"
              name="filter"
              value={filterRecipe}
               onChange={handleChange}
            >
              <option className="filter__options" value=''>All Recipes</option>
              {
                recipesFroApi.map((res) => {
                  return (
                   
                    <option key={res.id} className="filter__options" value={res.name}>{res.name}</option>  
         
                  )
                })
              }
            </Form.Select>
          </div>
          <button type="button">Click Me!</button>

          </div>
      <h3>
        {dayName &&
          getUser.days.map(
            (d) =>
              d.name === dayName && (
                <div key={d.id}>
                  {d.recipes !== null && d.recipes.map((recipe) => (
                    <div key={recipe.id}>
                      <a className="recipeLink" onClick={() => viewRecipeDetails(recipe)}>{recipe.name}</a>
                  {/*     <div key={recipe.id} className="card" onClick={() => viewRecipeDetails(recipe)}>
                        <RecipeCard recipe={recipe} />
                      </div> */}
                      {showViewModal && showRecipeData !== null && <DayCardViewModal showRecipeData={showRecipeData} onCancel={onCancel} foundId={foundId} />}
                    </div>
                  ))}
                </div>
              )
          )}
      </h3>
    </section>
  );
};
