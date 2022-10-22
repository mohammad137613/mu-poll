import React from "react"
import './QuestionHeader.css'
import {Link} from 'react-router-dom'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

const QuestionHeader = ({number, title, next, prev})=>{
  return(
    <div className='question-header'>
      <div className="question-nav">

        <Link className={prev? 'prev-link' : 'prev-link disabled '} to={prev}>
            <FaArrowLeft />
        </Link>
      
      <div className='question-number'>Question #{number}</div>

      <Link  className={next? 'next-link' : 'next-link disabled '} to={next}>
          <FaArrowRight />
      </Link>

      </div>
    
    <div className='question-title'>
      {title}
    </div> 
  </div>

  
  )
}

export default QuestionHeader