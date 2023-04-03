import { FC, useEffect, useState } from "react";
import { getUserShoppingList } from "../services/api";
import { IShoppingList, IUser } from "../services/interfaces";
import "../stylesheets/ShoppingListModal.css";

type shoppingListProps = {
  userId: number;
  onCancel: () => void;
};

export const ShoppingListModal: FC<shoppingListProps> = ({
  userId,
  onCancel,
}) => {
  const [shoppingList, setshoppingList] = useState<IShoppingList>();

  const getDataShopping = async () => {
    const shoppingListFromApi = await getUserShoppingList(userId);
    setshoppingList(shoppingListFromApi);
  };

  useEffect(() => {
    getDataShopping();
  }, []);

  return (
    <>
      <div id="myModal" className="shoppingModal paper">
        <div className="shoppingModal-content lines">
          <div className="shoppingModal-header">
            <span className="close" onClick={onCancel}>
              &times;
            </span>
          </div>
          {
            <>
              <article className="shopping-model-text text__allIngredients">
                <br />
                <h4 className="modal__heading__groceries text">
                  Grocery list for the week:
                </h4>
                <h4 className="modal__heading text">Ingredients:</h4>
                <div>
                  {
                    <div>
                      {shoppingList?.ingredientShoppingList.map((ing) => (
                        <div className="text">
                          {ing.name} : {ing.quantity} {ing.unit}{" "}
                        </div>
                      ))}
                    </div>
                  }
                </div>
                <div className="holes hole-top"></div>
                <div className="holes hole-middle"></div>
                <div className="holes hole-bottom"></div>
                <br />
                <br />
              </article>
            </>
          }
        </div>
      </div>
    </>
  );
};
