import React from "react";
import HeroImage from "../../../assets/images/hero-image1.jpg";
import NavBar from "../../../components/NavBar";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";

const HeroSection = () => {
  return (
    <section className="relative w-full ">
      <div className="">
        <img src={HeroImage} alt="heroimage" className="" />
      </div>

      <div className="absolute top-0 left-0 w-full">
        <NavBar />
      </div>
      <div className="flex flex-col absolute top-[50%] ">
        <h5 className="text-white border border-white rounded-full font-medium py-1 ">
          BELIEVE IN QUALITY
        </h5>
        <h1 className="text-7xl font-bold leading-[120px] text-white">
          Organic fertilizers <br />
          for healthy <br />
          crops
        </h1>

        <Button label={"LEARN MORE ABOUT US"} />
      </div>
    </section>
  );
};

export default HeroSection;
