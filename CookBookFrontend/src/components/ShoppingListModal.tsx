import { FC, useEffect, useState } from "react";
import { getUserShoppingList } from "../services/api";
import { IShoppingList, IUser } from "../services/interfaces";


type shoppingListProps = {
    // onCancel: () => void,
    // editedData: (recipe: IRecipe) => void,
    // deletedData: (recipeId: number) => void,
    // showRecipeData: IRecipe,
    foundId: string,
    // fromMealPlan: boolean,
    getUsers: IUser[],
    normalId: number,
    // normalId :number
}

export const ShoppingListModal: FC<shoppingListProps> = ({ getUsers, foundId, normalId }) => {
    const [shoppingList, setshoppingList] = useState<IShoppingList>();

    // const normalId = getUsers?.find(c => c.userId == foundId)?.id;


    const getDataShopping = async (id: number) => {
        const shoppingListFromApi = await getUserShoppingList(id);
        setshoppingList(shoppingListFromApi);
    }
    console.log(normalId);

    useEffect(() => {

            // getDataShopping(normalId === undefined ? 0 : normalId)
            getDataShopping(normalId);


    }, []);

    console.log(shoppingList);
    return (
        <>
            <div>thanos</div>
        </>
    )
}