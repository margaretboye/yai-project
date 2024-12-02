import React from "react";
import { Link } from "react-router-dom";

const Button = ({ label }) => {
  return (
    <Link className="bg-primary-color text-white text-sm font-normal rounded-[40px] py-3 px-8 mt-2">
      {label}
    </Link>
  );
};

export default Button;
