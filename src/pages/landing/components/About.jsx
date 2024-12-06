import React from "react";
import AboutText from "../../../components/AboutText";
import AboutImage from "../../../assets/images/about-image.jpg";
import "../../../App.css";
import AboutStats from "../../../components/AboutStats";

const About = () => {
  return (
    <section className="px-8 flex flex-wrap flex-row pt-28 bg-[#F8F7F0]">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center relative ">
        <img
          src={AboutImage}
          alt="About us"
          className="max-w-full h-auto rounded-[30px] "
        />
        <AboutStats />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <AboutText />
      </div>
    </section>
  );
};

export default About;
