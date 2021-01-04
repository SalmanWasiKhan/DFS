import React from "react";
import Button from "../Button";

function MainHeader() {
  return (
    <header className="absolute top-0 left-0 z-20 flex items-center justify-between w-full px-6 py-10 mt-9">
      <div className="text-4xl font-bold text-gray-50">
        Digital Financial Solutions
      </div>
      <div className="font-semibold text-gray-50">
        <a href="#" className="mx-6">
          Home
        </a>
        <a href="#" className="mx-6">
          Services
        </a>
        <a href="#" className="mx-6">
          About us
        </a>
        <a href="#" className="mx-6">
          Contact us
        </a>
        <Button title="01234567890" className="text-lg" inverted />
      </div>
    </header>
  );
}

export default MainHeader;
