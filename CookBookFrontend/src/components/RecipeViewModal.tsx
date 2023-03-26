import React, { FC, useEffect, useState } from 'react'
import { IRecipe } from '../services/interfaces'
import "../stylesheets/RecipeViewModalSS.css"
import { EditRecipe } from './EditRecipe'

type recipeDetailsProps = {
  onCancel: () => void,
  editedData: (recipe: IRecipe) => void,
  showRecipeData: IRecipe
}

export const RecipeViewModal: FC<recipeDetailsProps> = ({ onCancel, showRecipeData, editedData }) => {
  const [editedRecipe, setEditedRecipe] = useState<IRecipe>(showRecipeData);
  const [showEdit, setShowEdit] = useState(false);

  const setDisplay = () => {
    setShowEdit(!showEdit);
  }

  const editData = async (data: IRecipe) => {
    editedData(data);
    setEditedRecipe(data);
  }

  const onCancelEdit = () => {
    setShowEdit(!showEdit);
  }
  useEffect(() => {
    showRecipeData = editedRecipe!;
    setEditedRecipe(showRecipeData);
    console.log(editedRecipe);
  }, [editedRecipe])

  return (
    <div id="myModal" className="recipeModal">
      <div className="recipeModal-content">
        <div className="recipeModal-header">
          <span className="close" onClick={onCancel}>&times;</span>
          <h2>{editedRecipe.name}</h2>
        </div>

        {!showEdit &&
          <>
            <div className="recipeModal-body">

              <article className='recipe-model-table'>
                <img className="card__image" src={editedRecipe.imageURL} alt="Avatar" />
                <br />
                <h4>Description:</h4>
                <div><p>This recipe is ideal for those cold winter days...</p></div>
                <h4>Categories:</h4>
                <div>{editedRecipe.categories.map(category =>
                  <div key={category.id}>{category.name}, {category.type}</div>
                )}</div>
                <h4>Ingredients:</h4>
                <div>  {editedRecipe.ingredients.map(ingredient =>
                  <div key={ingredient.id}>
                    {ingredient.name} {ingredient.quantity}{ingredient.unit}
                    <br />
                  </div>
                )}</div>
                <h4>Preparation:</h4>
                <div><p>1. Grate the raw potatoes using a standard box grater. I like to do it lengthwise to get nice long strands – but it really doesn’t matter how long or short your strands are. There is no need to parboil – I find that makes the inside too much like mashed potato before the outside gets golden;
                  <br />
                  2. Squeeze out the excess liquid then transfer to a bowl. No need to be 100% thorough here, squeezing out every drop of water, because we actually need some of that water to help steam-cook the inside (otherwise it takes forever to cook through!). That’s why I just grab handfuls rather than using a tea towel which is more thorough.
                  However, squeezing out most of the water is necessary because otherwise all that water leeches down to the base of the pan as it cooks and it does eventually evaporate, but it takes longer and stops the base from getting really crispy.
                  Don’t worry if your potatoes go brown / reddish while sitting around. This is just from oxidation (reaction of potato to air) and it’s all bluster; it doesn’t mean the potato is off. Once you start cooking, it will change back to white;
                  <br />
                  3. Mix the potatoes with melted butter (or clarified butter, if that’s what you’re using), salt and pepper;
                  <br />
                  4. Scatter into skillet lightly, don’t pack it down tightly. We want FLUFFY on the inside! It will seem quite deep – around 3.5cm / 1.5″ – but it cooks down to 2cm / 4/5″.
                  <br />
                  Cook for 12 minutes on medium low to make the underside golden and for the inside to cook through and semi-adhere together. We don’t want mash – we just want the strands to cook through until soft and bond together enough to be sliceable without falling apart. This is the reason it’s best not to rinse the grated potato – because it removes much more starch than just squeezing out excess water. This results in “slippery” potato strands, rather than bonding together.
                </p></div>
                <br />
                <br />
              </article>
            </div>
            <div className="recipeModal-footer">
              <button onClick={setDisplay}>Edit Recipe</button>
            </div>
          </>
        }
        {showEdit && <EditRecipe editRecipes={editData} recipe={editedRecipe} onCancelEdit={onCancelEdit} />}
      </div>
    </div>
  )
}
