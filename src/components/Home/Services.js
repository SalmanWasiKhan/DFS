import React from "react";
import Button from "../Button";
import Service from "./Service";

function Services() {
  return (
    <section className="w-full p-6 bg-gray-100 ">
      <div className="flex items-center transform -translate-y-40">
        <div className="w-1/3 px-2">
          <div className="flex items-center">
            <div className="w-12 h-0.5 mr-3 bg-primary"></div>
            <span className="font-medium text-gray-800 ">
              Financial consultancy services
            </span>
          </div>
          <h2 className="pr-3 mt-1 text-4xl font-light font-montserrat">
            Getting your Taxes done, simply
          </h2>
          <p className="mt-3 font-medium text-gray-800">
            Keeping your eye on the ball while performing a deep dive on the
            start-up mentality to derive convergence.
          </p>
          <Button
            title="Our Tax Services >"
            className="py-3 mt-8 text-sm"
            inverted
          />
        </div>
        <div className="flex flex-col w-1/3 mx-2">
          <Service />
          <Service />
        </div>
        <div className="flex flex-col w-1/3 mx-2 transform translate-y-12">
          <Service />
          <Service />
        </div>
      </div>
    </section>
  );
}

export default Services;
