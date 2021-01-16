import React from "react";

function Divider({ color }) {
  return (
    <div className="relative h-0">
      <div
        className={`absolute top-0 left-0 w-full h-32 z-10 transform -translate-x-1 -translate-y-8 rotate-3 ${color}`}
      ></div>
    </div>
  );
}

export default Divider;
