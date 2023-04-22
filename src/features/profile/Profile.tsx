import React, { useEffect, useRef } from "react";
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
export function Profile({ setProfileRef }: any) {
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
    <div className="my-profile" ref={setProfileRef}>
      <div className="container">
        <div className="summary-container">
          <div className="canvas-container">
            <Canvas>
              <Stage adjustCamera={0.7}>
                <Phone />
                <OrbitControls enableZoom={false} />
              </Stage>
            </Canvas>
          </div>
          <p className="summary noselect">
            <h2
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "baseline",
                fontSize: "1.5rem",
                gap: ".8rem",
              }}
            >
              <span>Hi!</span>
            </h2>
            <p
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "baseline",
                fontSize: "1.5rem",
                gap: ".8rem",
              }}
            >
              <span>I'm</span>
              <h1 className="name"> {portfolioData.name}</h1>
            </p>
            <p
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "baseline",
                fontSize: "1.5rem",
                gap: ".8rem",
              }}
            >
              <span>and I'm a</span>
              <h2 className="title">{portfolioData.position1}</h2>
              <span>&</span>
              <h2 className="title">{portfolioData.position2}</h2>
              <span>developer</span>
            </p>
            {/* {portfolioData.summary} */}
          </p>
        </div>
        <div className="social">
          <GithubIcon width={24} />
          {/* <TwitterIcon width={24} /> */}
          {/* <CodepenIcon width={24} /> */}
          <LinkedinIcon width={24} />
          <InstagramIcon width={24} />
          <div className="last-icon" />
        </div>
      </div>
    </div>
  );
}
