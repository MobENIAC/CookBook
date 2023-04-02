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
    // shoppingList: IShoppingList | undefined,
    // normalId :number
}

export const ShoppingListModal: FC<shoppingListProps> = ({ getUsers, foundId,  }) => {
    // const [shoppingList, setshoppingList] = useState<IShoppingList>();

    // // const normalId = getUsers?.find(c => c.userId == foundId)?.id;

    // const getDataShopping = async () => {
    //     const shoppingListFromApi = await getUserShoppingList(normalId);
    //     setshoppingList(shoppingListFromApi);
    // }
    // console.log(normalId);

    // useEffect(() => {
    //     // getDataShopping(normalId === undefined ? 0 : normalId)
    //     // getDataShopping();
    // }, []);

    // console.log(shoppingList?.id);
    return (
        <>
            <div>thanos</div>
        </>
    )
}