import React from "react"
import './FinishButton.css'



const FinishButton = ({finishPoll})=>{

  return(
    <button onClick={finishPoll} className="finish-button">
      Finish The Poll
    </button>
  )
}


export default FinishButton