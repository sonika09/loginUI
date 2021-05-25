import React from 'react'
import './Login.css'
import FormButton from './FormButton'
import FormInput from './FormInput'

function Form(props) {
    return (
        <div>
       <FormInput name="Username" placeholder="Enter your username" type="text" />
       <FormInput name="Password" placeholder="Enter your password" type="password"/>
       <FormButton title="Log in"/>
        </div>
    )
}

export default Form
