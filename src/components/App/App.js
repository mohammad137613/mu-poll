import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Thanks from '../Thanks/Thanks'
import Enterance from '../Enterance/Enterance'
import Question from '../Question/Question'
import questions from '../../Questions.json'
import Timer from '../Timer/Timer'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {
  
  const  hasBeenStarted = JSON.parse(localStorage.getItem('started'))
  const defaultStarted = hasBeenStarted !== null ? hasBeenStarted : false
  const [started, setStarted] = useState(defaultStarted)

  const printInformation= () => {

    const firstName = JSON.parse(localStorage.getItem('firstName'));
    const lastName = JSON.parse(localStorage.getItem('lastName'));
    const age = JSON.parse(localStorage.getItem('age'));
    const gender = JSON.parse(localStorage.getItem('gender'));

    const questionOne = JSON.parse(localStorage.getItem('question1'));
    const questionTwo = JSON.parse(localStorage.getItem('question2'));
    const questionThree = JSON.parse(localStorage.getItem('question3'));
    const questionFour = JSON.parse(localStorage.getItem('question4'));

    const answerOne = JSON.parse(localStorage.getItem('answer1'));
    const answerTwo = JSON.parse(localStorage.getItem('answer2'));
    const answerThree = JSON.parse(localStorage.getItem('answer3'));
    const answerFour = JSON.parse(localStorage.getItem('answer4'));


    console.log('firstName', firstName)
    console.log('lastName', lastName)
    console.log('age', age)
    console.log('gender', gender)

    console.log(questionOne, answerOne)
    console.log(questionTwo, answerTwo)
    console.log(questionThree, answerThree)
    console.log(questionFour, answerFour)

  }

  

  useEffect(()=>{
    if(started===true){
      for (let i = 0; i < questions.length; i++) {
        localStorage.setItem('question'+questions[i].number ,JSON.stringify(questions[i].title))
      }
    }
    
  },[started])


  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          
          <Route exact path='/' element={<Enterance setStarted={setStarted} started={started} />} />
          <Route exact path='/thanks' element={<Thanks />} />

          {questions.map((question)=>{
            return(<Route key={question.number} exact path={question.path} 
              element={<Question 
                printInformation={printInformation}
                started={started}
                setStarted={setStarted}
                type={question.type}
                title={question.title}
                number={question.number}
                next={question.next}
                prev={question.prev}
                choices={question.choices} />} 
            />)
            }
            )
          }

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
