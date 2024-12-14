import React from "react";

const AboutCard = ({ image, alt, heading, paragraph }) => {
  return (
    <div className="px-3 py-8">
      <div className="mb-5 grid place-content-center sm:grid sm:place-content-start">
        <img src={image} alt={alt} className="w-16 " />
      </div>
      <h5 className=" text-2xl sm:text-2xl text-center sm:text-left mb-3">{heading}</h5>
      <p className={"text-center sm:text-left text-[#666666] sm:leading-[23px]"}>{paragraph}</p>
    </div>
  );
};

export default AboutCard;
