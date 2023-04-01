import { FC, useEffect, useState } from 'react'
import { IRecipe } from '../services/interfaces'
import '../stylesheets/RecipeViewModal.css'
import { EditRecipe } from './EditRecipe'

type recipeDetailsProps = {
  onCancel: () => void,
  showRecipeData: IRecipe,
  foundId: string
}

export const DayCardViewModal: FC<recipeDetailsProps> = ({ onCancel, showRecipeData, foundId }) => {

  return (
    <>
      <div id="myModal" className="recipeModal">
        <div className="recipeModal-content">
          <div className="recipeModal-header">
            <span className="close" onClick={onCancel}>&times;</span>
            <h2 className='modal__first__heading'>{showRecipeData.name}</h2>
          </div>

          <>
            <article className='recipe-model-text'>
              <img className="modal__image" src={showRecipeData.imageURL} alt={showRecipeData.name} />
              <br />
              <h4 className='modal__heading'>Description:</h4>
              <div><p>{showRecipeData.description}</p></div>
              {/* <h4 className='modal__heading'>Categories:</h4>
              <div>{showRecipeData.categories.map(category =>
                <div key={category.id}>{category.name}, {category.type}</div>
              )}</div>
              <h4 className='modal__heading'>Ingredients:</h4>
              <div>  {showRecipeData.ingredients.map(ingredient =>
                <div key={ingredient.id}>
                  {ingredient.name} {ingredient.quantity}{ingredient.unit}
                  <br />
                </div>
              )}</div> */}
              <h4 className='modal__heading'>Instructions:</h4>
              <div><p>
                {showRecipeData.instructions}
              </p>
              </div>
              <br />
              <br />
            </article>
            <div className="recipeModal-footer">
            </div>
          </>
        </div>
      </div>
    </>
  )
}
