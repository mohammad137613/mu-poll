import React, { useEffect } from "react"
import './Enterance.css'
import { useState } from "react"
import {useNavigate } from 'react-router-dom'

const Enterance = ({started, setStarted})=>{

  const navigate = useNavigate()
  
  

  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [age, setAge] = useState(null)
  const [gender, setGender] = useState('Male')
  const [errors, setErrors] = useState({'age':'','firstName':'','lastName':''})


  const checkErrors = () => {
    if (firstName && lastName && age){
      return true
    }

    if (!firstName && !lastName && !age){
      setErrors({'firstName':'First Name is empty'
      ,'lastName':'Last Name is empty', 'age':'Age is empty'})
    }


    else if (firstName && !lastName && !age){
      setErrors({'firstName':''
      ,'lastName':'Last Name is empty', 'age':'Age is empty'})
    }

    else if (!firstName && !lastName && age){
      setErrors({'firstName':'First Name is empty'
      ,'lastName':'Last Name is empty', 'age':''})
    }

    else if (!firstName && lastName && !age){
      setErrors({'firstName':'First Name is empty'
      ,'lastName':'', 'age':''})
    }

    else if (firstName && !lastName && age){
      setErrors({'firstName':''
      ,'lastName':'Last Name is empty', 'age':''})
    }

    else if (firstName && lastName && !age){
      setErrors({'firstName':''
      ,'lastName':'', 'age':'Age is empty'})
    }    
    
    return false
    
  }




  const handleUserFormSubmit = (event)=>{
    event.preventDefault()
    
    if(checkErrors()){

      setStarted(true)

      localStorage.setItem('firstName', JSON.stringify(firstName));
      localStorage.setItem('lastName', JSON.stringify(lastName));
      localStorage.setItem('age', JSON.stringify(age));
      localStorage.setItem('gender', JSON.stringify(gender));
    }
    
  
  }

  const handleInputChange = (input,event) =>{
    
    let inputValue=event.target.value

    switch(input) {
      
      case 'firstName':
        setFirstName(inputValue)
        if (inputValue) {
          setErrors({...errors, 'firstName':''})
        }
        else {
          setErrors({...errors, 'firstName':'First Name is empty'})
        }
        break;

      case 'lastName':
        setLastName(inputValue)
        if (inputValue) {
          setErrors({...errors, 'lastName':''})
        }
        else {
          setErrors({...errors, 'lastName':'Last Name is empty'})
        }
        break;

      case 'age':
        setAge(inputValue)
        if (inputValue) {
          setErrors({...errors, 'age':''})
        }
        else {
          setErrors({...errors, 'age':'Age is empty'})
        }
        break;

      case 'gender':
        setGender(inputValue)
        break;

      default:
        console.log("WRONG INPUT!")
        
    }
  }

  useEffect(()=>{
    localStorage.setItem('started', JSON.stringify(started))
    if(started===true ){
      navigate('/question-one')
    }
  }, [started])

  return(
    <div className='enterance'>

      <div className="enterance--title">
        Enter Your Information First!
      </div>

      <form onSubmit={handleUserFormSubmit} className="user-info-form">

        <div className="first-name-div">
          <label>First Name</label>
          <input onChange={(event)=>handleInputChange('firstName', event)} className="text-input" type='text' placeholder="Enter Your First Name Here"/>
          <span className="error">{errors.firstName}</span>
        </div>

       <div className="last-name-div">
          <label>Last Name</label>
          <input onChange={(event)=>handleInputChange('lastName', event)} className="text-input" type='text' placeholder="Enter Your Last Name Here"/>
          <span className="error">{errors.lastName}</span>
       </div>
        
        <div className="age-gender">

          <div className="gender-div">
            <label>Gender</label>
            <select onChange={(event)=>handleInputChange('gender', event)} id="genders" name="genders">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="age-div">
            <label>Age</label>
            <input onChange={(event)=>handleInputChange('age', event)} className="number-input" placeholder="e.g. 18" type='number' />
            <span className="error">{errors.age}</span>
          </div>
        
        </div>
        
        <button  className="submit-button" type='submit'>Enter</button>

      </form>
    </div>
  )
}


export default Enterance