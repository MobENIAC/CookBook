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


  const update = (boolean: boolean) => {
    updateUsers(boolean);
  }
   const normalId = getUsers?.find(c => c.userId == foundId)!.id;
  const usersss  = getUsers.map((user) =>{
  if (user.userId === foundId ) {
    return user.id;
  }

});
// const test = 

  const getDataShopping = async () => {
      const shoppingListFromApi = await getUserShoppingList(normalId);
      setshoppingList(shoppingListFromApi);
  }
  
  useEffect(() => {
    // getDataShopping();
    // const originalUserId: number = getUsers!.find(c => c.userId == foundId)!.id; 
    // setNormalId(originalUserId);
  },[])
 console.log(shoppingList!.id);
  return (
    <>
      <section className="mealPlanner">
        <h1>Meal planner</h1>
        <button>Shopping List</button>
        <ShoppingListModal foundId={foundId} getUsers={getUsers}  />
        <div className="mealPlanner__cards">
          {getUsers.map((user) =>
            user.userId === foundId &&
            user.days.map((d) => (
              <DayCard
                key={d.id}
                dayName={d.name}
                recipes={d.recipe}
                foundId={foundId}
                getUser={user}
                recipesFromApi={recipesFromApi}
                updateUsers={update}

              />
            )))

          }
        </div>
      </section>
    </>
  );
}
