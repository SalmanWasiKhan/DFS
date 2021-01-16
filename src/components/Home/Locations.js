import React from "react";
import Feature from "./Feature";
import locationIcon from "../../icons/location.svg";

function Locations() {
  const data = [
    {
      heading: "Office",
      content: "Bloomsbury Square, London WC1B 4EA",
      icon: locationIcon,
    },
  ];

  return (
    <section className="px-4 pb-20 pt-28 bg-gray-50">
      <div className="pb-16 mx-4 border-b-2 border-gray-300">
        <div className="flex items-center mt-6">
          <div className="w-12 h-0.5 mr-3 bg-primary"></div>
          <span className="text-gray-800 ">Our Offices</span>
        </div>
        <h1 className="mt-1 text-4xl font-light font-montserrat">
          Get in Touch
        </h1>
        <p className="w-full mt-5 font-medium md:w-3/5">
          Come and visit our quarters or simply send us an email anytime you
          want. We are open to all suggestions from our faithful clients.
        </p>
      </div>
      <div className="flex flex-wrap w-full pt-16">
        <Feature width="w-1/4" inverted />
        <Feature width="w-1/4" />
        <Feature width="w-1/4" inverted />
        <Feature width="w-1/4" />
      </div>
    </section>
  );
}

export default Locations;
