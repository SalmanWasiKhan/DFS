import React from "react";
import Divider from "../components/Divider";
import Contact from "../components/Home/Contact";
import Features from "../components/Home/Features";
import Header from "../components/Home/Header";
import Hero from "../components/Home/Hero";
import Locations from "../components/Home/Locations";
import MainHeader from "../components/Home/MainHeader";
import Services from "../components/Home/Services";
import Team from "../components/Home/Team";

function Home() {
  return (
    <div className="">
      <Header />
      <MainHeader />
      <Hero />
      <Divider color="bg-gray-100" />
      <Services />
      <Features />
      <Team />
      <Divider color="bg-white" />
      <Contact />
      <Locations />
    </div>
  );
}

export default Home;
