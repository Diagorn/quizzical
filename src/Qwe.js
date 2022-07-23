import React from 'react';
import {Switch, Route} from 'react-router-dom'

import WelcomePage from './pages/WelcomePage/WelcomePage.js'
import QuizPage from './pages/QuizPage/QuizPage.js'

export default function Qwe() {
    return (
        <Switch>
            <Route
                path="/"
            >
                <WelcomePage />
            </Route>
            <Route
                path="/quiz"
            >
                <QuizPage />
            </Route>
        </Switch>
    )
}