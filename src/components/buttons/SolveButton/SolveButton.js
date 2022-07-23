import './SolveButton.css'

import React from 'react'

export default function SolveButton(props) {
    return (
        <button 
            className='button start-button'
            onClick={props.handleClick}>{props.caption}</button>
    )
}