import React from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Footer from "../../components/Footer";
import FertlizerSec from "./components/FertlizerSec";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <FertlizerSec />
      <Footer />
    </div>
  );
};

export default LandingPage;
