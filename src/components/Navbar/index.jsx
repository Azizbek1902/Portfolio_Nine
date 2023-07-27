import { BsMenuDown } from "react-icons/bs";
import { BsMenuUp } from "react-icons/bs";
import { CgPathUnite } from "react-icons/cg";
import React, { useState } from "react";
import { NavLink } from "react-router-dom/dist";

function Navbar() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div className="lg:flex justify-center hidden">
        <div className="w-[95%] xl::w-[90%]">
          <div className="flex justify-between py-6">
            <div className="flex gap-20 items-center">
              <h1 className="text-2xl font-semibold Com flex items-center">
                <CgPathUnite size={30} /> photo
              </h1>
              <ul className="flex gap-10">
                <NavLink
                  to={"/"}
                  className="text-[#18A0FB] text-lg font-medium Mon"
                >
                  Feature
                </NavLink>
                <NavLink
                  to={"/pricing"}
                  className="text-[#18A0FB] text-lg font-medium Mon"
                >
                  Pricing
                </NavLink>
                <NavLink
                  to={"/comunity"}
                  className="text-[#18A0FB] text-lg font-medium Mon"
                >
                  Community
                </NavLink>
                <NavLink
                  to={"/support"}
                  className="text-[#18A0FB] text-lg font-medium Mon"
                >
                  Support
                </NavLink>
              </ul>
            </div>
            <div className="flex gap-5">
              <button className="bg-white transition-all border-[#18A0FB] text-[#18A0FB] hover:text-white hover:bg-[#18A0FB] border font-medium text-lg rounded-lg py-3 px-12">
                <NavLink to={"/login"}>Log in</NavLink>
              </button>
              <button className="border transition-all font-medium text-lg rounded-lg py-3 px-12 bg-[#18A0FB] hover:text-[#18A0FB] border-[#18A0FB] hover:bg-white text-white">
                <NavLink to={"/register"}>Register</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden justify-center flex ">
        <div className="w-[95%] xl::w-[90%] relative">
          <div className="flex justify-between py-6">
            <div className="flex gap-20 items-center">
              <h1 className="text-2xl font-semibold Com flex items-center">
                <CgPathUnite size={30} /> photo
              </h1>
            </div>
            <div className="flex md:gap-8 gap-3">
              <div className="flex gap-5">
                <button className="bg-white transition-all border-[#18A0FB] text-[#18A0FB] hover:text-white hover:bg-[#18A0FB] border font-medium text-lg rounded-lg md:py-3 py-2 px-3 md:px-12">
                  <NavLink to={"/login"}>Log in</NavLink>
                </button>
                <button className="border transition-all font-medium text-lg rounded-lg md:py-3 py-2 px-3 md:px-12 bg-[#18A0FB] hover:text-[#18A0FB] border-[#18A0FB] hover:bg-white text-white">
                  <NavLink to={"/register"}>Register</NavLink>
                </button>
              </div>
              {open ? (
                <button
                  className="navRespons"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <BsMenuUp size={30} color="#18A0FB" />
                </button>
              ) : (
                <button
                  className="navRespons"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <BsMenuDown size={30} color="#18A0FB" />
                </button>
              )}
            </div>
          </div>
          <div
            className={`absolute px-10 top-24 w-[100%] z-50 overflow-hidden h-0 navRespons ${
              open ? "" : "h-72 pt-10 bg-[#18A0FB]"
            }`}
          >
            <ul className="block gap-10">
              <NavLink
                to={"/"}
                className="text-white text-lg pb-7 block font-medium Mon"
              >
                Feature
              </NavLink>
              <NavLink
                to={"/pricing"}
                className="text-white text-lg pb-7 block font-medium Mon"
              >
                Pricing
              </NavLink>
              <NavLink
                to={"/comunity"}
                className="text-white text-lg pb-7 block font-medium Mon"
              >
                Community
              </NavLink>
              <NavLink
                to={"/support"}
                className="text-white text-lg pb-7 block font-medium Mon"
              >
                Support
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
