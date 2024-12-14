import React from "react";
import Asterik from "../assets/svg/asterik.svg";
import Plus from "../assets/svg/plus.svg";

const AboutStats = () => {
  return (
      // #F8F7F0
    <div className="bg-[#f8f7f0] grid place-content-center w-[220px] sm:w-[313px] h-[125px] sm:h-[222px] absolute bottom-0 right-0 rounded-tl-[30px]">
      <div className="  sm:pt-8 sm:pl-8">
        <div className="bg-[#EDDD5E] grid place-content-center px-5 p-3 sm:p-10 rounded-[30px] ">
          <div className=" relative sm:border-b sm:border-b-white/20">
            <div className="flex items-center gap-3 justify-items-center">
              <p className={"text-6xl font-bold text-green-950"}>*</p>
              <p className={"text-5xl font-semibold sm:text-7xl"}>435</p>
              <img src={Plus} alt="plus symbol " className="inline w-[18px]" />
            </div>
          </div>
          <p className={"w-full"}>Growth Tons'of Harvest</p>
        </div>
      </div>
    </div>
  );
};

export default AboutStats;

{/*<img*/}
{/*  src={Asterik}*/}
{/*  alt="asterik symbol"*/}
{/*  className="inline w-[18px] absolute"*/}
{/*/>*/}