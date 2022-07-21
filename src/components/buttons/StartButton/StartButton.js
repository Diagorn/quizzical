import './StartButton.css'

import React from 'react'

export default function StartButton(props) {
    return (
        <button 
            className='button start-button'
            onClick={props.handleClick}>Start quiz!</button>
    )
}