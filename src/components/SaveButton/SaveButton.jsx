import React, { useEffect } from "react"
import './SaveButton.css'

const SaveButton = ({handleClick})=>{

  return(
  <button onClick={handleClick} className='save-button'>
    Save
  </button>)
}

export default SaveButton