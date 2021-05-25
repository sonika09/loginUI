import React from 'react'
import './Login.css'
function FormInput(props) {
    return (
        
     <div className="row">
      <label>{props.name}</label>
      <input type={props.type} placeholder={props.placeholder}/>
    </div>   
        
    )
}

export default FormInput
