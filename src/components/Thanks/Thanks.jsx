import React from "react"
import './Thanks.css'
import { Link } from "react-router-dom"
import PollIcon from './icon.png'

const Thanks = ()=>{

  return(
    <div className="thanks">
      <img alt='poll-icon' src={PollIcon} className='poll-icon'/>
      <div className="thanks--title">
        Thanks for submitting! 
      </div>

      <div className="thanks--description">
        Your answers have been sent!
      </div>

      <div className="thanks--button">
        <Link to='/'>
          <button className="go-to-start">Go to Start</button>
        </Link>
        
      </div>
    </div>
  )
}

export default Thanks