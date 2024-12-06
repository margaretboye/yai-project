import React from "react";
import Asterik from "../assets/svg/asterik.svg";
import Plus from "../assets/svg/plus.svg";

const AboutStats = () => {
  return (
    <div className="bg-white w-[313px] h-[222px] absolute bottom-0 right-0 rounded-tl-[30px]">
      <div className="pt-8 pl-8">
        <div className="bg-[#EDDD5E] pt-6 pb-9 pl-10 pr-11 rounded-[30px] w-inherit">
          <h4 className="text-7xl relative border-b border-b-white/20">
            <img
              src={Asterik}
              alt="asterik symbol"
              className="inline w-[18px] absolute"
            />
            435
            <img src={Plus} alt="plus symbol " className="inline w-[18px]" />
          </h4>
          <p>Growth Tons' of Harvest</p>
        </div>
      </div>
    </div>
  );
};

export default AboutStats;
