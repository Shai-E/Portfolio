import "./App.css";
import { Timeline } from "./features/timeline/Timeline";
import { Profile } from "./features/profile/Profile";
import { useEffect, useRef, useState, createRef } from "react";
import { portfolioData } from "./fixtures/portfolioData";
import { Link, animateScroll as scroll } from "react-scroll";
import SemanticNavButton from "./features/reusable/SemanticNavButton";
import Social from "./features/Social/Social";

function App() {
  const [timelineRef, setTimelineRef] = useState<{ current: any } | null>(null);
  const [profileRef, setProfileRef] = useState<{ current: any } | null>(null);
  const socialRef = useRef(null);

  const [isAbout, setIsAbout] = useState(false);
  const [toggleSocial, setToggleSocial] = useState(false);

  useEffect(() => {
    if (timelineRef && profileRef) {
      // window.scrollTo(0, window.innerHeight);

      const listener = (ev: any) => {
        if (
          document.body.scrollHeight - (window.scrollY + window.innerHeight) <=
          5
        ) {
          setToggleSocial(true);
        } else {
          setToggleSocial(false);
        }
        // if (ev.deltaY > 0) {
        //   // Scrolling Down with mouse
        //   // timelineRef.current?.scrollIntoView();
        //   console.log(document.body.scrollHeight, "Scroll down");
        //   if (document.body.scrollHeight - window.scrollY <= 5) {
        //   }
        // } else if (ev.deltaY < 0) {
        //   if (ev.y > 0) {
        //     console.log(window.scrollY);
        //   }
        //   // Scrolling Up with mouse
        //   // profileRef.current?.scrollIntoView();
        //   console.log(document.body.scrollHeight, "Scroll Up");
        // }
      };

      document.addEventListener("wheel", listener);
      return () => document.removeEventListener("wheel", listener);
    }
  }, [timelineRef, profileRef]);

  const socialProps = {
    customStyle: "social social-abs",
    display: toggleSocial ? "none" : "flex",
    aos: "fade-right",
    toggleSocial: !toggleSocial,
  };

  return (
    <div className="App">
      <Profile
        setProfileRef={setProfileRef}
        isAbout={isAbout}
        setIsAbout={setIsAbout}
        toggleSocial={toggleSocial}
      />
      <div className="sticky-title">
        <SemanticNavButton
          route="hero"
          title="ABOUT"
          onClick={() => {
            setIsAbout(false);
            setToggleSocial(false);
          }}
        />
        |
        <SemanticNavButton
          route="experience"
          title="EXPERIENCE"
          offset={-60}
          onClick={() => {
            setToggleSocial(false);
          }}
        />
        |
        <SemanticNavButton
          route="education"
          title="EDUCATION"
          offset={-100}
          onClick={() => {
            setToggleSocial(false);
          }}
        />
        |
        <SemanticNavButton
          route="military"
          title="MILITARY SERVICE"
          offset={-300}
          onClick={() => {
            setToggleSocial(false);
          }}
        />
        |
        <SemanticNavButton
          route="contact"
          title="CONTACT ME"
          onClick={() => {
            setToggleSocial(true);
          }}
        />
      </div>
      <Timeline setTimelineRef={setTimelineRef} />
      <div id="contact" className="contact-container">
        <Social {...socialProps} ref={socialRef} />
      </div>
    </div>
  );
}

export default App;
