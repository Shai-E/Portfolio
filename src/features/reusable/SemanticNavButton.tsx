import React, { MouseEventHandler, PropsWithChildren } from "react";
import { Link } from "react-scroll";
const SemanticNavButton = ({
  route,
  title,
  onClick,
}: {
  route: string;
  title: string;
  onClick?: any;
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
        offset={0}
        duration={500}
        onClick={onClick}
      >
        {title}
      </Link>
    </button>
  );
};
export default SemanticNavButton;
