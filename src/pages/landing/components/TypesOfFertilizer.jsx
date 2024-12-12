import React from "react";
import SectionHeading from "../../../components/SectionHeading";
import MaizeCob from "../../../assets/images/maize.webp";
import K from "../../../constants";
import FertilizerCards from "../../../components/FertilizerCards";

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
          <div className="px-3">
            <div className="pr-12">
              {K.FERTILIZERS.slice(0, 2).map((fertilizer, index) => (
                <div key={index} className="mt-12">
                  <FertilizerCards
                    icon={fertilizer.icon}
                    alt={fertilizer.alt}
                    title={fertilizer.title}
                    description={fertilizer.description}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="px-3 ">
            <div className="text-center">
              <img
                src={MaizeCob}
                alt="Maize Cob"
                className="max-w-full height-auto"
              />
            </div>
          </div>

          <div className="px-3">
            <div className="pr-12">
              {K.FERTILIZERS.slice(2, 4).map((fertilizer, index) => (
                <div key={index} className="mt-12">
                  <FertilizerCards
                    icon={fertilizer.icon}
                    alt={fertilizer.alt}
                    title={fertilizer.title}
                    description={fertilizer.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypesOfFertilizer;
