import React, { useState } from "react";
import { FC } from "react";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import { IRecipe } from "../services/interfaces";
import '../stylesheets/EditRecipe.css'


type EditRecipeProps = {
    editRecipes: (recipe: IRecipe) => void;
    recipe: IRecipe;
    onCancelEdit: () => void;
};

export const EditRecipe: FC<EditRecipeProps> = ({ editRecipes, recipe, onCancelEdit }) => {
    const [success, setSuccess] = useState<boolean>(false);
    const [savingChanges, setSavingChanges] = useState<boolean>(false);

    const schema = yup.object().shape({
        name: yup
            .string()
            .required("Name is required")
            .min(3, "Name must be minimum 3 characters")
            .max(24, "Name must be maximum 20 characters")
            .matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ,. '-]+$/, "Name must be characters"),
        imageURL: yup.string().required("Image URL is required"),
        categories: yup.array().of(
            yup.object().shape({
                name: yup
                    .string()
                    .required("Category name is required")
                    .min(3, "Category name must be minimum 3 characters")
                    .matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ,. '-]+$/, "Name must be characters"),
                type: yup.string().required("Category type is required"),
            })
        ),
        ingredients: yup.array().of(
            yup.object().shape({
                name: yup
                    .string()
                    .required("Ingredient name is required")
                    .min(3, "Ingredient name must be minimum 3 characters")
                    .matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ,. '-]+$/, "Name must be characters"),
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
        setSavingChanges(!savingChanges);
        let timer = setTimeout(() => {
            setSavingChanges(!savingChanges);
            setSuccess(!success);
            timer = setTimeout(() => {
                onCancelEdit();
            }, 2000);
        }, 2000);
        return () => clearTimeout(timer);
    }

    return (
        <>
            <article className='recipe-modal-table'>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="editrecipe__inputField">
                        <label htmlFor="name">Recipe Name</label>
                        <input id="name" type="text" {...register("name")} />
                        {errors.name && (
                            <span className="errorMessage">
                                {errors.name?.message?.toString()}
                            </span>
                        )}
                    </div>
                    <div className="editrecipe__inputField">
                        <label htmlFor="imageURL">Image URL</label>
                        <input id="imageURL" type="text" {...register("imageURL")} />
                        {errors.imageURL && (
                            <span className="errorMessage">
                                {errors.imageURL?.message?.toString()}
                            </span>
                        )}
                    </div>
                    <div className="editrecipe__inputField">
                        <label htmlFor="description">Recipe Description</label>
                        <input id="description" type="text" {...register("description")} />
                        {errors.description && (
                            <span className="errorMessage">
                                {errors.description?.message?.toString()}
                            </span>
                        )}
                    </div>
                    <div className="editrecipe__inputField">
                        <label htmlFor="instructions">Recipe Instructions</label>
                        <textarea id="instructions" {...register("instructions")} />
                        {errors.instructions && (
                            <span className="errorMessage">
                                {errors.instructions?.message?.toString()}
                            </span>
                        )}
                    </div>

                    {categoryField.map((field, index) => (
                        <div key={field.id} className="data-card">
                            <div className="addrecipe__inputField">
                                <span
                                    className="close add__close"
                                    onClick={() => categoryRemove(index)}
                                >
                                    <img src="trash.svg" alt="" />
                                </span>
                                <label htmlFor={`categories.${index}.name`}>
                                    Name of Category
                                </label>
                                <div className="addrecipe__unit-quantity">
                                    <div className="addrecipe__categories">
                                        <input
                                            className="addrecipe__Box"
                                            id={`categories.${index}.name`}
                                            type="text"
                                            placeholder="Required field"
                                            {...register(`categories.${index}.name`)}
                                        />
                                        {errors.categories && errors.categories[index] && (
                                            <span className="errorMessage">
                                                {errors.categories[index]!.name?.message?.toString()}
                                            </span>
                                        )}
                                    </div>
                                    <select className="addrecipe__selectType" {...register(`categories.${index}.type`)} >
                                        <option value="">Select Type</option>
                                        <option>Ethnic</option>
                                        <option>Dietary</option>
                                        <option>Meal type</option>
                                    </select>
                                    {errors.categories && errors.categories[index] && (
                                        <span className="errorMessage">
                                            {errors.categories[index]!.message?.toString()}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                    <button
                        className="recipe__button"
                        type="button"
                        onClick={() => categoryAppend({ id: 0, name: "", type: "" })}
                    >
                        Add New Category
                    </button>
                    {ingredientField.map((field, index) => (
                        <div key={field.id} className="data-card ingredient-card">
                            <div className="addrecipe__inputField">
                                <span
                                    className="close add__close"
                                    onClick={() => ingredientRemove(index)}
                                >
                                    <img src="trash.svg" alt="" />
                                </span>
                                <label htmlFor={`ingredients.${index}.name`}>
                                    Name of Ingredient
                                </label>
                                <input
                                    className="addrecipe__ingredientName"
                                    id={`ingredients.${index}.name`}
                                    type="text"
                                    list="suggestions"
                                    placeholder="Required field"
                                    {...register(`ingredients.${index}.name`)}
                                />
                                {errors.ingredients && errors.ingredients[index] && (
                                    <span className="errorMessage">
                                        {errors.ingredients[index]!.name?.message?.toString()}
                                    </span>
                                )}
                            </div>
                            <div className="addrecipe__inputField">
                                <label className="addrecipe__quantityHeadline" htmlFor={`ingredients.${index}.quantity`}>
                                    Quantity of Ingredient
                                </label>
                                <div className="addrecipe__inputField addrecipe__unit-quantity">
                                    <input
                                        className="addrecipe__Box"
                                        id={`ingredients.${index}.quantity`}
                                        type="text"
                                        {...register(`ingredients.${index}.quantity`)}
                                    />
                                    {errors.ingredients && errors.ingredients[index] && (
                                        <span className="errorMessage">
                                            {errors.ingredients[index]!.quantity?.message?.toString()}
                                        </span>
                                    )}
                                    <select className="addrecipe__selectType" id={`ingredients.${index}.unit`} {...register(`ingredients.${index}.unit`)}>
                                        <option value="">Select Unit</option>
                                        <option value="Grams">grams</option>
                                        <option value="Kg">ml</option>
                                        <option value="Amount">Amount</option>
                                    </select>

                                    {errors.ingredients && errors.ingredients[index] && (
                                        <span className="errorMessage">
                                            {errors.ingredients[index]!.unit?.message?.toString()}
                                        </span>
                                    )}
                                </div>
                            </div>
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
                {savingChanges && <><p>Saving changes</p> <p className="loading">...</p></>}
                {success && <p>✅ Success!</p>}
            </article>
            <div className="recipeModal-footer">
                <button className="recipe__button" onClick={onCancelEdit}>Back to Recipe</button>
            </div>
        </>
    );
};







