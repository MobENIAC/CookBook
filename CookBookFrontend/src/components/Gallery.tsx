import { FC, useEffect, useState } from "react";
import { IRecipe } from "../services/interfaces";
import { RecipeCard } from "./RecipeCard";
import { RecipeViewModal } from "./RecipeViewModal";
import "../stylesheets/RecipeViewModalSS.css"
import "../stylesheets/RecipeCardSS.css"

type GalleryProps = {
    recipes: IRecipe[],
    editedData: (recipe: IRecipe) => void
}
export const Gallery: FC<GalleryProps> = ({ recipes, editedData }) => {
    const [showViewModal, setShowViewModal] = useState(false);
    const [showRecipeData, setShowRecipeData] = useState(null as IRecipe | null)
    // const [showPage, setShowPage] = useState(PageEnum.list)

    const viewRecipeDetails = (recipeData: IRecipe) => {
        setShowRecipeData(recipeData);
        setShowViewModal(!showViewModal);
    }
    const onCancel = () => {
        setShowViewModal(!showViewModal);
    }

    const editData = async (data: IRecipe) => {
        editedData(data);
    }


    return (
        <section className="cardsGallery">
            {
                recipes.map(recipe =>
                    <div key={recipe.id} className="card" onClick={() => viewRecipeDetails(recipe)}>
                        <RecipeCard recipe={recipe} />
                    </div>
                )
            }
            {showViewModal && showRecipeData !== null && <RecipeViewModal showRecipeData={showRecipeData} onCancel={onCancel} editedData={editData} />}
        </section>
    );
}