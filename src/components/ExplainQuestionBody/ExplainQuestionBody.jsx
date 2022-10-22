import React, { useEffect } from "react"
import './ExplainQuestionBody.css'
import { useState } from "react"
import SaveButton from '../SaveButton/SaveButton'
import { useNavigate } from "react-router-dom"
import FinishButton from "../FinishButton/FinishButton"


const ExplainQuestionBody=({finishPoll, next, questionNumber})=>{

  const navigate = useNavigate()
  const answernumber = 'answer' + questionNumber


  const savedAnswer =JSON.parse(localStorage.getItem(answernumber)) 

  const [answer, setAnswer] = useState(savedAnswer)

  const handleTextAreaChange = (event)=>{
    setAnswer(event.target.value)
  }


  
  const handleClick=(event)=>{
    event.preventDefault()
    localStorage.setItem(answernumber, JSON.stringify(answer))
    navigate(next)

  }

  return(
    <div className='explain-div'>
        <textarea onChange={handleTextAreaChange} className='explain-input' 
        placeholder={savedAnswer? '' : 'Write Your Opinion Here!'} defaultValue={savedAnswer}/>

        <SaveButton  handleClick={handleClick}  />
        {next? '' : <FinishButton finishPoll={finishPoll} />}
    </div>
    
  )
}

export default ExplainQuestionBody