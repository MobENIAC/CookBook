import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'


export const AddRecipe = () => {


    const schema = yup.object().shape({
        name: yup.string().min(3).required().matches(/^[a-zA-Z ,.'-]+$/, "Name must be characters"),
        imageURL: yup.string().min(3).required().matches(/^[a-zA-Z ,.'-]+$/, "Job title must be characters"),
        email: yup.string().required().email("Email has to be valid"),
        phoneNumber: yup.number().positive().required(),
        employmentType: yup.string().min(3).required().matches(/^[a-zA-Z ,.'-]+$/, "Employment type must be characters"),
        salary: yup.number().positive().required(),
        location: yup.string().required().matches(/^[a-zA-Z ,.'-]+$/),
        departmentName: yup.string().required().matches(/^[a-zA-Z ,.'-]+$/, "Department Name is a required field"),
    
      });
      const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });

      const onSubmit = async (formData: any) => {
       
      }
    
  return (
    <div id='employeesIdTable' className="employees ">
    <h3 className="employees__heading">Add New Employee</h3>
    <form onSubmit={handleSubmit(onSubmit)}>

      {/* <label >Name</label> */}
      <input type="text" placeholder="Name..."  {...register('name')} />
      
      {/* <span className="errorMessage">{errors.name?.message?.toString()}</span> */}

      {/* <label >Job Title</label> */}
      <input type="text" placeholder="Job title..." {...register('jobTitle')} />
      {/* <span className="errorMessage">{errors.jobTitle?.message?.toString()}</span> */}

      {/* <label >Email</label> */}
      <input type="text" placeholder="Email..." {...register('email')} />
      {/* <span className="errorMessage">{errors.email?.message?.toString()}</span> */}

      {/* <label >Phone Number</label> */}
      <input type="text" placeholder="Phone number..." {...register('phoneNumber')} />
      {/* <span className="errorMessage">{errors.phoneNumber?.message?.toString()}</span> */}

      {/* <label >Employment Type</label> */}
      <input type="text" placeholder="Employment type..." {...register('employmentType')} />
      {/* <span className="errorMessage">{errors.employmentType?.message?.toString()}</span> */}

      {/* <label >Salary</label> */}
      <input type="text" placeholder="Salary..." {...register('salary')} />
      {/* <span className="errorMessage">{errors.salary?.message?.toString()}</span> */}

      {/* <label >Location</label> */}
      <input type="text" placeholder="Location..." {...register('location')} />
      {/* <span className="errorMessage">{errors.location?.message?.toString()}</span> */}

      {/* <label >Department</label> */}
      <input type="text" placeholder="Department..." {...register('departmentName')} />
      {/* <span className="errorMessage">{errors.departmentName?.message?.toString()}</span> */}

      <div className="form__button">
        <input id="form__button" type="submit" value='Add Employee' />
        {/* <button id="form-back-button" onClick={backToEmployeesList} >Back</button> */}
        
      </div>
    </form>
  </div>
  )
}
