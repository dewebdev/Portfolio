import React, { useState } from "react";
import NavLogo from "../assets/logo.png";
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-scroll";

const NavBar = () => {
  const [Toggle, setToggle] = useState(false);

  function handleToggleClick() {
    setToggle(!Toggle);
  }

  return (
    <div className="fixed w-full h-[80px] bg-[#0a192f] flex  items-center justify-between text-gray-300">
      <div>
        <img src={NavLogo} alt="logo" style={{ width: "50px" }} />
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
          <a
            href="https://www.linkedin.com/in/dhanush-kumar-shetty-9b18a319a/"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
          <span>Github</span>
          <a
            href="https://github.com/God3ly"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#E1306C]">
          <span>Instagram</span>
          <a
            href="https://www.instagram.com/dewebdev/"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaInstagram size={30} />z
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
          <span>Resume</span>
          <a
            href="https://drive.google.com/file/d/1ie2UDrW10UxEIj7ryx0d1oYsgY3O_CB_/view?usp=sharing"
            target={"_blank"}
            rel="noreferrer"
          >
            <BsFillPersonFill size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2BAE66FF]">
          <span>Email</span>
          <a
            href="mailto:dhanushshetty201@gmail.com"
            target={"_blank"}
            rel="noreferrer"
          >
            <HiOutlineMail size={30} />
          </a>
        </li>
      </ul>

      {/* End: Socail Icons */}
    </div>
  );
};

export default NavBar;
