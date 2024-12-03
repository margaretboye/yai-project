import React from "react";
import Logo from "../assets/logo/agric-logo.svg";
import K from "../constants";

const NavBar = () => {
  return (
    <div>
      <header className="flex justify-between items-center px-4">
        <img src={Logo} alt="logo" className="max-w-full max-h-11" />
        <nav>
          <ul className="flex items-start gap-x-2">
            {K.NAVLINKS.map((item, index) => {
              return (
                <li className=" py-11 text-white">
                  <a className="px-3" href="">
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
