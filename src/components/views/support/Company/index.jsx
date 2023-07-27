import { AiFillCheckCircle } from "react-icons/ai";
import React from "react";

function Company() {
  return (
    <div>
      <div className="flex justify-center mt-24">
        <h1 className="text-4xl text-center w-[80%] Mon font-normal mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </h1>
      </div>
      <div className="flex justify-center mb-5">
        <AiFillCheckCircle color="green" size={60} />
      </div>
      <p className="text-lg font-normal Mon text-center">Nemo enim ipsam</p>
    </div>
  );
}

export default Company;
