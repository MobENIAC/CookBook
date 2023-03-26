import React, { EventHandler, FC, SyntheticEvent } from "react";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import "../stylesheets/AddRecipeSS.css"
import { ICategory, IIngredient, IRecipe } from "../services/interfaces";

type AddRecipeProps = {
  addRecipes: (reipe: IRecipe) => void;
}

export const AddRecipe: FC<AddRecipeProps> = ({ addRecipes }) => {

  const defaultValues = {
    recipe: {
      name: "",
      imageURL: "",
      categories: [{ name: "", categoryType: "" }],
      ingredients: [{ name: "", unit: "", quantity: 0 }]
    },
  };


  const schema = yup.object().shape({
    recipe: yup.object().shape({
      name: yup.string().min(3).required().matches(/^[a-zA-Z ,.'-]+$/, "Name must be characters"),
      imageURL: yup.string().required(),
      categories: yup.array().of(
        yup.object().shape({
          name: yup.string().min(3).required().matches(/^[a-zA-Z ,.'-]+$/, "Name must be characters"),
          categoryType: yup.string().required(),
        })
      ),
      ingredients: yup.array().of(
        yup.object().shape({
          name: yup.string().min(3).required().matches(/^[a-zA-Z ,.'-]+$/, "Name must be characters"),
          unit: yup.string().required(),
          quantity: yup.number().required(),
        })
      )
    }),
  });

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const { fields: categoryField, append: categoryAppend, remove: categoryRemove } = useFieldArray({
    control,
    name: "recipe.categories",
  });

  const { fields: ingredientField, append: ingredientAppend, remove: ingredientRemove } = useFieldArray({
    control,
    name: "recipe.ingredients",
  });


  const onSubmit = (e : any) => {
    const target = e.target as typeof e.target & {
      name: { value: string };
      country: { value: string };
      imageURL: { value: string };
      categories: { value: ICategory[]};
      ingredients: { value: IIngredient[]};
    };

    const data : IRecipe = {
      id: 0,
      name: target.name.value,
      imageURL: target.imageURL.value,
      categories: target.categories.value,
      ingredients: target.ingredients.value
    };

    addRecipes(data);
  }

/*   const handleSubmit = () => {

  } */
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Recipe Name</label>
        <input id="name" type="text" {...register("recipe.name")} />
        {errors.recipe?.name && (
          <span className="errorMessage">{errors.recipe?.name?.message?.toString()}</span>
        )}
      </div>
      <div>
        <label htmlFor="imageURL">Image URL</label>
        <input id="imageURL" type="text" {...register("recipe.imageURL")} />
        {errors.recipe?.imageURL && (
          <span className="errorMessage">{errors.recipe?.imageURL?.message?.toString()}</span>
        )}
      </div>
      {categoryField.map((field, index) => (
        <div key={field.id}>
          <label htmlFor={`categories.${index}.name`}>
            Category Name {index + 1}
          </label>
          <input
            id={`categories.${index}.name`}
            type="text"
            {...register(`recipe.categories.${index}.name`)}
          />
          {errors.recipe?.categories && errors.recipe.categories[index] && (
            <span className="errorMessage">{errors.recipe.categories[index]!.name?.message?.toString()}</span>
          )}
          <label htmlFor={`categories.${index}.categoryType`}>
            Category Type {index + 1}
          </label>
          <input
            id={`categories.${index}.categoryType`}
            type="text"
            {...register(`recipe.categories.${index}.categoryType`)}
          />
          {errors.recipe?.categories && errors.recipe.categories[index] && (

            <span className="errorMessage">{errors.recipe.categories[index]!.categoryType?.message?.toString()}</span>
          )}
          <button type="button" onClick={() => categoryRemove(index)}>
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => categoryAppend({ name: "", categoryType: "" })}
      >
        Add Category
      </button>

      {ingredientField.map((field, index) => (
        <div key={field.id}>
          <label htmlFor={`ingredients.${index}.name`}>
            Ingredients Name {index + 1}
          </label>
          <input
            id={`ingredients.${index}.name`}
            type="text"
            {...register(`recipe.ingredients.${index}.name`)}
          />
          {errors.recipe?.ingredients && errors.recipe.ingredients[index] && (
            <span className="errorMessage">{errors.recipe.ingredients[index]!.name?.message?.toString()}</span>
          )}
          <label htmlFor={`ingredients.${index}.unit`}>
            Ingredients Unit {index + 1}
          </label>
          <input
            id={`ingredients.${index}.unit`}
            type="text"
            {...register(`recipe.ingredients.${index}.unit`)}
          />
          {errors.recipe?.ingredients && errors.recipe.ingredients[index] && (

            <span className="errorMessage">{errors.recipe.ingredients[index]!.unit?.message?.toString()}</span>
          )}
          <button type="button" onClick={() => ingredientRemove(index)}>
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => ingredientAppend({ name: "", unit: "", quantity: 0 })}
      >
        Add Ingredient
      </button>


      <button type="submit">Submit</button>
    </form>
  );
};









