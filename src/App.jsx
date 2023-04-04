import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import "./App.css";
import QuizContainer from "./components/quiz-container/quiz-container";

function App() {
  const [country, setCountry] = useState([]);
  const [currentCountry, setCurrentCountry] = useState([])
  const [quiz, setQuiz] = useState({
    flag: "",
    question: "",
    answers: [],
  });
  const [game, setGame] = useState(false)
  
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
    .then((response) => response.json())
    .then((data) =>
    setCountry(
      data.map((data) => {
        return {
          id: nanoid(),
          name: data.name,
          capital: data.capital,
          flag: data.flag,
        };
      })
      )
      );
      
    }, []);
    
    
    
    
    function generateQuiz() {
    setCurrentCountry(country[Math.floor(Math.random() * country.length)]);
    const quizType = Math.ceil(Math.random() * 2);
    const { name: correctAnswer } = currentCountry;
    function generateRandomAnswers() {
      const answerArray = [correctAnswer];

      for (let i = 1; i <= 3; i++) {
        let newAnswer =
          country[Math.floor(Math.random() * country.length)].name;
          console.log(newAnswer)
        while (answerArray.includes(!newAnswer)) {
          answerArray.push(newAnswer);
        }
      }
      return answerArray;
    }

    setQuiz({
      flag: `${quizType == "2" && currentCountry.flag}`,
      question: `${
        quizType == "1"
          ? `${currentCountry.capital} is the captial of`
          : "Which country does this flag belong to"
      }`,
      answers: generateRandomAnswers(),
    });
  }

  return (
    <div>
      <h2>Country Quiz</h2>
      <img alt="quiz-logo" />
      <QuizContainer question={quiz.question} />
    </div>
  );
}

export default App;
