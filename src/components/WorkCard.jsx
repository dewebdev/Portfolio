import React from "react";
import { Roll } from "react-awesome-reveal";

const WorkCard = (props) => {
  return (
    <Roll>
      <div
        style={{ backgroundImage: `url(${props.img})` }}
        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
      >
        {/* Start: hover Effects */}
        <div className="opacity-0 group-hover:opacity-100">
          <span className="font-bold text-white tracking-wider text-2xl">
            {props.title}
          </span>
          <div className="pt-8 text-center">
            <a href={props.demoLink} target="_blank" rel="noreferrer">
              <button className="text-center font-bold rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                Demo
              </button>
            </a>
            <a href={props.codeLink} target="_blank" rel="noreferrer">
              <button className="text-center font-bold rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                Code
              </button>
            </a>
          </div>
        </div>
        {/* End: hover effects */}
      </div>
    </Roll>
  );
};

export default WorkCard;
