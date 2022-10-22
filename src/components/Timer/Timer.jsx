import react from 'react'
import './Timer.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Timer = ({finishPoll, setStarted, started})=>{

  const min1 = JSON.parse(localStorage.getItem('minuteOne'))
  const min2 = JSON.parse(localStorage.getItem('minuteTwo'))
  const sec1 = JSON.parse(localStorage.getItem('secondOne'))
  const sec2 = JSON.parse(localStorage.getItem('secondTwo'))

  const navigate = useNavigate();
  const [minuteOne, setMinuteOne] = useState(min1!==null ? Number(min1) : 0)
  const [minuteTwo, setMinuteTwo] = useState(min2!==null ? Number(min2) : 0)
  const [secondOne, setSecondOne] = useState(sec1!==null ? Number(sec1) : 3)
  const [secondTwo, setSecondTwo] = useState(sec2!==null ? Number(sec2) : 0)
  const [endingSoon, setEndingSoon] = useState(false)
  
  


  useEffect(()=>{  

    if (started){
      localStorage.setItem('minuteOne', JSON.stringify(minuteOne))
      localStorage.setItem('minuteTwo', JSON.stringify(minuteTwo))
      localStorage.setItem('secondOne', JSON.stringify(secondOne))
      localStorage.setItem('secondTwo', JSON.stringify(secondTwo))
    }
    
    

    if (minuteOne + minuteTwo + secondOne === 0){
      setEndingSoon(true)
    }
    setTimeout(()=>{
      if (secondTwo!==0){
        setSecondTwo(secondTwo-1)
      }
      else if(secondOne!==0){
        setSecondOne(secondOne-1)
        setSecondTwo(9)
      }
      else if(minuteTwo!==0){
        setSecondOne(5)
        setSecondTwo(9)
        setMinuteTwo(minuteTwo-1)
      }
      else if(minuteOne!==0){
        setSecondOne(5)
        setSecondTwo(9)
        setMinuteTwo(9)
        setMinuteOne(minuteOne-1)
      }
      else{
        finishPoll()
      }
    }, 1000)
  })


  return(
  <div className='timer'>
    <div className='text'>
    Remaining Time 
    </div>

    <div className={endingSoon? 'digits ending-soon' : 'digits'}>

    <div className='minutes'>
      <div className='minute-1'>{minuteOne}</div>
      <div className='minute-2'>{minuteTwo}</div>
    </div>

    <div className='colon'>&#58;</div>

    <div className='seconds'>
      <div className='second-1'>{secondOne}</div>
      <div className='second-2'>{secondTwo}</div>
    </div>

    </div>
    
  </div>
  
  )
}

export default Timer