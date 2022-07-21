import './TestButton.css'

import React from 'react'

export default function TestButton(props) {
    console.log(props.answer)
    return(
        <button className='button test-button'>{props.answer.text}</button>
    )
}