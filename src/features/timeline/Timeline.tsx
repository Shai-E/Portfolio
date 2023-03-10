import { useEffect } from "react";
import "./Timeline.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Emulator } from "../emulator/Emulator";

interface TimelineProps {
  position?: string;
  aside?: any;
  children?: any;
  description?: string;
  organization?: string;
  dates?: string;
  index: number;
}

export function TimelineStep({ position, description, aside, children, dates, organization, index }: TimelineProps) {
  return (
    <div
      // data-aos={`flip-${index % 2 === 0 ? "left" : "right"}`}
      className={`container ${index % 2 === 0 ? "left" : "right"} ${aside ? "orange" : ""}`}
        data-aos={`zoom-in-${index % 2 !== 0 ? "left" : "right"}`}
        data-aos-easing="linear"
        data-aos-duration="400"
      >
      <div
        className={`${"content"}`}
      >
        {aside && (
          <div style={{ position: "absolute", left: index % 2 === 0 ? "165%" : "-65%", bottom: "-5%" }}>{aside}</div>
        )}
        <h2>{position}</h2>
        <h3>{organization}</h3>
        <h6>{dates}</h6>
        {children}
        <p style={{textAlign:'left'}}>{description}</p>
      </div>
    </div>
  );
}

export function Timeline() {
  useEffect(() => {
    AOS && AOS.init();
  }, [AOS]);

  const experience = [
    {
      organization: "IDI Ventures",
      position: "React Native Developer – Mobile Team",
      dates: "2021 – TODAY",
      aside: <Emulator />,
      description:
        "Developing a new trading platform. Have implemented all types of navigation with fully customized designs. Have dealt with optimizing performance in long real-time changing lists (due to socket connections that change the trading values constantly). Have created reusable components for quick full control over the app and custom hooks for reusable logic. Have implemented the dark mode, key based localization with i18n, and search logic. Have made the app RTL ready for both iOS and Android. Used Redux Toolkit for global state management. Used mostly Reanimated for handling animations.",
    },
    {
      organization: "8200 Alumni Consultants",
      position: "Webmaster",
      dates: "2021",
      // aside: <Emulator />,
      description:
        "Building fully responsive landing pages.",
    },
  ];

  const otherOccupations = [

  ]

  return (
    <div className="my-timeline">
      <div className="timeline">

        {experience.map((props, index) => (
          <TimelineStep key={index} {...props} index={index} />
        ))}
      </div>
    </div>
  );
}
