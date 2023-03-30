import { FC, useEffect, useState } from "react";
import { IRecipe } from "../services/interfaces";
import { RecipeCard } from "./RecipeCard";
import { RecipeViewModal } from "./RecipeViewModal";
import { number } from "yup";
import '../stylesheets/Gallery.css'

type GalleryProps = {
    recipes: IRecipe[],
    editedData: (recipe: IRecipe) => void,
    deletedData: (recipeId: number) => void,
    recipeSearchWord: string,
    filterCategory: string,
    foundId: string
}
export const Gallery: FC<GalleryProps> = ({ recipes, editedData, deletedData, recipeSearchWord, filterCategory, foundId }) => {
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
                recipes.filter((recipe) => {
                    if (recipeSearchWord.length > 0) {
                        return recipe.name.toLowerCase().match(recipeSearchWord.toLowerCase()) 
                    } 
                    if (filterCategory !== "") {
                        return recipe.categories.filter((cat) => cat.name === filterCategory)}
                    return recipe;
                }).map(recipe =>
                    <div key={recipe.id} className="card" onClick={() => viewRecipeDetails(recipe)}>
                        <RecipeCard recipe={recipe} />
                    </div>
                )
            }
            {showViewModal && showRecipeData !== null && <RecipeViewModal showRecipeData={showRecipeData} onCancel={onCancel} editedData={editData} deletedData={deleteData} foundId={foundId} />}
        </section>
    );
}