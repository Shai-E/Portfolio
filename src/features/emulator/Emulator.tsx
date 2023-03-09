import React, { useState } from "react";
import "./Emulator.css";
import emulatorFrame from "../../assets/iphoneEmulator.png";

export function Emulator() {
  return (
    <div className="my-emulator">
      <div className="my-emulator-container">
        <video
          autoPlay
          muted
          loop
          src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4"
          className="my-emulator-video"
        />
        <img src={emulatorFrame} className="my-emulator-frame" />
      </div>
    </div>
  );
}
