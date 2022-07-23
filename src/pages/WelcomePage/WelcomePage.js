import React from 'react'

import StartText from '../../components/text/StartText/StartText'
import StartButton from '../../components/buttons/StartButton/StartButton'

export default function StartPage(props) {
    return (
        <div className='App'>
            <main>
                <div className='content'>
                    <StartText />
                    <StartButton 
                        handleClick={props.handleClick}
                    />
                </div>
            </main>
        </div>
    )
}