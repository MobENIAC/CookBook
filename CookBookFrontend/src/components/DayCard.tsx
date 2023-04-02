import { FC, useEffect, useState } from "react";
import { IDay, IDayPut, IRecipe, IUser, IUserPut } from "../services/interfaces";
import { RecipeCard } from "./RecipeCard";
import { RecipeViewModal } from "./RecipeViewModal";
import '../stylesheets/DayCard.css';
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { deleteUserById, updateUser } from "../services/api";

type DayCardProps = {
  dayName: string;
  recipes: IRecipe[];
  foundId: string;
  getUser: IUser;
  recipesFromApi: IRecipe[]
  updateUsers: (update: boolean) => void,
};

export const DayCard: FC<DayCardProps> = ({
  dayName,
  recipes,
  foundId,
  getUser,
  recipesFromApi,
  updateUsers
}) => {
  const [showViewModal, setShowViewModal] = useState(false);
  const [showRecipeData, setShowRecipeData] = useState(null as IRecipe | null)
  const [filterRecipe, setFilterRecipe] = useState<IRecipe>();


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
  const deleteData = async (recipeId: number) => {

    const allDays = getUser.days.map(day => {
      let putDay: IDayPut = {
        id: 0,
        name: day.name,
        recipeIds: day.recipe.map(r => r.id),
      }
      if (putDay.name === dayName) {
        putDay.recipeIds = day.recipe.filter(r => r.id !== recipeId).map(r => r.id)
      }
      return putDay;
    });

    const updatedUser: IUserPut = {
      id: getUser.id,
      userId: foundId,
      days: [...allDays]
    }

    await updateUser(getUser.id, updatedUser);
    updateUsers(true);
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRecipe = recipesFromApi.find(r => r.name === e.target.value);
    setFilterRecipe(selectedRecipe);
  };

  const addToMealPlan = async (e: any) => {
    e.preventDefault();

    const thanosIsAwesome = getUser.days.find(d => d.name === dayName)?.recipe.map(r => r.id);

    const createdDay: IDayPut = {
      id: 0,
      name: dayName,
      recipeIds: [...thanosIsAwesome!, filterRecipe?.id!]
    }

    const allDays = getUser.days.map(day => {
      let putDay: IDayPut = {
        id: 0,
        name: day.name,
        recipeIds: day.recipe.map(r => r.id),
      }
      if (putDay.name === dayName) {
        putDay = createdDay;
      }
      return putDay;
    });

    const updatedUser: IUserPut = {
      id: getUser.id,
      userId: foundId,
      days: [...allDays]
    }

    await updateUser(getUser.id, updatedUser);
    updateUsers(true);
  }


  return (
    <section className="dayCard">
      <h3>{dayName}</h3>
      <h4 className="dayCard__addTitle">Add recipes:</h4>

      <div className="dayCard__filter">
        <div className="filter__main">
          <Form className="dayCard__form">
          
          {/* <div className="dayCard__form__select__button"> */}

            <Form.Select
              className="selectCategories dayCard__select"
              id="filter"
              name="filter"
              value={filterRecipe?.name}
              onChange={handleChange}
            >
              <option className="filter__options" value=''>All Recipes</option>
              {
                recipesFromApi.map((res) => {
                  return (
                    <option key={res.id} className="filter__options" value={res.name}>{res.name}</option>
                  )
                })
              }
            </Form.Select>
            <Button className="dayCard__button" variant="primary" type="submit" onClick={addToMealPlan}>
              OK
            </Button>
            {/* </div> */}

          </Form>

        </div>
      </div>
      <h3 className="dayCard__link">
        {dayName &&
          getUser.days.map(
            (d) =>
              d.name === dayName && (
                <div  key={d.id}>
                  {d.recipe !== undefined && d.recipe.map((recipe) => (
                    <div className="dayCard__link__button" key={recipe.id}>
                      <a className="recipeLink" onClick={() => viewRecipeDetails(recipe)}>{recipe.name}</a>
                      <Button className="dayCard__button__delete" onClick={() => deleteData(recipe.id)}>Remove</Button>

                      {showViewModal && showRecipeData !== null && <RecipeViewModal showRecipeData={showRecipeData} editedData={editData} deletedData={deleteData} onCancel={onCancel} foundId={foundId} fromMealPlan={true} />}
                    </div>
                  ))}
                </div>
              )
          )}
      </h3>
     
    </section>
  );
};