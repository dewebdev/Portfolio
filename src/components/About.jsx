import React from "react";
import { Bounce, Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8 pl-4 sm:text-right">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <Fade direction="left">
              <p className="sm:text-right font-bold text-4xl">
                Hi, I'am Dhanush, nice to meet you.Please Take A Look Around.
              </p>
            </Fade>
          </div>
          <div>
            <Fade direction="right">
              <p>
                I am passionate about building excellent software that improves
                the lives of those around me. I specialize in creating software
                for clients ranging from individuals and small-businesses all
                the way to large enterprise corporations. What would you do if
                you had a software expert available at your fingertips?
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
