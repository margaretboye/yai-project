import React from "react";
import NavBar from "../../../components/NavBar";
import { MdArrowOutward } from "react-icons/md";
import "../../../App.css";

const HeroSection = () => {
  return (
    <section className="hero-image" id="home">
      <div className="px-8 hero-overlay">
        <NavBar />

        <div className="">
          <div className="pt-14 pb-20">
            <h5 className=" text-white tracking-wider  border border-white rounded-full sm:font-medium max-w-max mb-7 px-5 sm:pt-[3px] pb-[1px] text-xs">
              BELIEVE IN QUALITY !
            </h5>
            <h1 className="text-3xl sm:text-7xl sm:font-bold sm:leading-[100px] text-white ">
              <span className=" text-3xl sm:text-[40px]">Margi Papabi</span>
              <br />
              Agro Products
            </h1>
            <p className="text-white/85 sm:text-white sm:border-t sm:border-white max-w-fit pt-5 mb-6 ">
              We all need a little space to grow. Give yourself the space you
              need to find your inner you.
            </p>
            <div className=" flex gap-3 w-36 sm:w-64 items-center justify-center py-3  bg-white rounded-[30px]">
              <a className="text-neutral-900" href="">
                Contact Us
              </a>
              <MdArrowOutward size={22} color="#171717" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
