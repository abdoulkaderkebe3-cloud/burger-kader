import React from "react";

export default function Heading(props) {
  const { children, variant, theme, display,alignement,className, } = props;

  const classDefault = "uppercase mt-5 ";
  let font, color,align;

  switch (theme) {
    case "marron":
      font = "ff";
      break;
    default:
      font = "tracking-tighter";
  }

  switch (display) {
    case "gray":
      color = "text-gray-600";
      break;
    default:
      color = "text-marron";
  }
  switch (alignement) {
    case "center":
      align = "justify-center";
      break;
    case "right":
      align = "justify-end";
      break;
    default:
      align = "text-start";
  }

  switch (variant) {
    case "h3":
      return (
        <div className={`flex ${align}`}>
          <h3 className={`text-2xl ${font} ${classDefault} ${color} ${className}  `}>
            {children}
          </h3>
        </div>
      );
    case "h4":
      return (
        <div className={`flex ${align}`}>
          <h4 className={`text-lg ${font} ${classDefault} ${color} ${className}  `}>
            {children}
          </h4>
        </div>
      );
    default:
      return (
        <div className={`flex ${align}`}>
          <h2
            className={`${
              theme === "marron" ? "text-5xl " : "text-2xl"
            }  ${font}  ${classDefault} ${className}`}
          >
            {children}
          </h2>
        </div>
      );
  }
}
