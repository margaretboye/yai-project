import React from "react";
import FertilizerTypes from "../../../components/FertilizerTypes";
import SectionHeading from "../../../components/SectionHeading";
import "../../../App.css";

const FertlizerSec = () => {
  return (
    <section className="bg-[#5B8C51] py-28 services-bg">
      <div className="px-7">
        <div className="mb-4">
          <SectionHeading heading={"Our Services"} />
          <h2 className="text-[55px] text-white mb-2">
            Best Organic fertilizers
          </h2>
        </div>

        <div className=" flex gap-x-3">
          <FertilizerTypes />
          <FertilizerTypes />
          <FertilizerTypes />
        </div>
      </div>
    </section>
  );
};

export default FertlizerSec;
