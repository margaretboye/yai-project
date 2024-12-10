import React from "react";
import LeafIcon from "../assets/svg/leaves.svg";

const FertilizerCards = () => {
  return (
    <div className="flex">
      <div className="mr-7 p-4 grid place-content-center rounded-[50%] bg-[#eddd5e] w-[90px] h-[90px]">
        <img src={LeafIcon} alt="" width={45} />
      </div>

      <div>
        <h2 className="mb-3 text-[26px]">Agriculture Products</h2>
        <div className="text-[#666666] text-base font-normal">
          Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.
        </div>
      </div>
    </div>
  );
};

export default FertilizerCards;
