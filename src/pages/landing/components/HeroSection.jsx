import React from "react";
import HeroImage from "../../../assets/images/hero-image.jpg";
import NavBar from "../../../components/NavBar";
import { Link } from "react-router-dom";

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
        <h1 className="text-[120px] font-bold leading-[120px] text-white">
          We are Amira!
        </h1>
        <Link className="text-white bg-[#4169E1] w-1/3 text-center">
          LEARN MORE ABOUT US
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
