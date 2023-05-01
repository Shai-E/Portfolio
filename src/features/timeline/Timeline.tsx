import { useEffect, useRef, forwardRef } from "react";
import "./Timeline.css";
import "./Description.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Emulator } from "../emulator/Emulator";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Skill from "../skill/Skill";
import OtherExperience from "./OtherExperience";

interface TimelineProps {
  position?: string;
  aside?: any;
  children?: any;
  description?: string;
  organization?: string;
  dates?: string;
  index: number;
  skills?: string[];
  skillIcons?: any[];
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
  skills,
  skillIcons,
  isLast,
}: TimelineProps) {
  return (
    <VerticalTimelineElement iconStyle={{ backgroundColor: "#cce3de" }}>
      <div className={`${"content"}`}>
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
        {skills && (
          <div style={{ textAlign: "left" }}>
            <br />
            <span>The skills I've aquired at this job:</span>
            <ul style={{ textAlign: "left", fontSize: 14 }}>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
        {skillIcons && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {skillIcons.map((skill, index) => (
              <Skill path={skill} key={index} />
            ))}
          </div>
        )}
      </div>
    </VerticalTimelineElement>
  );
}

type TitleProps = {
  text: string;
};

export const Title = ({ text }: TitleProps) => {
  return (
    <div data-aos="zoom-in-up" className="timeline-title">
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

export function Timeline({ setTimelineRef }: any) {
  const timelineRef = useRef(null);

  useEffect(() => {
    AOS && AOS.init();
  }, [AOS]);

  useEffect(() => {
    timelineRef.current && setTimelineRef(timelineRef.current);
  }, [timelineRef.current]);

  const experience = [
    {
      organization: "IDI Ventures",
      position: "React Native Developer – Mobile Team",
      dates: "2021 – TODAY",
      children: <Emulator />,
      aside: null,
      description:
        "Developing a new trading platform. Have implemented all types of navigation with fully customized designs. Have dealt with optimizing performance in long real-time changing lists (due to socket connections that change the trading values constantly). Have created reusable components for quick full control over the app and custom hooks for reusable logic. Have implemented the dark mode, key based localization with i18n, and search logic. Have made the app RTL ready for both iOS and Android. Used Redux Toolkit for global state management. Used mostly Reanimated for handling animations.",
    },
    {
      organization: "8200 Alumni Consultants",
      position: "Webmaster",
      dates: "2021",
      // aside: <Emulator />,
      description:
        "At the starting point of my web developer career I found this cool job that perfected the basics for me.",
      skills: [
        "making a website fully responsive for all screen sizes and mobile view",
        "being true to the original design with a pixel perfect approach in mind",
        "providing alternatives when the design is flawed or incompatible",
        "using animation libraries",
        "creating my own animations with JavaScript and CSS",
        "using a canvas to create extra components and new features",
      ],
      skillIcons: [
        require("../../assets/js.png"),
        require("../../assets/html.png"),
        require("../../assets/css.png"),
      ],
      links: [
        {
          about:
            "Here's an example of a landing page design and the result. Notice it's just an example, so the form doesn't actually send your data anywhere.",
          url: "https://gold-e623b.web.app/",
          pic: require("../../assets/images/lp.jpg"),
        },
        {
          about:
            "Here you can check out this canvas wheel of furtune I've created as an extra feature",
          url: "https://shai-e.github.io/wheel/",
          pic: require("../../assets/images/wheel.png"),
        },
      ],
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
    <div className="my-timeline" ref={timelineRef}>
      <VerticalTimeline lineColor="#a8b2d1">
        <Description
          text={
            "The past three years I’ve focused on front end with React and React Native. I study constantly on Udemy and love to overcome challenges in code. I believe I am a great team worker, a quick learner and I strive for excellence in everything I do."
          }
        />
        <div id="experience">
          {experience.length > 0 && <Title text={"experience"} />}
          {experience.map((props, index) => (
            <TimelineStep
              key={index}
              {...props}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
        <div id="other" style={{ position: "relative" }}>
          <OtherExperience aos="zoom-out-up" />
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
        <div id="education"></div>
      </VerticalTimeline>
    </div>
  );
}
