import React from "react";

function Join() {
  return (
    <div>
      <div className="bg-[#F5F5F5] w-full py-20">
        <div className="flex justify-center">
          <div className="w-[95%] md:w-[90%]">
            <div className="flex lg:flex-row flex-col justify-center lg:items-center  gap-16">
              <div className="">
                <h1 className="text-4xl Mon font-normal leading-[50px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </h1>
              </div>
              <div className="flex gap-5">
                <button className="bg-[#18A0FB] rounded-lg py-2 px-16 text-white text-base">
                  Join Today
                </button>
                <button className="bg-white border border-[#18A0FB] rounded-lg py-2 px-16 text-[#18A0FB] text-base">
                  Contact US
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
