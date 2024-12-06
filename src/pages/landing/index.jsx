import React from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Footer />
    </div>
  );
};

export default LandingPage;
