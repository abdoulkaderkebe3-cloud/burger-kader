import React from "react";

export default function Button({ children, className, color, theme }) {
  let background;

  switch (color) {
    case "marron":
      background = "bg-[#3d2514] hover:bg-yellow-950";
      break;
    case "danger":
      background = "bg-rouge hover:bg-[#990e0e]";
      break;
    case "idole":
      background = "bg-kader hover:bg-[#f5b029 ]";
      break;
    default:
      background = "bg-kader hover:bg-[#f5b029 ]";
  }

  switch (theme) {
    case "small":
      return (
        <div>
          <button
            className={`  ${className} ${background}  px-4 py-2  uppercase shadow-xl text-white  text-xs     animate active:translate-1`}
          >
            {children}{" "}
          </button>
        </div>
      );
    case "big":
      return (
        <div>
          <button
            className={`  ${className} ${background} md:px-8 md:py-4 px-4 py-4 uppercase shadow-xl text-white  md:text-basex  text-sm    animate active:translate-1`}
          >
            {children}{" "}
          </button>
        </div>
      );
    default:
      return (
        <div>
          <button
            className={`  ${className}  ${background} px-4 py-3 uppercase shadow-xl text-white  text-xs md:text-sm    animate active:translate-1`}
          >
            {children}{" "}
          </button>
        </div>
      );
  }
}
