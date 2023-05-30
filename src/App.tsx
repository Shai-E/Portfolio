import "./App.css";
import { Timeline } from "./features/timeline/Timeline";
import { Profile } from "./features/profile/Profile";
import { useEffect, useRef, useState } from "react";
import SemanticNavButton from "./features/reusable/SemanticNavButton";
import Social from "./features/Social/Social";

function App() {
  const [timelineRef, setTimelineRef] = useState<{ current: any } | null>(null);
  const [profileRef, setProfileRef] = useState<{ current: any } | null>(null);
  const socialRef = useRef(null);

  const [isAbout, setIsAbout] = useState(false);
  const [toggleSocial, setToggleSocial] = useState(isAbout);

  useEffect(() => {
    if (timelineRef && profileRef) {
      // window.scrollTo(0, window.innerHeight);

      const listener = (ev: any) => {
        if (
          document.body.scrollHeight - (window.scrollY + window.innerHeight) <=
          50
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
    className: "social social-abs",
    display: toggleSocial ? "none" : "flex",
    aos: "fade-right",
    toggleSocial: !toggleSocial,
    moreInfo: true,
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
          offset={-300}
          title="CONTACT ME"
          onClick={() => {
            setToggleSocial(true);
          }}
        />
      </div>
      <Timeline setTimelineRef={setTimelineRef} />
      <div id="contact" className="contact-container">
        <Social {...socialProps} ref={socialRef} />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431649.6307622771!2d35.18997879803279!3d32.304794306319984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d400493c075d5%3A0x2cd995be543c3f22!2z16DXqteg15nXlA!5e0!3m2!1siw!2sil!4v1685355776759!5m2!1siw!2sil"
          width="100%"
          height="100%"
          style={{
            border: 0,
            zIndex: 0,
            top: 0,
            left: 0,
            position: "absolute",
            opacity: 0.5,
          }}
        ></iframe>
      </div>
    </div>
  );
}

export default App;
