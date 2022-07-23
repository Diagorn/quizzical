import React, {useState, useEffect} from 'react'
import OtdbService from '../../service/OtdbService.js'

import Question from '../../components/quiz/Question/Question.js'
import SolveButton from '../../components/buttons/SolveButton/SolveButton.js'
import ResultsText from '../../components/text/ResultsText/ResultsText.js'
import ArrayUtils from '../../util/ArrayUtils.js'

export default function QuizPage() {

    const questionsQty = 5
    
    const [questions, setQuestions] = useState([])
    const [solved, setSolved] = useState(false)
    
    useEffect(() => {
        OtdbService.getQuestions(questionsQty)
            .then(response => {
                console.log('UseEffect worked')
                setQuestions(response.data.results.map(result => {
                    return {
                        ...result,
                        solved: false,
                        active: false
                    }
                }))
            })
            .catch(error => console.error(error))
    }, [])

    function countCorrect() {

    }

    function gotoWelcomePage() {

    }

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

    function createAnswers(question) {
        console.log(question)
        let answersArray = []
        
        //adding the correct answer first
        answersArray.push({
            id: 0,
            text: question.correct_answer,
            correct: true,
            active: false
        })

        //adding the rest incorrect answers
        for (let i = 0; i < question.incorrect_answers.length; i++) {
            let answer = question.incorrect_answers[i]
            answersArray.push({
                id: i + 1,
                text: answer,
                correct: false,
                active: false
            })
        }

        //setting the answers in random order
        return ArrayUtils.shuffle(answersArray)
    }

    const questionsMarkup = questions.map(question => {

        return <Question 
            answers={createAnswers(question)}
            solved={question.solved}
            question={question.question}
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
                            {solved && <ResultsText 
                                correctQty={1}
                                allQty={questionsQty}
                            />}
                            <SolveButton
                                caption={solved ? 'Play again' : 'Check answers'}
                                handleClick={solved ? gotoWelcomePage : handleSolveClick}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}