import React, { useEffect, useRef } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Timeline } from "./features/timeline/Timeline";
import { Emulator } from "./features/emulator/Emulator";
import { Profile } from "./features/profile/Profile";

function App() {
  const vidRef = useRef(null);
  useEffect(() => {
    console.log(vidRef.current);
  }, [vidRef.current]);
  return (
    <div className="App">
      <Profile />
      <Timeline />

      {/* 
        // my name
      */}
    </div>
  );
}

export default App;
