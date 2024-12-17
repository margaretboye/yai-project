import React from "react";
import DotSVG from "../assets/svg/dot.svg";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import K from "../constants";

const FooterNav = () => {
  return (
    <nav className="pt-20  sm:pt-28">
      <div className="flex flex-col sm:flex-row sm:justify-between bg-[#EDDD5E] py-9 px-8 gap-5">
        <div className="flex justify-start gap-5 flex-wrap sm:justify-center">
          {K.NAVLINKS.map((link, index) => {
            return (
              <div key={index}>
                <h5 className="font-normal text-[16px] sm:text-[13px] flex items-center gap-2">
                  <img
                    src={DotSVG}
                    alt=""
                    className="sm:inline mr-5 hidden"
                    loading="lazy"
                  />
                  <a href={link.id}>{link.name}</a>
                </h5>
              </div>
            );
          })}
        </div>

        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-5"
          id="contact"
        >
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-3">
              <AiOutlinePhone size={20} />
            </div>

            <p>+233 54 175 0015</p>
          </div>
          <div className={"flex items-center gap-3 "}>
            <div className="bg-white rounded-full p-3">
              <AiOutlineMail size={20} />
            </div>

            <p>maggiepapabi24@mail.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default FooterNav;
