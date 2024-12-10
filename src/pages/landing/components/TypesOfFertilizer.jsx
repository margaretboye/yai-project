import React from "react";
import SectionHeading from "../../../components/SectionHeading";
import FertilizerCards from "../../../components/FertilizerCards";
import MaizeCob from "../../../assets/images/maize.webp";

const TypesOfFertilizer = () => {
  return (
    <section className="bg-[#F8F7F0] py-24">
      <div className="px-7">
        <div className="flex flex-col items-center">
          <SectionHeading heading={"Grow Naturally"} />
          <h2 className="text-[55px] text-center text-heading-color">
            Choose what's perfect <br /> for your field
          </h2>
        </div>

        <div className="flex items-center">
          <div className=" px-3">
            <div className="pr-12">
              <FertilizerCards />
              <div className="mt-12">
                <FertilizerCards />
              </div>
            </div>
          </div>

          <div className="px-3 ">
            <div className="text-center">
              <img src={MaizeCob} alt="" className="max-w-full height-auto" />
            </div>
          </div>

          <div>
            <FertilizerCards />
            <div className="mt-12">
              <FertilizerCards />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypesOfFertilizer;
