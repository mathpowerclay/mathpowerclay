import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import PowerClay from "./PowerClay";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <PowerClay />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
