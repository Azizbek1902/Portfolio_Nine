import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex lg:justify-end justify-center">
        <div className="w-[95%] md:w-[90%]">
          <div className="grid grid-cols-1 lg:grid-cols-7">
            <div className="lg:col-span-5">
              <div className="text-start lg:mt-14 lg:mb-0 mb-14 px-10">
                <h1 className="text-xl md:text-4xl Mon font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </h1>
                <div className="flex mt-6 gap-6 items-center">
                  <img
                    className="rounded-full"
                    src="https://avatars.mds.yandex.net/i?id=9263bea1a0d1d9d992264bb7ecc832d1_sr-5272099-images-thumbs&n=13"
                    alt=""
                  />
                  <span className="text-lg Mon font-normal">
                    Nemo enim ipsam
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <img
                src="https://avatars.mds.yandex.net/i?id=9cb6b5e6d9fd63417a732c1498f568f9-5590559-images-thumbs&n=13"
                className="w-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
