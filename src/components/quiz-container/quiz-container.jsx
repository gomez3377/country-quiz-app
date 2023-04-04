import React from 'react'
import Answer from '../answer/answer.component'

const QuizContainer = ( {question} ) => {
  return (
    <div>
        <h3 className='question'>{question}</h3>
        <div>
            
            <Answer/>
        </div>
    </div>
  )
}

export default QuizContainer