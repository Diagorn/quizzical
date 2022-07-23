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
            id: 0,
            text: props.correctAnswer,
            correct: true,
            active: false
        })

        //adding the rest incorrect answers
        for (let i = 0; i < props.incorrectAnswers.length; i++) {
            let answer = props.incorrectAnswers[i]
            answersArray.push({
                id: i + 1,
                text: answer,
                correct: false,
                active: false
            })
        }

        //setting the answers in random order
        setAnswers(ArrayUtils.shuffle(answersArray))
    }, [props])

    function handleClick(id) {
        setAnswers(prevAnswers => {
            return prevAnswers.map(answer => {
                return answer.id !== id ?
                    {
                        ...answer,
                        active: false
                    } 
                    :
                    {
                        ...answer,
                        active: true
                    }

            })
        })
    }

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
                            key={answer.id}
                            handleClick={() => handleClick(answer.id)}
                            status={answer.status}
                            solved={props.solved}
                        />
                    })
                }
            </div>
            <hr/>
        </section>
    )
}