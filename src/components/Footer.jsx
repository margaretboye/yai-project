import React from "react";
import Logo from "../assets/logo/logo1.svg";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <footer>
      <FooterNav />
      <div>
        <div className="pt-24">
          <div className="px-8 max-w-[1424px]">
            <div className="flex items-center">
              <div className="w-1/3">
                <img src={Logo} alt="logo" className="max-h-14" />
              </div>
              <div className="pl-20 self-end">
                <h3 className="text-3xl leading-[42px]">
                  Professional & modern, a theme designed to help <br />
                  your business stand out from the rest.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
