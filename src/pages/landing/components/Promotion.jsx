import React from "react";
import { PiPottedPlantLight } from "react-icons/pi";
import "../../../App.css";

const Promotion = () => {
  return (
    <section>
      <div className="px-7 promo-overlay">
        <div className="promo-bg px-10 py-20">
          <div className="flex ">
            <div className="p-6 bg-[#EDDD5E] rounded-[50%] mr-8">
              <PiPottedPlantLight fill="#47513E" size={50} />
            </div>
            <div>
              <h2 className="text-5xl text-white">
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
