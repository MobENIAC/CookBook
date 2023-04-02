import { DayCard } from "./DayCard";
import "../stylesheets/MealPlannerGallery.css";
import { IUser, IRecipe } from "../services/interfaces";
import { FC } from "react";

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

  const update = (boolean : boolean) => {
    updateUsers(boolean);
  }

  return (
    <>
      <section className="mealPlanner">
        <h1>Meal planner</h1>
        <div className="mealPlanner__cards">
           { getUsers.map((user) =>
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
                )))}
        </div>
      </section>
    </>
  );
}
