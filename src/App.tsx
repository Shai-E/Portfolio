import "./App.css";
import { Timeline } from "./features/timeline/Timeline";
import { Profile } from "./features/profile/Profile";
import { useEffect, useRef, useState, createRef } from "react";
import { portfolioData } from "./fixtures/portfolioData";
import { Link, animateScroll as scroll } from "react-scroll";
import SemanticNavButton from "./features/reusable/SemanticNavButton";

function App() {
  const [timelineRef, setTimelineRef] = useState<{ current: any } | null>(null);
  const [profileRef, setProfileRef] = useState<{ current: any } | null>(null);

  useEffect(() => {
    if (timelineRef && profileRef) {
      // window.scrollTo(0, window.innerHeight);

      const listener = (ev: any) => {
        if (ev.deltaY > 0 && window.scrollY < window.innerHeight) {
          // Scrolling Down with mouse
          timelineRef.current?.scrollIntoView();
        } else if (ev.deltaY < 0 && window.scrollY < window.innerHeight) {
          // Scrolling Up with mouse
          profileRef.current?.scrollIntoView();
          console.log("Scroll Up");
        }
      };

      document.addEventListener("wheel", listener);
      return () => document.removeEventListener("wheel", listener);
    }
  }, [timelineRef, profileRef]);
  return (
    <div className="App">
      <Profile setProfileRef={setProfileRef} />
      <div className="sticky-title">
        <SemanticNavButton route="about" title="ABOUT" />|
        <Link
          to="experience"
          className="navLink"
          activeClass="navLinkActive"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          EXPERIENCE
        </Link>
        |
        <Link
          to="education"
          className="navLink"
          activeClass="navLinkActive"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          EDUCATION
        </Link>
        |
        <Link
          to="military"
          className="navLink"
          activeClass="navLinkActive"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          MILITARY SERVICE
        </Link>
        |
        <Link
          to="contact"
          className="navLink"
          activeClass="navLinkActive"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          SAY HI
        </Link>
      </div>
      <Timeline setTimelineRef={setTimelineRef} />
    </div>
  );
}

export default App;
