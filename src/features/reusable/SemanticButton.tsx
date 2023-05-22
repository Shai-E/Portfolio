import React, { MouseEventHandler, PropsWithChildren } from "react";
const SemanticButton = ({
  children,
  onClick,
  className,
}: {
  children: any;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
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
      className={className}
    >
      {children}
    </button>
  );
};
export default SemanticButton;
