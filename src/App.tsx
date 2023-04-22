import "./App.css";
import { Timeline } from "./features/timeline/Timeline";
import { Profile } from "./features/profile/Profile";
import { useEffect, useState } from "react";
import { portfolioData } from "./fixtures/portfolioData";

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
        <a className="navlink">ABOUT</a> | <a className="navlink">EXPERIENCE</a>{" "}
        | <a className="navlink">EDUCATION</a> |{" "}
        <a className="navlink">MILITARY SERVICE</a> |{" "}
        <a className="navlink">WHAT'S UP</a>
      </div>
      <Timeline setTimelineRef={setTimelineRef} />
    </div>
  );
}

export default App;
