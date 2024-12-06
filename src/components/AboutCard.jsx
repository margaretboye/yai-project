import React from "react";

const AboutCard = ({ image, alt, heading, paragraph }) => {
  return (
    <div className="px-3">
      <div className="mb-5">
        <img src={image} alt={alt} className="w-16 " />
      </div>
      <h5 className="text-2xl">{heading}</h5>
      <p>{paragraph}</p>
    </div>
  );
};

export default AboutCard;
