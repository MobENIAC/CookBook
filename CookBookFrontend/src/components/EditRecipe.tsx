import React, { useState } from "react";
import { FC } from "react";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import "../stylesheets/AddRecipeSS.css"
import "../stylesheets/RecipeViewModalSS.css"
import { IRecipe } from "../services/interfaces";

type EditRecipeProps = {
    editRecipes: (recipe: IRecipe) => void;
    recipe: IRecipe;
    onCancelEdit: () => void;
};

export const EditRecipe: FC<EditRecipeProps> = ({ editRecipes, recipe, onCancelEdit }) => {

    const schema = yup.object().shape({
        name: yup
            .string()
            .required("Name is required")
            .min(3, "Name must be minimum 3 characters")
            .matches(/^[a-zA-Z ,.'-]+$/, "Name must be characters"),
        imageURL: yup.string().required("Image URL is required"),
        categories: yup.array().of(
            yup.object().shape({
                name: yup
                    .string()
                    .required("Category name is required")
                    .min(3, "Category name must be minimum 3 characters")
                    .matches(/^[a-zA-Z ,.'-]+$/, "Name must be characters"),
                type: yup.string().required("Category type is required"),
            })
        ),
        ingredients: yup.array().of(
            yup.object().shape({
                name: yup
                    .string()
                    .required("Ingredient name is required")
                    .min(3, "Ingredient name must be minimum 3 characters")
                    .matches(/^[a-zA-Z ,.'-]+$/, "Name must be characters"),
                unit: yup.string().required("Ingredient unit is required"),
                quantity: yup.number().required("Ingredient quantity is required"),
            })
        ),
    });

    const { register, handleSubmit, control, formState: { errors } } = useForm<IRecipe>({
        resolver: yupResolver(schema),
        defaultValues: recipe
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
        editRecipes(data);
        onCancelEdit();
    }

    return (
        <>
            <div className="recipeModal-body">
                <article className='recipe-model-table'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="name">Recipe Name</label>
                            <input id="name" type="text" {...register("name")} />
                            {errors.name && (
                                <span className="errorMessage">
                                    {errors.name?.message?.toString()}
                                </span>
                            )}
                        </div>
                        <div>
                            <label htmlFor="imageURL">Image URL</label>
                            <input id="imageURL" type="text" {...register("imageURL")} />
                            {errors.imageURL && (
                                <span className="errorMessage">
                                    {errors.imageURL?.message?.toString()}
                                </span>
                            )}
                        </div>
                        <div>
                            <label htmlFor="description">Recipe Description</label>
                            <input id="description" type="text" {...register("description")} />
                            {errors.description && (
                                <span className="errorMessage">
                                    {errors.description?.message?.toString()}
                                </span>
                            )}
                        </div>
                        <div>
                            <label htmlFor="instructions">Recipe Instructions</label>
                            <input id="instructions" type="text" {...register("instructions")} />
                            {errors.instructions && (
                                <span className="errorMessage">
                                    {errors.instructions?.message?.toString()}
                                </span>
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
                                    <span className="errorMessage">
                                        {errors.categories[index]!.name?.message?.toString()}
                                    </span>
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
                                    <span className="errorMessage">
                                        {errors.categories[index]!.message?.toString()}
                                    </span>
                                )}


                                <button className="recipe__button" type="button" onClick={() => categoryRemove(index)}>
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button
                            className="recipe__button"
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
                                    <span className="errorMessage">
                                        {errors.ingredients[index]!.name?.message?.toString()}
                                    </span>
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
                                    <span className="errorMessage">
                                        {errors.ingredients[index]!.unit?.message?.toString()}
                                    </span>
                                )}


                                <label htmlFor={`ingredients.${index}.quantity`}>
                                    Ingredients Quantity {index + 1}
                                </label>
                                <input
                                    id={`ingredients.${index}.quantity`}
                                    type="text"
                                    {...register(`ingredients.${index}.quantity`)}
                                />
                                {errors.ingredients && errors.ingredients[index] && (
                                    <span className="errorMessage">
                                        {errors.ingredients[index]!.quantity?.message?.toString()}
                                    </span>
                                )}

                                <button className="recipe__button" type="button" onClick={() => ingredientRemove(index)}>
                                    Remove
                                </button>
                            </div>
                        ))}

                        <button
                            className="recipe__button"
                            type="button"
                            onClick={() =>
                                ingredientAppend({ id: 0, name: "", unit: "", quantity: 0 })
                            }
                        >
                            Add Ingredient
                        </button>
                        <button className="recipe__button" type="submit">Submit</button>
                    </form>

                </article>
            </div>
            <div className="recipeModal-footer">
                <button className="recipe__button" onClick={onCancelEdit}>Back to Recipe</button>
            </div>
        </>
    );
};









