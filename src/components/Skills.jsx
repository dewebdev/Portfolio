import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import REACT from "../assets/react.png";
import GITHUB from "../assets/github.png";
import FIGMA from "../assets/figma.png";
import Skillcard from "./Skillcard";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className=" max-w-[1000px] flex flex-col justify-center mx-auto p-4 items-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          {/*eslint-disable-next-line react/jsx-no-comment-textnodes*/}
          <p className="py-4">
            // These are the Technologies I've worked with.
          </p>
        </div>
        <div className="w-full grid sm:grid-cols-6 grid-cols-2 gap-8 py-4 text-center">
          <Skillcard image={HTML} text="HTML" />
          <Skillcard image={CSS} text="CSS" />
          <Skillcard image={JS} text="JavaScript" />
          <Skillcard image={REACT} text="React" />
          <Skillcard image={GITHUB} text="GitHub" />
          <Skillcard image={FIGMA} text="Figma" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
