import React from "react";
import LiquidFertilizer from "../assets/images/liquid-fertilizer.jpg";

const FertilizerTypes = () => {
  return (
    <div>
      <div className="">
        <div className="px-8 bg-[#FFFFFF] py-10 rounded-[30px] flex flex-col items-center">
          <div>
            <img
              src={LiquidFertilizer}
              alt=""
              className="rounded-[30px]"
              loading="lazy"
            />
          </div>
          <div>
            <h3>Professional Farmers</h3>
            <p>
              Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FertilizerTypes;
