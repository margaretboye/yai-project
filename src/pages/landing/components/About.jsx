import React from "react";
import AboutText from "../../../components/AboutText";
import AboutImage from "../../../assets/images/about-image.jpg";

const About = () => {
  return (
    <section className="px-8 flex pt-28">
      <div>
        <img src={AboutImage} alt="" />
      </div>
      <div>
        <AboutText />
      </div>
    </section>
  );
};

export default About;
