import React from "react";
import { useNavigate } from "react-router-dom";

function Snap({ button, buttonClass }) {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      title: "Sed ut perspiciatis",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      desc: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    },
    {
      id: 3,
      title: "Nemo enim ipsam",
      desc: "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.",
    },
    {
      id: 4,
      title: "Tempor incididunt",
      desc: "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.",
    },
  ];
  return (
    <div>
      <div className="md:mt-40 mb-20 mt-0 flex justify-center">
        <div className="md:w-[90%] w-[95%]">
          <h1 className="text-5xl Mon font-light leading-[72px] mb-8">
            Snap photos and share like <br /> never before
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-20">
            {data.map((elem) => {
              return (
                <div key={elem.id} className="w-full lg:mb-0 mb-16">
                  <h1 className="Mon text-2xl font-semibold">{elem.title}</h1>
                  <p className="font-normal text-lg Mon mt-5">{elem.desc}</p>
                  {button ? (
                    <div></div>
                  ) : (
                    <button
                      onClick={() => {
                        navigate("/pricing");
                      }}
                      className={` ${
                        buttonClass
                          ? "rounded-lg border border-[#18A0FB] bg-white text-[#18A0FB] hover:text-white hover:bg-[#18A0FB] text-base transition-all font-semibold Mon py-3 mt-5 px-10"
                          : "rounded-lg border border-[#18A0FB] hover:bg-white hover:text-[#18A0FB] text-white bg-[#18A0FB] text-base transition-all font-semibold Mon py-3 mt-5 px-10"
                      } `}
                    >
                      Learn More
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Snap;
