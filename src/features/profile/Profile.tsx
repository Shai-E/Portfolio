import React, { useEffect, useRef, useState } from "react";
import Skill from "../skill/Skill";
import Phone from "../3DModels/Phone";
import "./Profile.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { portfolioData } from "../../fixtures/portfolioData";

import { About } from "../About/About";
import Social from "../Social/Social";
export function Profile({
  setProfileRef,
  isAbout,
  setIsAbout,
  toggleSocial,
}: any) {
  const profileRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    profileRef.current && setProfileRef(profileRef.current);
  }, [profileRef.current]);

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

  const socialProps = {
    className: "social" + (toggleSocial ? " hide" : ""),
    aos: "fade-down",
    toggleSocial,
  };

  return (
    <div className="my-profile" ref={setProfileRef} id="hero">
      <div className="container">
        <div className="summary-container">
          <div className="canvas-container">
            <Canvas>
              <Stage adjustCamera={0.7}>
                <Phone />
                <OrbitControls enableZoom={false} autoRotate={true} />
              </Stage>
            </Canvas>
          </div>
          {isAbout ? (
            <About />
          ) : (
            <div className="summary noselect">
              <span
                className={"summary-line"}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span>Hi!</span>
              </span>
              <div
                className={"summary-line"}
                data-aos="fade-up"
                data-aos-delay="450"
              >
                <span>I'm</span>
                <h1 className="name" onClick={() => setIsAbout(true)}>
                  {" "}
                  {portfolioData.name}
                </h1>
              </div>
              <div
                className={"summary-line wrap"}
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <span>and I'm a</span>
                <h2 className="title">{portfolioData.position1}</h2>
                <span>&</span>
                <h2 className="title">{portfolioData.position2}</h2>
                <span>developer</span>
              </div>
            </div>
          )}
        </div>
        {<Social {...socialProps} ref={socialRef} />}
      </div>
    </div>
  );
}
