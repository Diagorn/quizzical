import './ResultsText.css'

import React from 'react';

export default function ResultsText(props) {
    return (
        <h4 className='result-text'>You scored {props.correctQty}/{props.allQty} answers</h4>
    )
}