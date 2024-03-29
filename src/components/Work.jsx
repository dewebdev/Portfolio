import React from "react";
import WorkCard from "./WorkCard";
import artefactTattoos from "../assets/artefacttattoosbusiness-min.webp";
import fimSevenValetParking from "../assets/fimSevenValetParking.png";
import petadoptpia from "../assets/petadoptpia.png";
import cndwaste from "../assets/cndwaste.png";
import rhonak from "../assets/rhonak.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Client Works
          </p>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <WorkCard
            img={artefactTattoos}
            demoLink="https://artefactTattoos.com/"
            codeLink="https://github.com/sujesh-gs/artefacttattoos"
            title="Tattoo Studio Project"
          />
          <WorkCard
            img={fimSevenValetParking}
            demoLink="https://fimsevenvaletparking.netlify.com/"
            codeLink="https://github.com/dewebdev/fim7parking"
            title="Valet Parking Project"
          />
          <WorkCard
            img={petadoptpia}
            demoLink="https://dewebdev.github.io/PetAdoptopia/"
            codeLink="https://github.com/dewebdev/PetAdoptopia"
            title="petadopt Project"
          />
          <WorkCard
            img={cndwaste}
            demoLink="https://buildingwastetmcmdb.web.app/"
            codeLink="https://github.com/cndwastemanagement/cndmoodubidire"
            title="cnd waste management Project"
          />
          <WorkCard
            img={rhonak}
            demoLink="https://www.rhonak.in/"
            codeLink="https://github.com/dewebdev/rhonak"
            title="Client Website - in Development"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
