import React, {useState, useEffect} from 'react'
import OtdbService from '../../service/OtdbService.js'

import Question from '../../components/quiz/Question/Question.js'

export default function QuizPage() {

    const questionsQty = 5
    
    const [questions, setQuestions] = useState([])
    
    useEffect(() => {
        OtdbService.getQuestions(questionsQty)
            .then(response => {
                setQuestions(response.data.results)
            })
            .catch(error => console.error(error))
    }, [])

    const questionsMarkup = questions.map(question => {
        return <Question 
            correctAnswer={question.correct_answer}
            incorrectAnswers={question.incorrect_answers}
            question={question.question}
            key={question.question}
        />
    })

    return (
        <div className='quiz-container'>
            {questionsMarkup}
        </div>
    )
}