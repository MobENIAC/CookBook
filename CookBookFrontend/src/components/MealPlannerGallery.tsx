import { DayCard } from "./DayCard";
import "../stylesheets/MealPlannerGallery.css";
import { IUser, IRecipe } from "../services/interfaces";
import { FC } from "react";

type MealGalleryProps = {
  getUsers: IUser[];
  foundId: string;
  recipesFroApi: IRecipe[],
  updateUsers: (update: boolean) => void
};

export const MealPlannerGallery: FC<MealGalleryProps> = ({
  getUsers,
  foundId,
  recipesFroApi,
  updateUsers
}) => {

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const update = (boolean : boolean) => {
    updateUsers(boolean);
  }
//   const activeUser = getUsers.find(user => user.userId == foundId);
//   console.log(activeUser?.id);
// console.log(activeUser?.days);

  return (
    <>
      <section className="mealPlanner">
        <h1>Meal planner</h1>
        <div className="mealPlanner__cards">
        {/*   {weekDays.map((day) => */}
           { getUsers.map((user) =>
                user.userId === foundId &&
                user.days.map((d) => (
                  <DayCard
                    key={d.id}
                    dayName={d.name}
                    recipes={d.recipe}
                    foundId={foundId}
                    getUser={user}
                    recipesFroApi={recipesFroApi}
                    updateUsers={update}

                  />
                )))}
{/*           )} */}
        </div>
      </section>
    </>
  );
}

  ///// thanos
//   const activeUser = getUsers.find(user => user.userId == foundId);
//   console.log(activeUser)
//   return (
//     <>
//       <section className="mealPlanner">
//         <h1>Meal planner</h1>
//         <div className="mealPlanner__cards">
//           {weekDays.map((day) =>
//             <>
//             <p>{day}</p>
              
//                                   {/* <DayCard
//                                     key={day.id}
//                                     dayName={day}
//                                     recipes={d.recipes}
//                                     foundId={foundId}
//                                     getUser={activeUser}
//                                     recipesFroApi={recipesFroApi}
//                                   /> */}
                                
//             </>

//           )}
//         </div>
//       </section>
//     </>
//   );
// };
