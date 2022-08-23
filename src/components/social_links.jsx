import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";

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
    <a href="https://github.com/dewebdev" target={"_blank"} rel="noreferrer">
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

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/message/SCCSN7JO2L6CO1"
      target={"_blank"}
      rel="noreferrer"
    >
      <AiOutlineWhatsApp size={30} />
    </a>
  );
};

export { Linkedln, Instagram, Github, Resume, Whatsapp };
