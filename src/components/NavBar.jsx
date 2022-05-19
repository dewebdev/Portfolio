import React, { useState } from "react";
import { Linkedln, Instagram, Github, Email } from "./social_links";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { BsFillPersonFill } from "react-icons/bs";
import NavLogo2 from "../assets/web.png"

const NavBar = () => {
  const [Toggle, setToggle] = useState(false);

  function handleToggleClick() {
    setToggle(!Toggle);
  }

  return (
    <div className="fixed w-full h-[80px] bg-[#0a192f] flex  items-center justify-between text-gray-300">
      <div>
        <img src={NavLogo2} alt="logo" style={{ width: "125px",height:"135px"}} />
      </div>

      {/* Start: Navigation Menu Links */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* End: Navigation Menu Links */}

      <div onClick={handleToggleClick} className="md:hidden px-3 z-10 text-3xl">
        {Toggle ? <FaTimes /> : <FaBars />}
      </div>

      {/* Start: Mobile Navigation Menu Links */}
      <ul
        className={
          Toggle
            ? "bg-[#0a192f] top-0 left-0 absolute w-full h-screen flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl">
          <li>
            <Link
              onClick={handleToggleClick}
              to="home"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
        </li>
        <li className="py-6 text-4xl">
          <li>
            <Link
              onClick={handleToggleClick}
              to="about"
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
        </li>
        <li className="py-6 text-4xl">
          <li>
            <Link
              onClick={handleToggleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
        </li>
        <li className="py-6 text-4xl">
          <li>
            <Link
              onClick={handleToggleClick}
              to="work"
              smooth={true}
              duration={500}
            >
              Work
            </Link>
          </li>
        </li>
        <li className="py-6 text-4xl">
          <li>
            <Link
              onClick={handleToggleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </li>
      </ul>
      {/* End: Mobile Navigation Menu Links */}

      {/* Start: Social Icons */}
      <ul className="hidden lg:flex fixed flex-col top-[35%] left-0 text-gray-300">
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0e76a8]">
          <span>Linkedin</span>
          <Linkedln />
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
          <span>Github</span>
          <Github />
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#E1306C]">
          <span>Instagram</span>
          <Instagram />
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
          <span>Resume</span>
          <BsFillPersonFill size={30} />
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2BAE66FF]">
          <span>Email</span>
          <Email />
        </li>
      </ul>

      {/* End: Socail Icons */}
    </div>
  );
};

export default NavBar;
