import './App.css';

import React, { useState } from 'react';
import WelcomePage from './pages/WelcomePage/WelcomePage.js'
import QuizPage from './pages/QuizPage/QuizPage.js';

function App() {

  const [startPage, setStartPage] = useState(true);

  function handleStartButtonClick() {
    setStartPage(false)
  }

  return (
    <div className="App">
      <main>
        <div className='content'>
          {
            startPage ? 
              <WelcomePage
                 handleClick={handleStartButtonClick}
              /> : 
              <QuizPage />
          }
        </div>
      </main>
    </div>
  );
}

export default App;
