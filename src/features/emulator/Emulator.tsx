import { useEffect, useState } from "react";
import "./Emulator.css";
import emulatorFrame from "../../assets/iphoneEmulator.png";

export function Emulator() {
  const videos = [
    require("../../assets/videos/1.mp4"),
    require("../../assets/videos/2.mp4"),
    require("../../assets/videos/3.mp4"),
    require("../../assets/videos/4.mp4"),
    require("../../assets/videos/5.mp4"),
  ];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const handleVideoEnd = () => {
    console.log("hi");

    setCurrentVideoIndex((currentVideoIndex + 1) % videos.length);
  };
  useEffect(() => {
    const video = document.getElementById("video");
    if (video) {
      video.addEventListener("ended", handleVideoEnd);
      return () => video.removeEventListener("ended", handleVideoEnd);
    }
  }, [currentVideoIndex]);
  return (
    <div className="my-emulator">
      <div className="my-emulator-container">
        <video id="video" autoPlay muted src={videos[currentVideoIndex]} className="my-emulator-video" />
        <img src={emulatorFrame} className="my-emulator-frame" />
      </div>
    </div>
  );
}
