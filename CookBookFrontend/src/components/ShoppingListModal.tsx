import { FC, useEffect, useState } from "react";
import { getUserShoppingList } from "../services/api";
import { IShoppingList, IUser } from "../services/interfaces";


type shoppingListProps = {
  
    userId : number
 
}

export const ShoppingListModal: FC<shoppingListProps> = ({ userId  }) => {
    const [shoppingList, setshoppingList] = useState<IShoppingList>();


    const getDataShopping = async () => {
        const shoppingListFromApi = await getUserShoppingList(userId);
        setshoppingList(shoppingListFromApi);
    }
    console.log(userId);

    useEffect(() => {
         getDataShopping();
    }, []);

    return (
        <>
        {console.log(shoppingList?.id)}
            <div>thanos</div>
        </>
    )
}