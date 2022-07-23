import './Question.css'

import React, { useState } from 'react'

import QuestionText from '../../text/QuestionText/QuestionText'
import TestButton from '../../buttons/TestButton/TestButton'

export default function Question(props) {

    const [answers, setAnswers] = useState(props.answers)

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
                            solved={props.solved}
                        />
                    })
                }
            </div>
            <hr/>
        </section>
    )
}