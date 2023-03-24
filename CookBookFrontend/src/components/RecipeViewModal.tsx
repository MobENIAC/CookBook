import React, { FC } from 'react'
import { IRecipe } from '../services/interfaces'
import "../StyleSheets/RecipeViewModalSS.css"
// import { IEmployees } from '../Types/TypeInterfaces'
type employeeDetailsProps ={
    onCancel: () => void,
    showRecipeData : IRecipe
}

export const RecipeViewModal: FC<employeeDetailsProps> = ({onCancel, showRecipeData}) => {
  return (
    <div id="myModal" className="modal">

  <div className="modal-content">
    <div className="modal-header">
      <span className="close" onClick={onCancel}>&times;</span>
      <h2>Employee Details</h2>
    </div>


    <div className="modal-body">

    <table className='employee-model-table'>
        <tr>
            <th>Name:</th>
            <td>{showRecipeData.name}</td>
        </tr>
        <tr>
            <th>Job Title:</th>
            <td>{showRecipeData.categories[0].name}</td>
        </tr>
       
    </table>
    </div>


    {/* <div className="modal-footer">
      <h3>Modal Footer</h3>
    </div> */}
  </div>

</div>


  )
}
