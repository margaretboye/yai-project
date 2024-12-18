import React, { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"


const FertilizerCards = ({ icon, title, description }) => {
  
    useEffect(()=>{
      AOS.init({
        duration:1000,
        easing:"ease-in-out",
        once:false,
        mirror:true
      })
    },[])
  return (
    <div className=" bg-white rounded-xl py-6 sm:bg-transparent  sm:shadow-none sm:border-0 flex flex-col sm:flex sm:flex-row  ">
      <div data-aos ="fade-in" data-aos-delay="30" className={"  grid place-content-center mt-3 "}>
        <div className=" mb-3 sm:mr-3 sm:mb-0 p-4 grid place-content-center rounded-[50%] bg-[#eddd5e] w-[90px] h-[90px]">
          <span>{icon}</span>
        </div>
      </div>

      <div>
        <h2 data-aos ="fade-in" data-aos-delay="130" className="mb-3 sm:mb-[6px] text-[26px] text-center sm:text-left">
          {title}
        </h2>
        <div data-aos ="fade-in" data-aos-delay="230" className="text-[#666666] px-9 sm:px-0 pb-3 sm:pb-0 text-base font-normal text-center sm:text-left">
          {description}
        </div>
      </div>
    </div>
  );
};

export default FertilizerCards;
