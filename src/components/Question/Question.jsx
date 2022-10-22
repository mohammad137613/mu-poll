import React, { useEffect } from "react"
import './Question.css'
import QuestionHeader from '../QuestionHeader/QuestionHeader'
import Timer from '../Timer/Timer'
import ChoiceQuestionBody from "../ChoiceQuestionBody/ChoiceQuestionBody"
import ExplainQuestionBody from '../ExplainQuestionBody/ExplainQuestionBody'
import LoginRedirect from "../LoginRedirect/LoginRedirect"
import { useNavigate } from "react-router-dom"

const Question = ({printInformation, started, setStarted, type, title,
    number, next, prev, choices})=>{
                      
  const navigate = useNavigate()

  const finishPoll = ()=>{
    printInformation()
    setStarted(false)
    navigate('/thanks')
    localStorage.clear()
  }
                    

  if (!started){
    return(<LoginRedirect />)
  }



  
  return(<div className="question">
    <Timer finishPoll={finishPoll} setStarted={setStarted} started={started} />

    <QuestionHeader title={title} number={number} next={next} prev={prev}/>
    {type==='choice-question'? 

    <ChoiceQuestionBody finishPoll={finishPoll} next={next} 
                        questionNumber={number} choices={choices}/> 

    :<ExplainQuestionBody finishPoll={finishPoll} next={next} 
                          questionNumber={number}  />} 
   
  </div>)
}

export default Question