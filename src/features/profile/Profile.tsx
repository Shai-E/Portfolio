import React, { useEffect, useRef, useState } from "react";
import Skill from "../skill/Skill";
import Phone from "../3DModels/Phone";
import "./Profile.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { portfolioData } from "../../fixtures/portfolioData";
import {
  CodepenIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../../assets/icons/SVGIcons";
import SemanticButton from "../reusable/SemanticButton";
import { About } from "../About/About";
export function Profile({ setProfileRef, isAbout, setIsAbout }: any) {
  const profileRef = useRef(null);

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
                data-aos-delay="400"
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
                data-aos-delay="600"
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
        <div className="social">
          <SemanticButton
            onClick={() => {
              window.open("https://github.com/Shai-E");
            }}
          >
            <GithubIcon width={24} />
          </SemanticButton>
          {/* <TwitterIcon width={24} /> */}
          {/* <CodepenIcon width={24} /> */}
          <SemanticButton
            onClick={() => {
              window.open("https://www.linkedin.com/in/shai-eliav");
            }}
          >
            <LinkedinIcon width={24} />
          </SemanticButton>
          <SemanticButton
            onClick={() => {
              window.open("https://www.instagram.com/shai_key");
            }}
          >
            <InstagramIcon width={24} />
          </SemanticButton>
          <div className="last-icon" />
        </div>
      </div>
    </div>
  );
}
