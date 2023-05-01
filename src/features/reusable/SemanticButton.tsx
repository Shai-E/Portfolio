import React, { MouseEventHandler, PropsWithChildren } from "react";
const SemanticButton = ({
  children,
  onClick,
}: {
  children: any;
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
      {children}
    </button>
  );
};
export default SemanticButton;
