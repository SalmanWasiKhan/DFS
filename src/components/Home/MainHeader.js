import React, { useState, useEffect } from "react";
import Button from "../Button";

function MainHeader() {
  const [scroll, setscroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      setscroll(document.documentElement.scrollTop);
    });
    return () => {
      window.removeEventListener("scroll", (event) => {
        setscroll(document.documentElement.scrollTop);
      });
    };
  }, [document.documentElement.scrollTop]);

  return (
    <header
      className={`top-0 left-0 z-20 flex items-center justify-between w-full px-6 ${
        scroll < 150 ? "mt-9 absolute py-10" : "fixed bg-white py-3 shadow-lg"
      }`}
    >
      <div
        className={`${
          scroll < 150
            ? "text-4xl font-bold text-gray-50"
            : "text-2xl font-semibold text-secondary"
        }`}
      >
        Digital Financial Solutions
      </div>
      <div
        className={`font-semibold ${
          scroll < 150 ? "text-gray-50" : "text-gray-900"
        } `}
      >
        <a href="/" className="mx-6">
          Home
        </a>
        <a href="/" className="mx-6">
          Services
        </a>
        <a href="/" className="mx-6">
          About us
        </a>
        <a href="/" className="mx-6">
          Contact us
        </a>
        <Button title="01234567890" className="text-lg" inverted />
      </div>
    </header>
  );
}

export default MainHeader;
