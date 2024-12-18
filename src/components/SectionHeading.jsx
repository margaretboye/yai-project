import React, { useEffect } from "react";
import LeafSVG from "../assets/svg/leaves.svg";
import "../App.css";
import AOS from "aos"
import "aos/dist/aos.css"


const SectionHeading = ({ heading }) => {
  
    useEffect(()=>{
      AOS.init({
        duration:1000,
        easing:"ease-in-out",
        once:false,
      })
    },[])
  return (
    <div data-aos="fade-left" data-aos-delay="200" data-aos-offset="230">
      <div className="-mt-12 flex flex-row bg-white max-w-max rounded-full py-1 pl-4 pr-4 mb-2">
        <img src={LeafSVG} alt="" className="w-[25px] " loading="lazy" />
        <h5 className="icon home-icon">{heading}</h5>
      </div>
    </div>
  );
};

export default SectionHeading;
