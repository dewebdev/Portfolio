import React from "react";
import { JackInTheBox } from "react-awesome-reveal";

const Skillcard = (props) => {
  return (
    <JackInTheBox>
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img src={props.image} alt={props.text} className=" mx-auto w-20"></img>
        <p className="py-4">{props.text}</p>
      </div>
    </JackInTheBox>
  );
};

export default Skillcard;
