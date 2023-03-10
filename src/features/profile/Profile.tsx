import React, { useState } from "react";
import Skill from "../skill/Skill";
import "./Profile.css";

export function Profile() {
  const portfolioData = {
    position: "Full Stack & React Native Developer",
    name: "Shai Eliav",
    summary:
      "The past three years I’ve focused on front end with React and React Native. I study constantly on Udemy and love to overcome challenges in code. I believe I am a great team worker, a quick learner and I strive for excellence in everything I do.",
  };
  const skillPics = [
    require("../../assets/js.png"),
    require("../../assets/html.png"),
    require("../../assets/css.png"),
    require("../../assets/node.png"),
    require("../../assets/react.png"),
    require("../../assets/redux.png"),
    require("../../assets/angular.png"),
    require("../../assets/docker.png"),
    require("../../assets/ts.png"),
  ];
  return (
    <div className="my-profile">
      <div className="container">
        <h2>{portfolioData.position}</h2>
        <h1>{portfolioData.name}</h1>
        <p>{portfolioData.summary}</p>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {skillPics.map((skill, index) => (
            <Skill key={index} path={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
