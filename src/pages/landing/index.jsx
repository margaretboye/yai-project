import React from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Footer from "../../components/Footer";
import FertlizerSec from "./components/FertlizerSec";
import TypesOfFertilizer from "./components/TypesOfFertilizer";

const LandingPage = () => {
  return (
    <div className="bg-[#F8F7F0] ">
      <HeroSection />
      <About />
      {/* <FertlizerSec /> */}
      <TypesOfFertilizer />
      <Footer />
    </div>
  );
};

export default LandingPage;
