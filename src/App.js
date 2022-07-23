import './App.css';

import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import WelcomePage from './pages/WelcomePage/WelcomePage.js'
import QuizPage from './pages/QuizPage/QuizPage.js';

function App() {

  const [startPage, setStartPage] = useState(true);

  function handleStartButtonClick() {
    setStartPage(false)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<WelcomePage />}/>
        <Route path="/quiz" element={<QuizPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
