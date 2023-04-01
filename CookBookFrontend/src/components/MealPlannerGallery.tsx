import { DayCard } from "./DayCard";
import "../stylesheets/MealPlannerGallery.css";
import { IUser, IRecipe } from "../services/interfaces";
import { FC } from "react";

type MealGalleryProps = {
  getUsers: IUser[];
  foundId: string;
  recipesFroApi : IRecipe[]
};

export const MealPlannerGallery: FC<MealGalleryProps> = ({
  getUsers,
  foundId,
  recipesFroApi
}) => {

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  
  return (
    <>
      <section className="mealPlanner">
        <h1>Meal planner</h1>
        <div className="mealPlanner__cards">
          {days.map((day) =>
            getUsers.map(
              (user) =>
                user.userId === foundId &&
                user.days.map((d) => (
                  <DayCard
                    key={d.id}
                    dayName={day}
                    recipes={d.recipes}
                    foundId={foundId}
                    getUser={user}
                    recipesFroApi={recipesFroApi}
                  />
                )))
          )}
        </div>
      </section>
    </>
  );
};
