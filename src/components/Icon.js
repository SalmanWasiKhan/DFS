import React from "react";
import { ReactSVG } from "react-svg";

// displays svg icon
function Icon({ icon, className, style, containerClass }) {
  return (
    <div className={containerClass}>
      <ReactSVG
        src={icon}
        className={`fill-current ${className}`}
        style={style}
      />
    </div>
  );
}

export default Icon;
