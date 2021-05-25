import React from 'react'
import './Login.css'
import Facebook from './Facebook'
import Google from './Google'
import Twitter from './Twitter'


function OtherMethods() {


  return (
     <div id="alternativeLogin">
     <label>Or sign in with:</label>
      <div id="iconGroup">
        <Facebook />
        <Twitter />
        <Google />
      </div>
    </div>
    
  )
}

export default OtherMethods


  