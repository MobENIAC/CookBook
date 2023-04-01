import { FC, useEffect, useState } from 'react'
import { IRecipe } from '../services/interfaces'
import '../stylesheets/RecipeViewModal.css'
import { EditRecipe } from './EditRecipe'

type recipeDetailsProps = {
  onCancel: () => void,
  editedData: (recipe: IRecipe) => void,
  deletedData: (recipeId: number) => void,
  showRecipeData: IRecipe,
  foundId: string,
  fromMealPlan: boolean,
}

export const RecipeViewModal: FC<recipeDetailsProps> = ({ onCancel, showRecipeData, editedData, deletedData, foundId, fromMealPlan}) => {
  const [editedRecipe, setEditedRecipe] = useState<IRecipe>(showRecipeData);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const setEditDisplay = () => {
    setShowEdit(!showEdit);
  }

  const editData = async (data: IRecipe) => {
    editedData(data);
    setEditedRecipe(data);
  }

  const onCancelEdit = () => {
    setShowEdit(!showEdit);
  }

  const setDeleteDisplay = () => {
    setShowDelete(!showDelete);
  }

  const confirmDelete = () => {
    if(fromMealPlan === false){

    }
    deletedData(editedRecipe.id);

    setDeleteSuccess(!deleteSuccess);
    const timer = setTimeout(() => {
      onCancel();
    }, 2500);
    return () => clearTimeout(timer);
  }

  useEffect(() => {
    showRecipeData = editedRecipe!;
    setEditedRecipe(showRecipeData);
  }, [editedRecipe])

  return (
    <>
      <div id="myModal" className="recipeModal">
        <div className="recipeModal-content">
          <div className="recipeModal-header">
            <span className="close" onClick={onCancel}>&times;</span>
            <h2 className='modal__first__heading'>{editedRecipe.name}</h2>
          </div>

          {!showEdit && !showDelete &&
            <>
              <article className='recipe-model-text'>
                <img className="modal__image" src={editedRecipe.imageURL} alt={editedRecipe.name} />
                <br />
                <h4 className='modal__heading'>Description:</h4>
                <div><p>{editedRecipe.description}</p></div>
                <h4 className='modal__heading'>Categories:</h4>
                <div>{editedRecipe.categories.map(category =>
                  <div key={category.id}>{category.name}, {category.type}</div>
                )}</div>
                <h4 className='modal__heading'>Ingredients:</h4>
                <div>  {editedRecipe.ingredients.map(ingredient =>
                  <div key={ingredient.id}>
                    {ingredient.name} {ingredient.quantity}{ingredient.unit}
                    <br />
                  </div>
                )}</div>
                <h4 className='modal__heading'>Instructions:</h4>
                <div><p>
                  {editedRecipe.instructions}
                </p>
                </div>
                <br />
                <br />
              </article>
              <div className="recipeModal-footer">
                {foundId === showRecipeData.createdByUser && !fromMealPlan &&
                  <>
                    <button className="recipe__button" onClick={setEditDisplay}>Edit Recipe</button>
                    <button className="recipe__button" onClick={setDeleteDisplay}>Delete Recipe</button>
                  </>
                }
              </div>
            </>
          }
          {showEdit && <EditRecipe editRecipes={editData} recipe={editedRecipe} onCancelEdit={onCancelEdit} />}
          {showDelete && !deleteSuccess && <>
            <p className='recipe__delete'>Are you sure?</p>
            <button className="recipe__button recipe__delete" onClick={confirmDelete}>Yes</button>
            <button className="recipe__button recipe__delete" onClick={() => setShowDelete(!showDelete)}>Cancel</button>
          </>
          }
          {deleteSuccess && <>
            <p>✅ Success!</p>
          </>
          }
        </div>
      </div>
    </>
  )
}
