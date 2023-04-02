import { FC, useEffect, useState } from "react";
import { getUserShoppingList } from "../services/api";
import { IShoppingList, IUser } from "../services/interfaces";
/* import "../stylesheets/ShoppongListModel.css"; */

type shoppingListProps = {
    userId: number
    onCancel: () => void,
}

export const ShoppingListModal: FC<shoppingListProps> = ({ userId, onCancel }) => {
    const [shoppingList, setshoppingList] = useState<IShoppingList>();


    const getDataShopping = async () => {
        const shoppingListFromApi = await getUserShoppingList(userId);
        setshoppingList(shoppingListFromApi);
    }

    useEffect(() => {
        getDataShopping();
    }, []);

    return (
        <>
            <div id="myModal" className="recipeModal">
                <div className="recipeModal-content">
                    <div className="recipeModal-header">
                        <span className="close" onClick={onCancel}>&times;</span>
                    </div>
                    {
                        <>
                            <article className='recipe-model-text'>
                                <br />
                                <h4 className='modal__heading'>Grocery List For Week:</h4>
                                <h4 className='modal__heading'>Ingredients:</h4>
                                <div>{
                                    <div >{shoppingList?.ingredientShoppingList.map((ing) =>
                                        <div>{ing.name} : {ing.quantity} {ing.unit} </div>
                                    )}</div>

                                }</div>

                                <br />
                                <br />
                            </article>
                            <div className="recipeModal-footer">
                            </div>
                        </>
                    }
                </div>
            </div>
        </>

    )
}