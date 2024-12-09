import React from "react";
import LeafSVG from "../assets/svg/leaves.svg";
import "../App.css";

const SectionHeading = ({ heading }) => {
  return (
    <div>
      <div className="flex flex-row bg-white max-w-max rounded-full py-1 pl-4 pr-4 mb-2">
        <img src={LeafSVG} alt="" className="w-[25px] " />
        <h5 className="icon home-icon">{heading}</h5>
      </div>
    </div>
  );
};

export default SectionHeading;
