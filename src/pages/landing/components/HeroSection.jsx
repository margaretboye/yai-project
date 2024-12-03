import React from "react";
import HeroImage from "../../../assets/images/hero-image1.jpg";
import NavBar from "../../../components/NavBar";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import "../../../App.css";

const HeroSection = () => {
  return (
    <section className="hero-image">
      <div className="px-8 hero-overlay">
        <NavBar />

        <div className="">
          <div className="pt-14 pb-20">
            <h5 className="text-white border border-white rounded-full font-medium max-w-max mb-6 px-5 pt-[3px] pb-[1px] text-xs">
              BELIEVE IN QUALITY
            </h5>
            <h1 className="text-7xl font-bold leading-[100px] text-white ">
              <span className="text-[40px]">Organic fertilizers</span> <br />
              for healthy crops
            </h1>
            <p className="text-white border-t border-white max-w-fit pt-5 mb-6 ">
              We all need a little space to grow. Give yourself the space you
              need to find your inner you.
            </p>
            <div className="">
              <a
                href=""
                className="text-black bg-white px-9 py-4 rounded-[30px]"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
