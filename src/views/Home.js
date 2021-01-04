import React from "react";
import Header from "../components/Home/Header";
import Hero from "../components/Home/Hero";
import MainHeader from "../components/Home/MainHeader";
import Services from "../components/Home/Services";

function Home() {
  return (
    <div className="">
      <Header />
      <MainHeader />
      <Hero />
      <div className="relative h-0">
        <div className="absolute top-0 left-0 w-full h-32 transform -translate-x-1 -translate-y-8 bg-gray-100 rotate-3"></div>
      </div>
      <Services />
    </div>
  );
}

export default Home;
