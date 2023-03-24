import { FC, useState } from "react";
import { IRecipe } from "../services/interfaces";
import { RecipeCard } from "./RecipeCard";
import { RecipeViewModal } from "./RecipeViewModal";

type GalleryProps = {
    recipes: IRecipe[],
}
export const Gallery: FC<GalleryProps> = ({ recipes }) => {
    const [showViewModal, setShowViewModal] = useState(false);
    const [showRecipeData, setShowRecipeData] = useState(null as IRecipe | null)
    // const [showPage, setShowPage] = useState(PageEnum.list)


    const viewRecipeDetails = (recipeData : IRecipe ) => {
        setShowRecipeData(recipeData);
        setShowViewModal(!showViewModal);
    }
    const onCancel = () => {
        setShowViewModal(!showViewModal);
    }
    // const onAddEmployeeClickHnd = () => {
    //     setShowPage(PageEnum.add);
    // }
    // const backToEmployeesList = () => {
    //     setShowPage(PageEnum.list);
    // }

    return (
        <>
            {
                recipes.map(recipe =>
                    <span onClick={() => viewRecipeDetails(recipe)}>
                        <RecipeCard recipe={recipe} />
                    </span>
                )
            }
        {showViewModal && showRecipeData !== null && <RecipeViewModal showRecipeData={showRecipeData} onCancel={onCancel} />}

        </>
    );
}