import React from "react";
import K from "../constants";

const AboutOverlay = () => {
  return (
    <div className="absolute top-0 left-4 px-14">
      <h1 className=" mt-5 mb-2 text-white text-2xl leading-6">
        Why <strong>Choose Us</strong>
      </h1>
      <ul>
        {K.OVERLAYTEXT.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default AboutOverlay;
