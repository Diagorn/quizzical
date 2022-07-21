import './QuestionText.css'

import React from 'react'

export default function QuestionText(props) {
    return (
        <h3 className='question-text--header'>{props.question}</h3>
    )
}