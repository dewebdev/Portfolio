import React from "react";
import workImg from "../assets/workImg.jpeg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Start: hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="font-bold text-white tracking-wider text-2xl">
                React Js Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center font-bold rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center font-bold rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
            {/* End: hover effects */}
          </div>
        </div>
        {/* End :Card Creation */}
      </div>
    </div>
  );
};

export default Work;
