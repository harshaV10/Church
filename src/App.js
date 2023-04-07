import React, {useState, useEffect} from 'react';
import './App.css';
import { Splash } from './components/Splash';
import { LandingPage } from './components/LandingPage';

function App() {

  const [screen, switchScreen] = useState(localStorage.getItem("screen") || false);

    useEffect(() => {
    if (!screen) {
      localStorage.setItem('screen', false);
    }
  }, [screen]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      switchScreen(true);
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    }
  }, [])



  return (
    <div className="App">
      {!screen ?
      <Splash /> :
      <LandingPage />
    }
    </div>
  );
}

export default App;
