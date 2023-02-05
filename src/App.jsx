import { useEffect, useState } from 'react'

import './App.css'
import QuizContainer from './components/quiz-container/quiz-container'

function App() {
  const [quiz, setQuiz] = useState([])


  useEffect(() => {
      fetch('https://restcountries.com/v2/all')
      .then((response) => response.json())
      .then((data) => console.log(data))


  }
  
  
  , [])



  return (
    <div>
      <h2>Country Quiz</h2>
      <img alt='quiz-logo'  />
      <QuizContainer />
    </div>
  )
}

export default App
