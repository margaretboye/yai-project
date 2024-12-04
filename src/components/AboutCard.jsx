import React from "react";

const AboutCard = ({ image, alt, heading, paragraph }) => {
  return (
    <div>
      <div>
        <img src={image} alt={alt} className="w-16" />
        <h5 className="text-2xl">{heading}</h5>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default AboutCard;
