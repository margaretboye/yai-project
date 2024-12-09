import React from "react";
import LiquidFertilizer from "../assets/images/liquid-manure.webp";

const FertilizerTypes = () => {
  return (
    <div>
      <div className="">
        <div className="px-8 bg-[#FFFFFF] py-10 rounded-[30px] ">
          <img src={LiquidFertilizer} alt="" />
          <h3>Professional Farmers</h3>
          <p>
            Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FertilizerTypes;
