import React, { useEffect, useState } from "react"
import './ChoiceQuestionBody.css'
import SaveButton from "../SaveButton/SaveButton"
import { useNavigate } from "react-router-dom"
import FinishButton from "../FinishButton/FinishButton"

const ChoiceQuestionBody = ({finishPoll, next, questionNumber, choices})=>{
  const navigate = useNavigate()

  const answerNumber = 'answer' + questionNumber

  const savedAnswer =JSON.parse(localStorage.getItem(answerNumber)) 

  const [answer, setAnswer] = useState(savedAnswer)
  
  const handleClick = ()=>{
    localStorage.setItem(answerNumber, JSON.stringify(answer))
    if(next){
      navigate(next)
    }
    
    
  }

  const handleChoiceClick = (choice)=>{
    setAnswer(choice)
  }

  useEffect(()=>{
    setAnswer(savedAnswer)
  }, [answerNumber])

  return (<div className="choices-div">
    {choices.map((choice)=>{
      return(<button onClick={()=>handleChoiceClick(choice)} key={choice} className={answer===choice? 'selected choice': 'choice'}>{choice}</button>)
    })}

    <SaveButton  handleClick={handleClick} />
    {next? '' : <FinishButton finishPoll={finishPoll} />}
  </div>)
}

export default ChoiceQuestionBody