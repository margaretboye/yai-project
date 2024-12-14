import React from "react";
import "../App.css";
import FenceSVG from "../assets/svg/fence.svg";
import MowerSVG from "../assets/svg/lawn-mower.svg";
import LeafSVG from "../assets/svg/leaves.svg";
import AboutCard from "./AboutCard";

const AboutText = () => {
  return (
    <div className="pt-8 sm:pt-16 sm:pl-[50px] sm:pb-[60px]">
      <div className="mb-14 sm:mb-12">
        <div className="flex flex-row bg-white max-w-max rounded-full py-1 pl-4 pr-4 mb-5 sm:mb-2">
          <img src={LeafSVG} alt="" className="w-[25px] " />
          <h5 className="icon home-icon">Who We Are</h5>
        </div>

        <h1 className="text-4xl text-center text-heading-color sm:text-left font-normal sm:font-normal w-full sm:text-[55px] sm:leading-[60px]">
          We produce and sell organic fertilizer
        </h1>

        <p className="text-left text-[18px] sm:text-left mt-3 sm:mt-6 mb-3">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even.
        </p>
      </div>

      <div className="flex flex-col gap-10 sm:flex sm:flex-row">
        <div className="sm:pr-6  p-6 bg-white rounded-xl ">
          <AboutCard
            heading={"Longer lasting produce"}
            paragraph={
              "There are many variations of pass ages of lorem ipsum available majority have suffered."
            }
            image={FenceSVG}
            alt={"fence icon"}
          />
        </div>

        <div className="sm:pl-6  p-6 bg-white rounded-xl">
          <AboutCard
            heading={" Organic Fertilizers"}
            paragraph={
              "There are many variations of pass ages of lorem ipsum available majority have suffered."
            }
            image={MowerSVG}
            alt={"fence icon"}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutText;
