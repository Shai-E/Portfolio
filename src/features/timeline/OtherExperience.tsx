import React, { useState } from "react";
import SemanticButton from "../reusable/SemanticButton";
import "./OtherExperience.css";

const OtherExperience = ({
  aos,
  otherOccupations,
}: {
  aos: string;
  otherOccupations: {
    organization: string;
    position: string;
    dates: string;
    // aside: <Emulator />,
    description: string;
  }[];
}) => {
  const [currentOccupationIDX, setCurrentOccupationIDX] = useState(0);
  const [secondaryCOIDX, setSecondaryCOIDX] = useState<number | null>(0);
  return (
    <div className="ox-container" data-aos={aos}>
      <div className="ox-left">
        {otherOccupations.map((occupation, index) => (
          <div
            tabIndex={0}
            className={
              currentOccupationIDX === index
                ? "first-col-tab-active"
                : "first-col-tab"
            }
            onClick={setCurrentOccupationIDX.bind(this, index)}
            onMouseEnter={setSecondaryCOIDX.bind(this, index)}
            onMouseLeave={setSecondaryCOIDX.bind(this, null)}
          >
            {occupation.position}
          </div>
        ))}
        <div className="basic-oo-info">
          <span>
            {
              otherOccupations[
                secondaryCOIDX === 0
                  ? secondaryCOIDX
                  : secondaryCOIDX || currentOccupationIDX
              ].organization
            }
          </span>
          <span>
            {
              otherOccupations[
                secondaryCOIDX === 0
                  ? secondaryCOIDX
                  : secondaryCOIDX || currentOccupationIDX
              ].dates
            }
          </span>
        </div>
      </div>
      <div className="ox-right">
        <div className="ox-top">
          <span>
            {
              otherOccupations[
                secondaryCOIDX === 0
                  ? secondaryCOIDX
                  : secondaryCOIDX || currentOccupationIDX
              ].description
            }
          </span>
        </div>
        <div className="ox-bottom"></div>
      </div>
    </div>
  );
};

export default OtherExperience;
