import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

import Logo from "../assets/logo/agric-logo.svg";
import K from "../constants";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)
  return (
    <div>
      <header className=" flex justify-between items-center px-4 ">
        <img src={Logo} alt="logo" className=" w-28 h-28 sm:max-w-full sm:max-h-11" />
        <nav>
          {/* MOBILE VIEW */}
          {/* HAMBURGER */}
          <div className="text-white sm:hidden" onClick={()=>{setShowMobileNav(!showMobileNav)}}><FiMenu size={25}/></div>
          {/* DARK MODAL */}
            <div onClick={()=>{setShowMobileNav(false)}} className={`${showMobileNav ? "top-0 right-0" : "-right-[100%] -top-0"} py-5 px-8 h-full fixed w-full z-10 bg-black/85 duration-500 sm:hidden`}>
            <IoIosClose color="white" size={50} className=" top-8 right-8 absolute " onClick={()=>{setShowMobileNav(false)}}/>
              {/* MAIN MOBILE LINKS */}
            <div onClick={(e)=>e.stopPropagation()} className= {`${showMobileNav ? "top-24 right-8 delay-100":"-right-full  delay-0"} w-[80%]  flex flex-col   gap-2 p-10 rounded-xl z-100 bg-white absolute  duration-1000 transition-all top-24 right-8`}>
              {
                K.NAVLINKS.map((link,index)=>(
                  <Link key={index} to={"/"} className={`${index == 4 ? "border-none":""} border-b w-full text-center py-5 px-3 font-medium` }>{link.name}</Link>
                ))
              }
            </div>
            </div>
          {/* AFTER MOBILE VIEW */}
          <ul className="hidden sm:flex sm:items-start sm:gap-x-2">
            {K.NAVLINKS.map((item, index) => {
              return (
                <li key={index} className=" py-11 text-white">
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