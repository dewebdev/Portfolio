import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import REACT from "../assets/react.png";
import GITHUB from "../assets/github.png";
import FIGMA from "../assets/figma.png";

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
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={HTML} alt="HTML_ICON" className=" mx-auto w-20"></img>
            <p className="py-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={CSS} alt="CSS_ICON" className=" mx-auto w-20"></img>
            <p className="py-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={JS} alt="JAVASCRIPT_ICON" className=" mx-auto w-20"></img>
            <p className="py-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={REACT} alt="REACT_ICON" className=" mx-auto w-20"></img>
            <p className="py-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={GITHUB} alt="GITHUB_ICON" className=" mx-auto w-20"></img>
            <p className="py-4">Github</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={FIGMA}
              alt="FIGMA_ICON"
              className=" pt-2 mx-auto w-12"
            ></img>
            <p className="py-4">Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
