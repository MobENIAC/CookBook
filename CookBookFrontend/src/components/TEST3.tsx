import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { IRecipe } from '../services/interfaces';
import "../stylesheets/AddRecipeSS.css"
// last almost working
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
    const schemaForRecipe = yup.object().shape({
        name: yup.string().min(3).required().matches(/^[a-zA-Z ,.'-]+$/, "Name must be characters"),
        imageURL: yup.string().required(),
    });
    const schemaForCategory = yup.object().shape({
        categoryName: yup.string().min(3).required().matches(/^[a-zA-Z ,.'-]+$/, "Name must be characters"),
        categoryType: yup.string().required(),
    });
    const combinedSchema = yup.object().shape({
        ...schemaForRecipe.fields,
        ...schemaForCategory.fields,
    });
    const { register,
        handleSubmit,
        formState: { errors } } = useForm({
            resolver: yupResolver(combinedSchema),
        });
    const onSubmitForRecipe = async (formRecipeData: any) => {
        console.log(formRecipeData.name);
        console.log(formRecipeData.imageURL);
        console.log(formRecipeData.categoryName[0]);
        console.log(formRecipeData.categoryType[0]);
    }
    return (
        <div id='recipesIdTable' className="recipes ">
            <h3 className="recipes__heading">Add New Recipe</h3>
            <form onSubmit={handleSubmit(onSubmitForRecipe)}>

                <h3>Repice</h3>
                <input type="text" placeholder="Name..."  {...register('name')} />
                <span className="errorMessage">{errors.name?.message?.toString()}</span>

                <input type="text" placeholder="ImageURL..." {...register('imageURL')} />
                <span className="errorMessage">{errors.imageURL?.message?.toString()}</span>

                <h3>Catergories</h3>
                {
                    fields.map((field, index) => (
                        <div key={index}>
                            <input type="text" id={`categoryName${index}`} placeholder="categoryName..." {...register(`categoryName`)} />
                            {/* {errors[`categoryName${index}`] && (
                                
                                // `categoryName${index}`
                                <span className="errorMessage">{errors.categoryName?.message?.toString()}</span>

                                // <span>{errors[`categoryName${index}`]!.message!.toString()}</span>
                            )} */}
                            {/* <span className="errorMessage">{errors.categoryName?.message?.toString()}</span> */}
                            <input type="text" id={`categoryType${index}`} placeholder="categoryType..."  {...register(`categoryType${index}`)} />


                            {fields.length > 1 && (
                                <button type="button" onClick={() => removeField(index)}>
                                    Remove
                                </button>
                            )}
                        </div>
                    ))
                    //   <>
                    //   <input type="text" placeholder="Name..."  {...register('name')} />
                    //  <span className="errorMessage">{errors.name?.message?.toString()}</span>
                    //   </>
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