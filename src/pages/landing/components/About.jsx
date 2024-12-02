import React from "react";
// import AboutUs from "../../../assets/images/about-image.jpg";
import Button from "../../../components/Button";
import AboutOverlay from "../../../components/AboutOverlay";
const About = () => {
  return (
    <section className=" px-4 pt-[90px] w-[1140px] mx-auto">
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

      <main className="flex justify-between mt-10">
        <div className="px-4">
          <h1>
            WE ARE <span className="font-bold">AMIRA</span>
          </h1>
          <hr className="border-b-[1px] border-b-[#ddd] mt-6 mb-5" />
          <p className="text-[#666] text-sm leading-relaxed font-normal mb-4">
            We are a leading company sit amet, consectetur adipisicing elit.
            Minus obcaecati pariatur officiis molestias eveniet harum laudantium
            obcaecati pariatur officiis molestias eveniet harum laudantium sed
            optio iste.
          </p>
          <ul>
            <li className="border-r-[1px] border-r-[#ddd] inline-block ">
              <a href="" className="leading-3 pr-7 text-primary-color">
                OUR MISSION
              </a>
            </li>
            <li className="border-r-[1px] border-r-[#ddd] inline-block mt-4 mb-6">
              <a href="" className="leading-3 px-7  text-[#777]">
                OUR ADVANTAGES
              </a>
            </li>
            <li className=" inline-block">
              <a href="" className="leading-3 px-7 text-[#777]">
                OUR GUARANTEES
              </a>
            </li>
          </ul>
          <p className="text-[#666] text-sm leading-relaxed font-normal pb-7">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in
          </p>
          <div>
            <Button label={"LEARN MORE ABOUT US"} />
          </div>
        </div>

        <div className="px-4 relative ">
          <div className="">
            {/* <img src={AboutUs} alt="" className="" /> */}
          </div>
          <AboutOverlay />
        </div>
      </main>
    </section>
  );
};

export default About;
