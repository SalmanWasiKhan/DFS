import React from "react";
import member from "../../images/member1.jpg";

function MemberCard() {
  return (
    <div className="w-1/3 mx-6">
      <img src={member} alt="" />
      <div>
        <div className="flex items-center mt-6">
          <div className="w-12 h-0.5 mr-3 bg-primary"></div>
          <span className="text-gray-800 ">Senior Tax Expert</span>
        </div>
        <h1 className="text-3xl font-light font-montserrat">Mohsin</h1>
        <p className="pr-2 mt-3 mb-6 text-sm font-medium">
          Continually reintermediate integrated processes through technically
          sound intellectual capital. Holistically foster superior
          methodologies.
        </p>
        <a href="/" className="text-sm font-semibold text-secondary">
          {"Read more >"}
        </a>
      </div>
    </div>
  );
}

export default MemberCard;
