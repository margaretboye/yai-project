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

      <div className="pb-6">
        <div className="px-7 max-w-[1424px]">
          <div className="flex flex-row">
            <div className="w-1/3 px-3">
              <aside className="pt-5">
                <p className="pr-7 text-base leading-6 basis-7">
                  Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan
                  risus. In vitae sapien viverra est Duo ei ullum inani
                  senserit.s
                </p>
              </aside>
            </div>

            <div className="basis-1/5 max-w-[20%] px-3">
              <div className="pt-11">
                <h5>Useful Link</h5>
                <ul>
                  <li>Company</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>

            <div className="basis-1/5 max-w-[20%] px-3">
              <div className="pt-11">
                <h5>Working Time</h5>
                <ul>
                  <li> Mon - Fri: 9.00am - 5.00pm</li>
                  <li> Saturday: 10.00am - 6.00pm </li>
                  <li>Sunday Closed</li>
                </ul>
              </div>
            </div>

            <div className="basis-1/5 max-w-[20%] px-3">
              <div className="pt-11">
                <h5>Our address</h5>
                <ul>
                  <li>Old Westbury 256, New York</li>
                  <li>11201, United States</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
