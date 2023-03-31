import { DayCard } from "./DayCard";
import "../stylesheets/MealPlannerGallery.css";
import { IUser, day } from "../services/interfaces";
import { FC } from "react";

type MealGalleryProps = {
  getUsers: IUser[];
  foundId: string;
};

export const MealPlannerGallery: FC<MealGalleryProps> = ({
  getUsers,
  foundId,
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
        <>
          {days.map((day) =>
            getUsers.map(
              (user) =>
                user.userId === foundId && 
                user.days.map((d) => (
                  <DayCard
                    dayName={day}
                    recipes={d.recipes}
                    foundId={foundId}
                    getUser={user}
                  />
                ))
            )
          )}
        </>
      </section>
    </>
  );
};
