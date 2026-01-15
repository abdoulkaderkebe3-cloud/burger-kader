import React from "react";

export default function HeadingTitle(props) {
    const {children,
        variant
    }= props;
    const classDefault = "px-7 py-3 bg-kader text-marron uppercase font-bold inline-block"

    switch(variant){
        case "h3":
            return(
                <div className="flex items-center justify-center my-5">
                <h3 className={`text-sm  ${classDefault}`} >{children}</h3>
                </div>
            )
        default:
            return(
                <div className="flex items-center justify-center my-5">
                    <h2 className={`  ${classDefault}`}>
                        {children}
                    </h2>
                </div>
            )
  }
}
