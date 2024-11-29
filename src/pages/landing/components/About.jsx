import React from "react";
import AboutUs from "../../../assets/images/about-image.jpg";
const About = () => {
  return (
    <section>
      <header>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl mt-6 mb-6">
            <span className="text-primary-color ">ABOUT</span> US
          </h1>
          <p>WHO WE ARE</p>
        </div>

        <div className="relative text-center">
          <span className="w-1/4 inline-block align-middle border-b-[1px] border-b-[#ddd]"></span>
          <span className="mx-5">man</span>
          <span className="w-1/4 inline-block align-middle border-b-[1px] border-b-[#ddd]"></span>
        </div>
      </header>

      <main>
        <div>
          <h1>
            WE ARE <span className="font-bold">AMIRA</span>
          </h1>
          <span className="w-1/4 inline-block border-b-[1px] border-b-[#ddd]"></span>
          <p>
            We are a leading company sit amet, consectetur adipisicing elit.
            Minus obcaecati pariatur officiis molestias eveniet harum laudantium
            obcaecati pariatur officiis molestias eveniet harum laudantium sed
            optio iste.
          </p>
          <h2 className="border-r-[1px] border-r-[#ddd] inline-block">
            OUR MISSION
          </h2>
          <h2 className="border-r-[1px] border-r-[#ddd] inline-block">
            OUR VISION
          </h2>
          <h2 className="border-r-[1px] border-r-[#ddd] inline-block">
            OUR VALUES
          </h2>
        </div>

        <div>
          <img src={AboutUs} alt="" />
        </div>
      </main>
    </section>
  );
};

export default About;
