import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { AttentionSeeker, Slide } from "react-awesome-reveal";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full text-white px-4">
        <Slide direction="left">
          <p className="text-pink-600 text-2xl">Hi, my name is</p>
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
          <AttentionSeeker effect="shake">
            <Link to="footer" smooth={true} duration={4000}>
              <div>
                <button className=" group flex items-center border-2 px-3 py-3 hover:bg-pink-600 hover:border-pink-600">
                  Connect With Me
                  <HiArrowNarrowRight className="ml-3 group-hover:rotate-90 duration-300" />
                </button>
              </div>
            </Link>
          </AttentionSeeker>
        </Slide>
      </div>
    </div>
  );
};

export default Home;
