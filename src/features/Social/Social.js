import React from "react";
import SemanticButton from "../reusable/SemanticButton";
import {
  CodepenIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../../assets/icons/SVGIcons";

const Social = React.forwardRef(({ customStyle, aos, toggleSocial }, ref) => {
  return (
    <div
      ref={ref}
      data-aos={aos}
      data-aos-duration={270}
      data-aos-delay={297}
      data-aos-anchor-placement={toggleSocial && "bottom-bottom"}
      style={{ position: "relative", height: "100%", pointerEvents: "none" }}
    >
      <div className={customStyle} style={{ pointerEvents: "all" }}>
        <SemanticButton
          onClick={() => {
            window.open("https://github.com/Shai-E");
          }}
        >
          <GithubIcon width={24} />
        </SemanticButton>
        {/* <TwitterIcon width={24} /> */}
        {/* <CodepenIcon width={24} /> */}
        <SemanticButton
          onClick={() => {
            window.open("https://www.linkedin.com/in/shai-eliav");
          }}
        >
          <LinkedinIcon width={24} />
        </SemanticButton>
        <SemanticButton
          onClick={() => {
            window.open("https://www.instagram.com/shai_key");
          }}
        >
          <InstagramIcon width={24} />
        </SemanticButton>
        <div className="last-icon" />
      </div>
    </div>
  );
});

export default Social;
