import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { IRecipe } from '../services/interfaces';
import "../stylesheets/AddRecipeSS.css"

export const TEST2 = () => {
    const [fields, setFields] = useState([{ categoryName: "", categoryType: "" }]);
    const addField = () => {
        setFields([...fields, { categoryName: "", categoryType: "" }]);
    };
    const removeField = (index: any) => {
        const newFields = [...fields];
        newFields.splice(index, 1);
        setFields(newFields);
    };


    const thanosSchema = yup.object().shape({
            name: yup.string().min(3).required().matches(/^[a-zA-Z ,.'-]+$/, "Name must be characters"),
            imageURL: yup.string().required(),
            categories: yup.object().shape({
                categoryName: yup.string().min(3).required().matches(/^[a-zA-Z ,.'-]+$/, "Name must be characters"),
                categoryType: yup.string().required(),
            })
    });


    const { register,
        handleSubmit,
        formState: { errors } } = useForm({
            resolver: yupResolver(thanosSchema),
        });
    const onSubmitForRecipe = async (formRecipeData: any) => {
        console.log(formRecipeData.recipe.name);
        console.log(formRecipeData.recipe.imageURL);
        console.log(formRecipeData.recipe.categories.categoryName[0]);
        console.log(formRecipeData.recipe.categories.categoryType[0]);
    }
    return (
        <div id='recipesIdTable' className="recipes ">
            <h3 className="recipes__heading">Add New Recipe</h3>
            <form onSubmit={handleSubmit(onSubmitForRecipe)}>

                <h3>Repice</h3>
                <input type="text" placeholder="Name..."  {...register('recipe.name')} />
                <span className="errorMessage">{errors.name?.message?.toString()}</span>

                <input type="text" placeholder="ImageURL..." {...register('recipe.imageURL')} />
                <span className="errorMessage">{errors.imageURL?.message?.toString()}</span>

                <h3>Catergories</h3>
                {
                    fields.map((field, index) => (
                        <div key={index}>
                            <input type="text" id={`categoryName${index}`} placeholder="categoryName..." {...register(`recipe.categories[${index}].categoryName`)} />                
                            <input type="text" id={`categoryType${index}`} placeholder="categoryType..."  {...register(`recipe.categories[${index}].categoryType`)} />


                            {fields.length > 1 && (
                                <button type="button" onClick={() => removeField(index)}>
                                    Remove
                                </button>
                            )}
                        </div>
                    ))

                }
                <button type="button" onClick={addField}>
                    Add Category
                </button>
                <div className="form__button">
                    <input id="form__button" type="submit" value='Add Recipe' />
                    {/* <button id="form-back-button" onClick={backTorecipesList} >Back</button> */}
                </div>
            </form>
        </div>
    )
}