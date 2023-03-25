import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { IRecipe } from '../services/interfaces';
import "../stylesheets/AddRecipeSS.css"
export const AddRecipe = () => {
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
      const { register ,
        handleSubmit ,
        formState:  { errors } } = useForm({
          resolver: yupResolver(combinedSchema ),
      });
      const onSubmitForRecipe = async (formRecipeData : any) => {
       console.log(formRecipeData.name);
       console.log(formRecipeData.imageURL);
       console.log(formRecipeData.categoryName);
       console.log(formRecipeData.categoryType);
      }
  return (
    <div id='employeesIdTable' className="employees ">
    <h3 className="employees__heading">Add New Recipe</h3>
    <form onSubmit={handleSubmit(onSubmitForRecipe)}>

      <input type="text" placeholder="Name..."  {...register('name')} />
      <span className="errorMessage">{errors.name?.message?.toString()}</span>

      <input type="text" placeholder="ImageURL..." {...register('imageURL')} />
      <span className="errorMessage">{errors.imageURL?.message?.toString()}</span>


      <input type="text" placeholder="categoryName..." {...register('categoryName')} />
      <span className="errorMessage">{errors.categoryName?.message?.toString()}</span>

      <input type="text" placeholder="categoryType..." {...register('categoryType')} />
      <span className="errorMessage">{errors.categoryType?.message?.toString()}</span>

      <div className="form__button">
        <input id="form__button" type="submit" value='Add Recipe' />
        {/* <button id="form-back-button" onClick={backToEmployeesList} >Back</button> */}
      </div>
    </form>
  </div>
  )
}