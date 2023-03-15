import { useEffect } from "react";
import "./Timeline.css";
import "./Description.css";
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
  isLast?: boolean;
}

export function TimelineStep({
  position,
  description,
  aside,
  children,
  dates,
  organization,
  index,
  isLast,
}: TimelineProps) {
  return (
    <div
      className={`container ${index % 2 === 0 ? "left" : "right"} ${
        aside ? "orange" : ""
      }`}
      data-aos={`zoom-in-${index % 2 !== 0 ? "left" : "right"}`}
      data-aos-easing="linear"
      data-aos-duration="400"
    >
      <div className={`${"content"}`} style={{}}>
        {aside && (
          <div
            style={{
              position: "absolute",
              left: index % 2 === 0 ? "165%" : "-65%",
              bottom: "-5%",
            }}
          >
            {aside}
          </div>
        )}
        <h2>{position}</h2>
        <h3>{organization}</h3>
        <h6>{dates}</h6>
        {children}
        <p style={{ textAlign: "left" }}>{description}</p>
      </div>
    </div>
  );
}

type TitleProps = {
  text: string;
};

export const Title = ({ text }: TitleProps) => {
  return (
    <div
      data-aos="zoom-in-up"
      style={{
        position: "sticky",
        zIndex: 2,
        backgroundColor: "white",
        width: "fit-content",
        margin: "2px auto",
        padding: "10px 20px",
        borderRadius: "5px",
        color: "#b10505a6",
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
    >
      {text}
    </div>
  );
};

export const Description = ({ text }: TitleProps) => {
  return (
    <div data-aos="fade-up" className="description">
      {text}
    </div>
  );
};

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
      description: "Building fully responsive landing pages.",
    },
  ];

  const otherOccupations = [
    {
      organization: "Tchernichovsky High School",
      position: "English teacher",
      dates: "2018 – 2020",
      // aside: <Emulator />,
      description: "",
    },
    {
      organization: "Sharet Junior High",
      position: "Full time internship",
      dates: "2017 – 2018",
      // aside: <Emulator />,
      description: "",
    },
    {
      organization: "Ort Guttman High School",
      position: "Teaching assistant",
      dates: "2013 – 2014",
      // aside: <Emulator />,
      description: "",
    },
  ];

  return (
    <div className="my-timeline">
      <div className="timeline">
        <Description
          text={
            "The past three years I’ve focused on front end with React and React Native. I study constantly on Udemy and love to overcome challenges in code. I believe I am a great team worker, a quick learner and I strive for excellence in everything I do."
          }
        />
        {experience.length > 0 && <Title text={"experience"} />}
        {experience.map((props, index) => (
          <TimelineStep
            key={index}
            {...props}
            index={index}
            isLast={index === experience.length - 1}
          />
        ))}
        {otherOccupations.length > 0 && <Title text={"english teacher"} />}
        {otherOccupations.length > 0 && (
          <Description
            text={
              "Worked with at-risk students to build up their confidence and help them in the process of English acquisition for their matriculation (Bagrut) exam."
            }
          />
        )}
        {otherOccupations.map((props, index) => (
          <TimelineStep
            key={index}
            {...props}
            index={index}
            isLast={index === otherOccupations.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
