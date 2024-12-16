import React from "react";
import Logo from "../assets/logo/logo1.svg";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <footer>
      <FooterNav />
      <div>
        <div className="pt-16 sm:pt-24">
          <div className="px-8 max-w-[1424px] mx-auto">
            <div className="grid sm:grid-cols-3 gap-8 items-center justify-center">
              <div>
                <img src={Logo} alt="logo" className="max-h-14" />
              </div>

              <div className="sm:col-span-2">
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

      <div className="py-6">
        <div className="px-8 max-w-[1424px] mx-auto">
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="sm:col-span-1">
              <aside className="pt-11 pb-10">
                <p className="text-md sm:text-base leading-6">
                  Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan
                  risus. In vitae sapien viverra est Duo ei ullum inani
                  senserit.
                </p>
              </aside>
            </div>

            <div>
              <div className="pt-8 sm:pt-11 pb-11">
                <h5 className="text-xl">Working Time</h5>
                <ul>
                  <li>Mon - Fri: 9.00am - 5.00pm</li>
                  <li>Saturday: 10.00am - 6.00pm</li>
                  <li>Sunday Closed</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="pt-8 sm:pt-11 pb-11">
                <h5 className="text-xl">Our Address</h5>
                <address>
                  Anibreko, near Ghana <br />
                  Holy Healing Church - Drobonso
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="mx-auto w-[80%] mb-4" />
      <div className="mb-4">
        <p className="text-center">
          Copyright &copy; 2024 Agrimo. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
