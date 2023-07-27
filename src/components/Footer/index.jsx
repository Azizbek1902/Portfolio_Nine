import { BsTelegram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import React from "react";
import { CgPathUnite } from "react-icons/cg";

function Footer() {
  return (
    <div>
      <div className="flex justify-center my-10">
        <div className="w-[95%] md:w-[90%]">
          <div className="flex lg:flex-row flex-col justify-between items-center pb-10 border-b border-[#7F7F7F]">
            <div className="flex lg:gap-16 md:gap-36 gap-10 mb-10 lg:mb-0">
              <h1 className="text-base Mon font-bold">Mobile app</h1>
              <h1 className="text-base Mon font-bold">Community</h1>
              <h1 className="text-base Mon font-bold">Company</h1>
            </div>
            <h1 className="text-2xl font-semibold lg:mb-0 mb-10 Com flex items-center">
              <CgPathUnite size={30} /> photo
            </h1>
            <div className="flex lg:gap-16 md:gap-36 gap-10 mb-10 lg:mb-0">
              <h1 className="text-base Mon font-bold">Mobile app</h1>
              <h1 className="text-base Mon font-bold">Community</h1>
              <h1 className="text-base Mon font-bold">Company</h1>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <div className="flex gap-4">
              <div className="bg-[#18A0FB] hover:border-[#18A0FB] border rounded-full p-3 hover:bg-white cursor-pointer transition-[0.5s]">
                <CgFacebook
                  size={32}
                  className="text-white hover:text-[#18A0FB]"
                />
              </div>
              <div className="bg-[#18A0FB] hover:border-[#18A0FB] border rounded-full p-3 hover:bg-white cursor-pointer transition-[0.5s]">
                <AiOutlineInstagram
                  size={32}
                  className="text-white hover:text-[#18A0FB]"
                />
              </div>
              <div className="bg-[#18A0FB] hover:border-[#18A0FB] border rounded-full p-3 hover:bg-white cursor-pointer transition-[0.5s]">
                <AiFillTwitterCircle
                  size={32}
                  className="text-white hover:text-[#18A0FB]"
                />
              </div>
              <div className="bg-[#18A0FB] hover:border-[#18A0FB] border rounded-full p-3 hover:bg-white cursor-pointer transition-[0.5s]">
                <BsTelegram
                  size={32}
                  className="text-white hover:text-[#18A0FB]"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-8 text-sm Mon font-normal">
            © Photo, Inc. 2019. We love our users!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
