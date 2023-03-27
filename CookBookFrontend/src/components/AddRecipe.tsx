import { FC, useState } from "react";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import "../stylesheets/AddRecipeSS.css"
import { IRecipe } from "../services/interfaces";

type AddRecipeProps = {
  addRecipes: (recipe: IRecipe) => void;
}

export const AddRecipe: FC<AddRecipeProps> = ({ addRecipes }) => {
  const [success, setSuccess] = useState<boolean>(false);

  const schema = yup.object().shape({
    name: yup.string().required("Name is required").min(3, "Name must be minimum 3 characters").matches(/^[a-zA-Z ,.'-]+$/, "Name must be characters"),
    imageURL: yup.string().required(),
    categories: yup.array().of(
      yup.object().shape({
        name: yup.string().required("Category name is required").min(3, "Category name must be minimum 3 characters").matches(/^[a-zA-Z ,.'-]+$/, "Name must be characters"),
        type: yup.string().required(),
      })
    ),
    ingredients: yup.array().of(
      yup.object().shape({
        name: yup.string().min(3).required().matches(/^[a-zA-Z ,.'-]+$/, "Name must be characters"),
        unit: yup.string().required(),
        quantity: yup.number().required(),
      })
    )
  });

  const { register, handleSubmit, control, formState: { errors } } = useForm<IRecipe>({
    resolver: yupResolver(schema)
  });

  const { fields: categoryField, append: categoryAppend, remove: categoryRemove } = useFieldArray<IRecipe>({
    control,
    name: "categories",
  });

  const { fields: ingredientField, append: ingredientAppend, remove: ingredientRemove } = useFieldArray<IRecipe>({
    control,
    name: "ingredients",
  });

  const onSubmit: SubmitHandler<IRecipe> = (data: IRecipe) => {
    const newRecipe: IRecipe = {
      id: 0,
      name: data.name,
      imageURL: data.imageURL,
      categories: data.categories,
      ingredients: data.ingredients
    };
    addRecipes(newRecipe);
    setSuccess(true);
    const timer = setTimeout(() => {
      setSuccess(false);
    }, 2500);
    return () => clearTimeout(timer);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Recipe Name</label>
          <input id="name" type="text" {...register("name")} />
          {errors.name && (
            <span className="errorMessage">{errors.name?.message?.toString()}</span>
          )}
        </div>
        <div>
          <label htmlFor="imageURL">Image URL</label>
          <input id="imageURL" type="text" {...register("imageURL")} />
          {errors.imageURL && (
            <span className="errorMessage">{errors.imageURL?.message?.toString()}</span>
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
              {...register(`categories.${index}.name`)}
            />
            {errors.categories && errors.categories[index] && (
              <span className="errorMessage">{errors.categories[index]!.name?.message?.toString()}</span>
            )}
            <label htmlFor={`categories.${index}.categoryType`}>
              Category Type {index + 1}
            </label>
            <input
              id={`categories.${index}.categoryType`}
              type="text"
              {...register(`categories.${index}.type`)}
            />
            {errors.categories && errors.categories[index] && (
              <span className="errorMessage">{errors.categories[index]!.message?.toString()}</span>
            )}
            <button type="button" onClick={() => categoryRemove(index)}>
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => categoryAppend({ id: 0, name: "", type: "" })}
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
              {...register(`ingredients.${index}.name`)}
            />
            {errors.ingredients && errors.ingredients[index] && (
              <span className="errorMessage">{errors.ingredients[index]!.name?.message?.toString()}</span>
            )}
            <label htmlFor={`ingredients.${index}.unit`}>
              Ingredients Unit {index + 1}
            </label>
            <input
              id={`ingredients.${index}.unit`}
              type="text"
              {...register(`ingredients.${index}.unit`)}
            />
            {errors.ingredients && errors.ingredients[index] && (

              <span className="errorMessage">{errors.ingredients[index]!.unit?.message?.toString()}</span>
            )}
            <button type="button" onClick={() => ingredientRemove(index)}>
              Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => ingredientAppend({ id: 0, name: "", unit: "", quantity: 0 })}
        >
          Add Ingredient
        </button>
        <button type="submit">Submit</button>
      </form>
      {success && <p>✅ Success!</p>}
    </>
  );
};









