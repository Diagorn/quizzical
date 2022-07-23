import './TestButton.css'

import React from 'react'

export default function TestButton(props) {

    function getClasses() {
        if (props.solved) {
            //Corrected guess
            if (props.answer.correct) { 
                return 'button test-button solved-right'
            }

            //if the user guessed wrong
            else if (props.answer.active && !props.answer.correct) {
                return 'button test-button solved-wrong'
            }

            else {
                return 'button test-button solved-neutral'
            }
        } else {
            return props.answer.active ? 
            'button test-button active-test-button' :
            'button test-button'
        }
    }

    const classes = getClasses();

    return(
        <button 
                className={getClasses()} 
                onClick={!props.solved ? props.handleClick : null}>
            {props.answer.text}
        </button>
    )
}