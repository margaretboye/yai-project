import React from "react";
import DotSVG from "../assets/svg/dot.svg";

const FooterNav = () => {
  return (
    <nav className="pt-28">
      <div className="flex justify-between bg-[#EDDD5E] py-9">
        <div className="flex px-3">
          <h5 className="text-[13px] flex justify-center items-center pl-5">
            FARMERS
          </h5>
          <h5 className="text-[13px] flex justify-center items-center pl-5">
            <img src={DotSVG} alt="" className="inline mr-5 " />
            ORGANIC
          </h5>
          <h5 className="text-[13px] flex justify-center items-center pl-5">
            <img src={DotSVG} alt="" className="inline mr-5" />
            FOOD
          </h5>
          <h5 className="text-[13px] flex justify-center items-center pl-5">
            <img src={DotSVG} alt="" className="inline mr-5" />
            PRODUCTS
          </h5>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default FooterNav;
