import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Timeline } from './features/timeline/Timeline';
import { Emulator } from './features/emulator/Emulator';

function App() {
  const vidRef = useRef(null)
  useEffect(()=>{
    console.log(

      vidRef.current
    );
    
  },[vidRef.current])
  return (
    <div className="App">
      <div>
        <h2>Full Stack & React Native Developer</h2>
        <h1>Shai Eliav</h1>
        <p>A highly motivated developer. These past two years I’ve focused on front end with React and  React Native. I study constantly on Udemy and love to experience and overcome challenges in  code. I started my way as a youth counselor, became a teaching assistant, then a teacher. I  believe I am a great team worker, a quick learner and I strive for excellence in everything I do.</p>
      </div>
      <Timeline/>

      {/* 
        // my name
      */}
    </div>
  );
}

export default App;
