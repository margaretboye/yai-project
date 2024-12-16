import React from "react";
import Logo from "../assets/logo/logo1.svg";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <footer>
      <FooterNav />
      <div>
        <div className="pt-16 sm:pt-24">
          <div className="px-8 max-w-[1424px]">
            <div className="sm:flex items-center">
              <div className="sm:w-1/3">
                <img src={Logo} alt="logo" className="max-h-14" />
              </div>
              <div className="sm:pl-20 pt-8 sm:pt-0 self-end">
                <h3 className="text-xl sm:text-3xl sm:leading-[42px]">
                  Professional & modern, a theme designed to help{" "}
                  <br className={"hidden sm:block"} />
                  your business stand out from the rest.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-6">
        <div className="px-7 max-w-[1424px]">
          <div className="flex flex-col sm:flex sm:flex-row">
            <div className="sm:w-1/3 sm:px-3">
              <aside className="pt-5 pb-10">
                <p className="pr-7  text-md sm:text-base leading-6 basis-7">
                  Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan
                  risus. In vitae sapien viverra est Duo ei ullum inani
                  senserit.s
                </p>
              </aside>
            </div>
            <hr className={"w-[95%] mx-auto sm:hidden"} />

            <div className="sm:basis-1/5 sm:max-w-[20%] sm:px-3">
              <div className="pt-8 sm:pt-11">
                <h5 className={"text-xl"}>Working Time</h5>
                <ul>
                  <li> Mon - Fri: 9.00am - 5.00pm</li>
                  <li> Saturday: 10.00am - 6.00pm </li>
                  <li>Sunday Closed</li>
                </ul>
              </div>
            </div>

            <div className="sm:basis-1/5 sm:max-w-[20%] sm:px-3">
              <div className="pt-8 pb-11 sm:pt-11">
                <h5 className={"text-xl"}>Our address</h5>
                <ul>
                  <li>Anibreko, near Ghana </li>
                  <li>Holy Healing Church - Drobonso</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className={" mx-auto w-[80%] mb-4"} />
      <div className={"mb-4"}>
        <p className={"text-center"}>
          Copyright &copy; 2024 Agrimo. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
