import { FC, useEffect, useState } from "react";
import { IRecipe } from "../services/interfaces";
import { RecipeCard } from "./RecipeCard";
import { RecipeViewModal } from "./RecipeViewModal";
import "../stylesheets/RecipeViewModalSS.css"
import "../stylesheets/RecipeCardSS.css"
import { number } from "yup";

type GalleryProps = {
    recipes: IRecipe[],
    editedData: (recipe: IRecipe) => void,
    deletedData: (recipeId: number) => void,
}
export const Gallery: FC<GalleryProps> = ({ recipes, editedData, deletedData }) => {
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

    const editData = (data: IRecipe) => {
        editedData(data);
    }

    const deleteData = (recipeId: number) => {
        deletedData(recipeId);
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
            {showViewModal && showRecipeData !== null && <RecipeViewModal showRecipeData={showRecipeData} onCancel={onCancel} editedData={editData} deletedData={deleteData} />}
        </section>
    );
}