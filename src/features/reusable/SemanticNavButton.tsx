import React, { MouseEventHandler, PropsWithChildren } from "react";
import { Link } from "react-scroll";
const SemanticNavButton = ({
  route,
  title,
  onClick,
}: {
  route: string;
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
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
      onClick={onClick}
    >
      <Link
        to={route}
        className="navLink"
        activeClass="navLinkActive"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        {title}
      </Link>
    </button>
  );
};
export default SemanticNavButton;
