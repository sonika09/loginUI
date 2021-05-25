import React from 'react'
import './Login.css'

function FormButton(props) {
    return (
        <div id="button" class="row">
      <button>{props.title}</button>
    </div>
    )
}

export default FormButton
