import React from "react";
import WorkCard from "./WorkCard";
import MovieLand from "../assets/movieland.png";
import ExpenseTracker from "../assets/expenseTracker.png";

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
          <WorkCard
            img={MovieLand}
            demoLink="https://movi3land.netlify.app/"
            codeLink="https://github.com/God3ly/MovieLand"
          />
          <WorkCard
            img={ExpenseTracker}
            demoLink="https://God3ly.github.io/ExpenseTracker"
            codeLink="https://github.com/God3ly/ExpenseTracker"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
