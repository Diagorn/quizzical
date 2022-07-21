import './Question.css'

import React, { useState, useEffect } from 'react'
import ArrayUtils from '../../../util/ArrayUtils'

import QuestionText from '../../text/QuestionText/QuestionText'
import TestButton from '../../buttons/TestButton/TestButton'

export default function Question(props) {

    const [answers, setAnswers] = useState([])

    useEffect(() => {
        let answersArray = []
        
        //adding the correct answer first
        answersArray.push({
            text: props.correctAnswer,
            correct: true
        })

        console.log(props.incorrectAnswers)

        //adding the rest incorrect answers
        for (let i = 0; i < props.incorrectAnswers.length; i++) {
            let answer = props.incorrectAnswers[i]
            answersArray.push({
                text: answer,
                correct: false
            })
        }

        //setting the answers in random order
        setAnswers(ArrayUtils.shuffle(answersArray))
    }, [props])

    return (
        <section>
            <QuestionText
                question={props.question}
            />
            <div className='answer-buttons-container'>
                {
                    answers.map(answer => {
                        return <TestButton 
                            answer={answer}
                            key={answer}
                        />
                    })
                }
            </div>
            <hr/>
        </section>
    )
}