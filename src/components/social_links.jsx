import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";

const Linkedln = () => {
  return (
    <a
      href="https://www.linkedin.com/in/dhanush-kumar-shetty-9b18a319a/"
      target={"_blank"}
      rel="noreferrer"
    >
      <FaLinkedin size={30} />
    </a>
  );
};

const Instagram = () => {
  return (
    <a
      href="https://www.instagram.com/dewebdev/"
      target={"_blank"}
      rel="noreferrer"
    >
      <FaInstagram size={30} />
    </a>
  );
};

const Github = () => {
  return (
    <a href="https://github.com/God3ly" target={"_blank"} rel="noreferrer">
      <FaGithub size={30} />
    </a>
  );
};

const Resume = (props) => {
  return (
    <a
      href="https://drive.google.com/file/d/1ie2UDrW10UxEIj7ryx0d1oYsgY3O_CB_/view?usp=sharing"
      target={"_blank"}
      rel="noreferrer"
      className="flex justify-center items-center"
    >
      {props.name}
    </a>
  );
};

const Email = () => {
  return (
    <a
      href="mailto:dhanushshetty201@gmail.com"
      target={"_blank"}
      rel="noreferrer"
    >
      <HiOutlineMail size={30} />
    </a>
  );
};

export { Linkedln, Instagram, Github, Resume, Email };
