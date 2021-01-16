import React from "react";
import Icon from "../Icon";

function Feature({ heading, content, icon, inverted, width }) {
  return (
    <div className={`flex ${width} px-4 mb-4`}>
      <div className="pr-4">
        <Icon
          icon={icon}
          className={`w-16 h-16 ${
            inverted ? "text-secondary" : "text-primary"
          }`}
        />
      </div>
      <div>
        <h1 className="text-2xl font-montserrat">{heading}</h1>
        <p className="pr-2 mt-2 mb-8 font-medium">{content}</p>
      </div>
    </div>
  );
}

export default Feature;
