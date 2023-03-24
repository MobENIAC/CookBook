import { FC, useState } from "react";
import { IRecipe } from "../services/interfaces";
import { RecipeCard } from "./RecipeCard";
import { RecipeViewModal } from "./RecipeViewModal";

type GalleryProps = {
    recipes: IRecipe[],
}
export const Gallery: FC<GalleryProps> = ({ recipes }) => {
    const [showViewModal, setShowViewModal] = useState(false);

    const viewEmployeeDetails = () => {
        setShowViewModal(!showViewModal);
    }
    const onCancel = () => {
        setShowViewModal(!showViewModal);
    }

    return (
        <>
            {
                recipes.map(recipe =>
                    <span onClick={() => viewEmployeeDetails()}>
                        <RecipeCard recipe={recipe} />
                        {showViewModal && recipe !== null && <RecipeViewModal recipe={recipe} onCancel={onCancel} />}
                    </span>
                )
            }

        </>
    );
}