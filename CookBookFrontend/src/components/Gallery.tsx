import { FC, useState } from "react";
import { IRecipe } from "../services/interfaces";
import { RecipeCard } from "./RecipeCard";
import { RecipeViewModal } from "./RecipeViewModal";
import "../stylesheets/RecipeViewModalSS.css"
import "../stylesheets/RecipeCardSS.css"

type GalleryProps = {
    recipes: IRecipe[],
}
export const Gallery: FC<GalleryProps> = ({ recipes }) => {
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

    return (
        <section className="cardsGallery">
            {
                recipes.map(recipe =>
                    <div className="card" onClick={() => viewRecipeDetails(recipe)}>
                        <RecipeCard recipe={recipe} />
                    </div>
                )
            }
            {showViewModal && showRecipeData !== null && <RecipeViewModal showRecipeData={showRecipeData} onCancel={onCancel} />}

        </section>
    );
}