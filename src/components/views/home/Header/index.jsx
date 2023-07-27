import React from "react";
import Video from "../../../../assets/login-bg.mp4";
function Header() {
  return (
    <div className="">
      <div className="h-[85vh] pb-20 flex md:items-end items-center justify-center ">
        <video src={Video} autoPlay muted className="md:h-[100vh] h-[70vh] video_1"/>
        <div className="relative z-10">
          <div className="text-center Mon font-normal text-white text-5xl">
            The largest community of photo enthusiasts
          </div>
          <div className="flex justify-center mt-10">
            <button className="bg-[#18A0FB] text-white Mon font-medium text-lg py-3 px-10">
              Join Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
