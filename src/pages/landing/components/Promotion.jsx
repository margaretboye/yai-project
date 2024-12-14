import React from "react";
import { PiPottedPlantLight } from "react-icons/pi";
import "../../../App.css";

const Promotion = () => {
  return (
    <section>
      <div className="px-7 promo-overlay">
        <div className="promo-bg px-10 py-20">
          <div className="sm:flex sm:flex-row flex flex-col items-center justify-center ">
            <div className="p-6 bg-[#EDDD5E] rounded-[50%] mb-5 sm:mb-0 sm:mr-8">
              <PiPottedPlantLight fill="#47513E" size={50} />
            </div>
            <div>
              <h2 className=" text-center sm:text-left text-3xl sm:text-5xl text-white">
                Our goal is to produce globally
                <br /> accessible organic fertilizers
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
