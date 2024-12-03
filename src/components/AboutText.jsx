import React from "react";
import "../App.css";
import "font-awesome/css/font-awesome.min.css";
import FenceSVG from "../assets/svg/fence.svg";

const AboutText = () => {
  return (
    <div className="pt-16 pl-[50px] pb-[60px]">
      <h5 className="icon home-icon">Who We Are</h5>
      <h1>Currently we are growing and selling organic food</h1>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even.
      </p>
      <div>
        <img src={FenceSVG} alt="" />
      </div>
    </div>
  );
};

export default AboutText;
