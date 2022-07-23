import React, {useState, useEffect} from 'react'
import OtdbService from '../../service/OtdbService.js'

import Question from '../../components/quiz/Question/Question.js'
import SolveButton from '../../components/buttons/SolveButton/SolveButton.js'

export default function QuizPage() {

    const questionsQty = 5
    
    const [questions, setQuestions] = useState([])
    const [solved, setSolved] = useState(false)
    
    useEffect(() => {
        console.log('qwe')
        OtdbService.getQuestions(questionsQty)
            .then(response => {
                setQuestions(response.data.results.map(result => {
                    return {
                        ...result,
                        solved: false,
                    }
                }))
            })
            .catch(error => console.error(error))
    }, [])

    function handleSolveClick() {
        if (solved) { //Button is 'Play again'
            setSolved(false)
        } else { //Button is 'Check answers'
            setQuestions(prevQuestions => {
                return prevQuestions.map(question => {
                    return {
                        ...question,
                        solved: true
                    }
                })
            })
            setSolved(true)
        }
    }

    const questionsMarkup = questions?.map(question => {

        return <Question 
            correctAnswer={question.correct_answer}
            incorrectAnswers={question.incorrect_answers}
            question={question.question}
            key={question.question}
            solved={question.solved}
        />
    })

    return (
        <div className='App'>
            <main>
                <div className='content'>
                    <div className='quiz-container'>
                        <section>
                            {questionsMarkup}
                        </section>
                        <div className='solve'>
                            <SolveButton
                                caption='Check answers'
                                handleClick={handleSolveClick}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}