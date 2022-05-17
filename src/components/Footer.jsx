import React from "react";
import { Linkedln, Instagram, Github, Resume, Email } from "./social_links";

const Footer = () => {
  return (
    <div name="footer" className="w-full h-full text-center bg-[#0a192f]">
      {/* Start: Social Icons */}
      <ul className="sm:hidden flex justify-center items-center text-gray-300">
        <li className="w-[160px] h-[60px] flex justify-between items-center hover:bg-[#0e76a8]">
          <Linkedln />
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center  hover:bg-[#333333]">
          <Github />
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center  hover:bg-[#E1306C]">
          <Instagram />
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center  hover:bg-[#565f69]">
          <Resume name="Resume" />
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center hover:bg-[#2BAE66FF]">
          <Email />
        </li>
      </ul>

      {/* End: Socail Icons */}
      <p className="text-gray-500 p-5 ">
        copyright@2022 deWebDev All rights reserved
      </p>
    </div>
  );
};

export default Footer;
