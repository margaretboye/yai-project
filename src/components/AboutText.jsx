import React from "react";
import "../App.css";
import FenceSVG from "../assets/svg/fence.svg";
import MowerSVG from "../assets/svg/lawn-mower.svg";
import LeafSVG from "../assets/svg/leaves.svg";
import AboutCard from "./AboutCard";

const AboutText = () => {
  return (
    <div className="pt-16 pl-[50px] pb-[60px]">
      <div className="mb-12">
        <div className="flex flex-row bg-white max-w-max rounded-full py-1 pl-4 pr-4 mb-2">
          <img src={LeafSVG} alt="" className="w-[25px] " />
          <h5 className="icon home-icon">Who We Are</h5>
        </div>

        <h1 className="text-[55px] leading-[60px]">
          We produce and sell organic fertilizer
        </h1>

        <p className="mt-6 mb-4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even.
        </p>
      </div>

      <div className="flex flex-row">
        <AboutCard
          heading={"Longer lasting produce"}
          paragraph={
            "There are many variations of pass ages of lorem ipsum available majority have suffered."
          }
          image={FenceSVG}
          alt={"fence icon"}
        />

        <div>
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
