import React from "react";
import hero1 from "../../images/hero1.jpg";
import Button from "../Button";

function Hero() {
  return (
    <section className="relative pb-56 overflow-hidden">
      <img
        src={hero1}
        alt=""
        className="z-10 transform translate-y-20 scale-140"
      />
      <div className="absolute top-0 left-0 flex items-center w-full h-full p-3 bg-gray-900 bg-opacity-40">
        <div className="w-1/2"></div>
        <div className="w-1/2">
          <div className="flex items-center">
            <div className="w-16 h-0.5 mr-3 bg-primary "></div>
            <span className="text-lg font-semibold text-gray-50">
              Financial consultancy services
            </span>
          </div>
          <div className="mt-2 text-5.5xl font-montserrat">
            <h2 className="font-thin text-gray-50">Get It Right,</h2>
            <h3 className="mt-1 font-extrabold text-primary">The First Time</h3>
          </div>

          <div className="mt-12">
            <Button title="Our Services" className="mr-6 text-lg" />
            <Button title="Find consultancy" className="text-lg" inverted />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
