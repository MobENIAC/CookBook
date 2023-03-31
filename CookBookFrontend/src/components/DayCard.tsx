import { FC, useEffect, useState } from "react";
import { IRecipe, IUser } from "../services/interfaces";
import { RecipeViewModal } from "./RecipeViewModal";

type DayCardProps = {
  dayName: string;
  recipes: IRecipe[];
  foundId: string;
  getUser: IUser;
};

export const DayCard: FC<DayCardProps> = ({
  dayName,
  recipes,
  foundId,
  getUser,
}) => {
  console.log(foundId);
  return (
    <>
      <h3>{dayName}</h3>
      <h3>
        {dayName &&
          getUser.days.map(
            (d) =>
              d.name === dayName && (
                <>
                  <p>
                    {d.recipes.map((recipe) => 
                      recipe.name
                    )}
                  </p>
        {/*           {d.recipes.map(recipe => 
                <RecipeViewModal showRecipeData={recipe} onCancel={onCancel} editedData={editData} deletedData={deleteData} foundId={foundId} />
                    )} */}
                </>
              )
          )}
      </h3>
      <p>hello</p>
    </>
  );
};
