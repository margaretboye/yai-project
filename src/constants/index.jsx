import { AiOutlineHome, AiOutlineUser, AiOutlineCustomerService,  } from "react-icons/ai";
import { RiCustomerServiceLine } from "react-icons/ri";
import { MdOutlineStarRate } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";


const K = {
  NAVLINKS: [
    {
      name: "HOME",
      icon: <AiOutlineHome size={25}/>
    },
    {
      name: "ABOUT US",
      icon: <AiOutlineUser size={23}/>

    },
    {
      name: "SERVICES",
      icon: <RiCustomerServiceLine size={23}/>

    },
    {
      name: "REVIEWS",
      icon: <MdOutlineStarRate size={23}/>

    },
    {
      name: "CONTACT US",
      icon: <IoCallOutline size={23}/>

    },
  ],
  OVERLAYTEXT: [
    {
      name: "Clean Code & Design",
    },
    {
      name: "Browser Compatibility",
    },
    {
      name: "Responsive Layout",
    },
    {
      name: "Easy Customization",
    },
    {
      name: "Powerful Documentation",
    },
    {
      name: "& Much More ...",
    },
  ],
};

export default K;
