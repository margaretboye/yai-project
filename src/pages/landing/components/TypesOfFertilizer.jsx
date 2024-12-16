import React from "react";
import SectionHeading from "../../../components/SectionHeading";
import MaizeCob from "../../../assets/images/maize.webp";
import K from "../../../constants";
import FertilizerCards from "../../../components/FertilizerCards";

const TypesOfFertilizer = () => {
  return (
    <section className="bg-[#F8F7F0] py-24" id="services">
      <div className="px-7">
        <div className="flex flex-col items-center">
          <SectionHeading heading={"Grow Naturally"} />
          <h2 className="text-3xl sm:text-[55px] sm:leading-10 text-center text-heading-color">
            Choose what's perfect <br /> for your field
          </h2>
        </div>

        <div className="flex flex-col sm:flex sm:flex-row items-center justify-between ">
          <div className="flex items-center justify-center  flex-1 ">
            <div>
              {K.FERTILIZERS.slice(0, 2).map((fertilizer, index) => (
                <div key={index} className="mt-12 py-0 w-[100%] ">
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

          <div className="px-3 mt-10 flex-1 ">
            <div className="text-center ">
              <img
                src={MaizeCob}
                alt="Maize Cob"
                className="max-w-full height-auto"
              />
            </div>
          </div>

          <div className=" flex items-center justify-center  flex-1 ">
            <div>
              {K.FERTILIZERS.slice(2, 4).map((fertilizer, index) => (
                <div key={index} className="mt-12 py-0 w-[100%] ">
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
