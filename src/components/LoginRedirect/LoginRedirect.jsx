import React from "react"
import './LoginRedirect.css'
import LoginIcon from './login.png'
import { Link } from "react-router-dom"

const LoginRedirect=()=>{
  return(
    <div className="login-redirect">
      <img alt='login-icon' src={LoginIcon} className='login-icon'/>
      <div className="login-redirect--title">
        First You Have To Complete Your Information
      </div>

      <div className="login-redirect--button">
        <Link to='/'>
          <button className="go-to-start">Go to Start</button>
        </Link>
        
      </div>
    </div>
  )
}

export default LoginRedirect