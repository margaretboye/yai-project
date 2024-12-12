import React from "react";
import LeafIcon from "../assets/svg/leaves.svg";

const FertilizerCards = ({ icon, title, description }) => {
  return (
    <div className="flex">
      <div className="mr-7 p-4 grid place-content-center rounded-[50%] bg-[#eddd5e] w-[90px] h-[90px]">
        <span>{icon}</span>
      </div>

      <div>
        <h2 className="mb-3 text-[26px]">{title}</h2>
        <div className="text-[#666666] text-base font-normal">
          {description}
        </div>
      </div>
    </div>
  );
};

export default FertilizerCards;
