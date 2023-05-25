import React, { useEffect, useRef } from "react";
import myImage from "../../assets/images/me.webp";
import "./About.css";

export function About({ setProfileRef }: any) {
  const profileRef = useRef(null);

  useEffect(() => {
    profileRef.current && setProfileRef(profileRef.current);
  }, [profileRef.current]);

  return (
    <div className="about summary noselect" ref={setProfileRef} id="about">
      <img src={myImage} className="me" data-aos="zoom-in-up" />
      <p className="about-text" data-aos="fade-right">
        <span className="bigger-text">
          The past three years I’ve focused on front end with{" "}
        </span>
        <br />
        <b className="title">React Native.</b>
        <br />I study constantly on Udemy and love to overcome challenges in
        code. I believe I am a great team worker, a quick learner and I strive
        for excellence in everything I do.
      </p>
    </div>
  );
}
