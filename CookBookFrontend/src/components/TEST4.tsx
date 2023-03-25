import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import "../stylesheets/AddRecipeSS.css"
export const TEST4 = () => {
  const defaultValues = {
    recipe: {
      name: "",
      imageURL: "",
      categories: [{ categoryName: "", categoryType: "" }],
    },
  };
  const schema = yup.object().shape({
    recipe: yup.object().shape({
      name: yup.string().min(3).required().matches(/^[a-zA-Z ,.'-]+$/, "Name must be characters"),
      imageURL: yup.string().required(),
      categories: yup.array().of(
        yup.object().shape({
          categoryName: yup.string().min(3).required().matches(/^[a-zA-Z ,.'-]+$/, "Name must be characters"),
          categoryType: yup.string().required(),
        })
      ),
    }),
  });
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "recipe.categories",
  });
  const onSubmit = (data : any) => console.log(data);
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
      {fields.map((field, index) => (
        <div key={field.id}>
          <label htmlFor={`categories.${index}.categoryName`}>
            Category Name {index + 1}
          </label>
          <input
            id={`categories.${index}.categoryName`}
            type="text"
            {...register(`recipe.categories.${index}.categoryName`)}
          />
          {errors.recipe?.categories && errors.recipe.categories[index] && (
            <span className="errorMessage">{errors.recipe.categories[index]!.categoryName?.message?.toString()}</span>
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
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ categoryName: "", categoryType: "" })}
      >
        Add Category
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};









