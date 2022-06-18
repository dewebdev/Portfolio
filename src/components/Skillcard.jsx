import React from "react";
import LightSpeed from "react-reveal/LightSpeed";

const Skillcard = (props) => {
  return (
    <LightSpeed left>
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img src={props.image} alt={props.text} className=" mx-auto w-20"></img>
        <p className="py-4">{props.text}</p>
      </div>
    </LightSpeed>
  );
};

export default Skillcard;
