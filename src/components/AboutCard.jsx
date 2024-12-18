import React, { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"


const AboutCard = ({ image, alt, heading, paragraph }) => {
  
    useEffect(()=>{
      AOS.init({
        duration:1000,
        easing:"ease-in-out",
        once:false,
        mirror:true
      })
    },[])
  return (
    <div data-aos="fade-in" data-aos-delay="50" className="px-3 py-8">
      <div className="mb-5 grid place-content-center sm:grid sm:place-content-start">
        <img src={image} alt={alt} className="w-16 " loading="lazy" />
      </div>

      <h5 className=" text-2xl sm:text-2xl text-center sm:text-left mb-3">
        {heading}
      </h5>

      <p
        className={"text-center sm:text-left text-[#666666] sm:leading-[23px]"}
      >
        {paragraph}
      </p>
    </div>
  );
};

export default AboutCard;
