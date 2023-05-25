import React, { MouseEventHandler, PropsWithChildren } from "react";
import { Link } from "react-scroll";
const SemanticNavButton = ({
  route,
  title,
  onClick,
  offset,
  duration,
}: {
  route: string;
  title: string;
  onClick?: any;
  offset?: number;
  duration?: number;
}) => {
  return (
    <button
      style={{
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        cursor: "pointer",
      }}
    >
      <Link
        to={route}
        className="navLink"
        activeClass="navLinkActive"
        spy={true}
        smooth={true}
        offset={offset || 0}
        duration={duration || 500}
        onClick={onClick}
      >
        {title}
      </Link>
    </button>
  );
};
export default SemanticNavButton;
