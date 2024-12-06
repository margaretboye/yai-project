import React from "react";
import DotSVG from "../assets/svg/dot.svg";

const FooterNav = () => {
  return (
    <nav className="pt-28">
      <div className="flex justify-between bg-[#EDDD5E] py-9">
        <div className="flex px-3">
          <h5 className="text-[13px] flex justify-center items-center">
            FARMERS
          </h5>
          <h5 className="text-[13px]">
            <img src={DotSVG} alt="" className="inline" />
            ORGANIC
          </h5>
          <h5 className="text-[13px]">
            <img src={DotSVG} alt="" className="inline" />
            FOOD
          </h5>
          <h5 className="text-[13px]">
            <img src={DotSVG} alt="" className="inline" />
            PRODUCTS
          </h5>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default FooterNav;
