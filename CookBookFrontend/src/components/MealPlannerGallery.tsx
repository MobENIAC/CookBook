import { DayCard } from "./DayCard";
import "../stylesheets/MealPlannerGallery.css";
import { IUser, IRecipe } from "../services/interfaces";
import { FC, useEffect, useState } from "react";
import { ShoppingListModal } from "./ShoppingListModal";
import { getUserShoppingList } from "../services/api";
import { IShoppingList } from "../services/interfaces";

type MealGalleryProps = {
  getUsers: IUser[];
  foundId: string;
  recipesFromApi: IRecipe[],
  updateUsers: (update: boolean) => void
};

export const MealPlannerGallery: FC<MealGalleryProps> = ({
  getUsers,
  foundId,
  recipesFromApi,
  updateUsers
}) => {
  // const [normalId, setNormalId] = useState<number>(0);
  const [shoppingList, setshoppingList] = useState<IShoppingList>();
  const [displayShoppingList, setDisplayShoppingList] = useState<boolean>(false);

  const update = (boolean: boolean) => {
    updateUsers(boolean);
  }

  const openShoppingList = () => {
    setDisplayShoppingList(!displayShoppingList);
  }

  const onCancel = () => {
    setDisplayShoppingList(!displayShoppingList);
}

  return (
    <>
      <section className="mealPlanner">
        <h1>Meal planner</h1>
        <button onClick={openShoppingList}>Shopping List</button>
        {/* <ShoppingListModal foundId={foundId} getUsers={getUsers}  /> */}
        <div className="mealPlanner__cards">
          {getUsers.map((user) =>
            user.userId === foundId &&
            user.days.map((d) => (
              <>
                <DayCard
                  key={d.id}
                  dayName={d.name}
                  recipes={d.recipe}
                  foundId={foundId}
                  getUser={user}
                  recipesFromApi={recipesFromApi}
                  updateUsers={update}
                />
                {displayShoppingList && <ShoppingListModal onCancel={onCancel} userId={user.id} />}
              </>
            ),
            ))}
        </div>
      </section>
    </>
  );
}
