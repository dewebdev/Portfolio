import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";

const Home = () => {
  const [viewWork, setViewWork] = useState(false);
  function handleViewWork() {
    setViewWork(!viewWork);
  }
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full text-white">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl lg:text-7xl font-bold text-[#ccd6f6]">
          Dhanush Kumar Shetty
        </h1>
        <h2 className="text-4xl lg:text-7xl font-bold text-[#8892b0]">
          I'm a Front End Developer.
        </h2>
        <p className="py-4 text-[#8892b0] max-w-[700px]">
          I'm a Front End Developer specialized in building(and occasionally
          designing) expectional digital experiences.Currently I'm focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button
            className="group flex items-center border-2 px-3 py-3 hover:bg-pink-600 hover:border-pink-600"
            onClick={handleViewWork}
          >
            View Work
            <HiArrowNarrowRight className="ml-3 group-hover:rotate-90 duration-300" />
          </button>
        </div>
        {/* Social Icons */}
        {viewWork && (
          <ul className="lg:hidden flex mt-5 left-0 text-gray-300s">
            <li className="h-[60px] flex justify-between items-center bg-[#0e76a8]">
              <a
                href="https://www.linkedin.com/in/dhanush-kumar-shetty-9b18a319a/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className="h-[60px] flex justify-between items-center bg-[#333333]">
              <a
                href="https://github.com/God3ly"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaGithub size={30} />
              </a>
            </li>
            <li className="h-[60px] flex justify-between items-center bg-[#E1306C]">
              <a
                href="https://www.instagram.com/dewebdev/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaInstagram size={30} />
              </a>
            </li>
            <li className="h-[60px] flex justify-between items-center  bg-[#565f69]">
              <a
                href="https://drive.google.com/file/d/1ie2UDrW10UxEIj7ryx0d1oYsgY3O_CB_/view?usp=sharing"
                target={"_blank"}
                rel="noreferrer"
              >
                <BsFillPersonFill size={30} />
              </a>
            </li>
            <li className="h-[60px] flex justify-between items-center  bg-[#2BAE66FF]">
              <a
                href="mailto:dhanushshetty201@gmail.com"
                target={"_blank"}
                rel="noreferrer"
              >
                <HiOutlineMail size={30} />
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
