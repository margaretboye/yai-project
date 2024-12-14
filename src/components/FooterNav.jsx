import React from "react";
import DotSVG from "../assets/svg/dot.svg";
import { AiOutlinePhone, AiOutlineMail} from "react-icons/ai"

const FooterNav = () => {
  return (
    <nav className="pt-20  sm:pt-28">
      <div className="flex items-center sm:h-auto justify-between bg-[#EDDD5E] py-9">
        <div className="flex flex-col gap-3  ml-8   sm:flex sm:flex-row  sm:px-3">
          <h5 className="font-normal text-[16px] sm:text-[13px] sm:flex sm:justify-center sm:items-center sm:pl-5">
            FARMERS
          </h5>
          <h5 className="font-normal text-[16px] sm:text-[13px] sm:flex sm:justify-center sm:items-center sm:pl-5">
            <img src={DotSVG} alt="" className="sm:inline mr-5 hidden " />
            ORGANIC
          </h5>
          <h5 className="font-normal text-[16px] sm:text-[13px] sm:flex sm:justify-center sm:items-center sm:pl-5">
            <img src={DotSVG} alt="" className="sm:inline mr-5 hidden"  />
            FOOD
          </h5>
          <h5 className="font-normal text-[16px] sm:text-[13px] sm:flex sm:justify-center sm:items-center sm:pl-5">
            <img src={DotSVG} alt="" className="sm:inline mr-5 hidden" />
            PRODUCTS
          </h5>
        </div>
        <div className={"flex flex-col justify-center gap-5"}>
          <div className={"flex items-center gap-3 sm:hidden"}>
            <AiOutlinePhone size={20}/>

            <p>+233 55 803 4430</p>
          </div>
          <div className={"flex items-center gap-3 sm:hidden"}>
            <AiOutlineMail size={20}/>
            <p>test12@gmail.com</p>
          </div>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default FooterNav;
