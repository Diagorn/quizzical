import React from 'react'

import StartText from '../../components/text/StartText/StartText'
import StartButton from '../../components/buttons/StartButton/StartButton'

export default function StartPage(props) {
    return (
        <>
            <StartText />
            <StartButton 
                handleClick={props.handleClick}
            />
        </>
    )
}