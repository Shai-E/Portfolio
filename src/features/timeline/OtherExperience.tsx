import React from "react";
import "./OtherExperience.css";

const OtherExperience = ({ aos }: { aos: string }) => {
  return (
    <div className="ox-container" data-aos={aos}>
      <div className="ox-left"></div>
      <div className="ox-center"></div>
      <div className="ox-right"></div>
    </div>
  );
};

export default OtherExperience;
