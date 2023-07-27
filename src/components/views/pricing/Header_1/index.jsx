import React from "react";
import url from "../../../../assets/login-bg.mp4";

function Header_One() {
  const data = [
    {
      id: 1,
      img: "https://avatars.mds.yandex.net/i?id=d161f24eb79f21e591c977ee3691a19a64cee9e6-9148169-images-thumbs&n=13",
      title: "The largest community of photo enthusiasts",
      flex: "flex-row",
    },
    {
      id: 2,
      img: "https://avatars.mds.yandex.net/i?id=18e3bf10adc34283657b1ee9647379cfce8f6dae-5294030-images-thumbs&n=13",
      title: "The largest community of photo enthusiasts",
      flex: "flex-row-reverse",
    },
  ];
  return (
    <div>
      <div className="flex justify-center mt-10">
        <div className="w-[95%] md:w-[90%]">
          {data.map((item) => (
            <div
              className={`flex md:items-center md:flex-row- md:${item.flex} flex-col mb-6`}
              key={item.id}
            >
              <div className="text-start w-full p-10">
                <h1 className="text-4xl Mon font-normal leading-[46px] mb-5">
                  {item.title}
                </h1>
                <button className="text-white text-base bg-[#18A0FB] border-[#18A0FB] border rounded-md py-3 px-10">
                  Join Today
                </button>
              </div>
              <div className="w-full">
                <img src={item.img} className="w-full h-full" alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[95%] md:w-[90%]">
          <div className="w-full md:p-20 p-2 text-start">
            <h1 className="md:text-[56px] text-2xl md:leading-[70px] leading-8 Mon font-normal mb-5">
              The largest community <br /> of photo enthusiasts
            </h1>
            <button className="text-white text-base bg-[#18A0FB] border-[#18A0FB] border rounded-md py-3 px-10">
              Join Today
            </button>
          </div>
        </div>
      </div>
      <img
        className="w-full h-full"
        src="https://avatars.mds.yandex.net/i?id=479db9bf41f86976e91646093ed56cb4e5ad9825-6909092-images-thumbs&n=13"
        alt=""
      />
      <div
        className="mt-10 lg:px-20 px-2 flex items-center bg-cover bg-no-repeat h-[80vh] w-full bg-[image:var(--image-url)]"
        style={{
          "--image-url": ` url(https://avatars.mds.yandex.net/i?id=46e2f4333b83fb9d6c88b9fd540e943bfa4b4276-7803878-images-thumbs&n=13)`,
        }}
      >
        <div className="w-full md:p-20 p-2 text-start">
          <h1 className="md:text-[56px] text-2xl text-white md:leading-[70px] leading-9 Mon font-normal mb-5">
            The largest community <br /> of photo enthusiasts
          </h1>
          <button className="text-white text-base bg-[#18A0FB] border-[#18A0FB] border rounded-md py-3 px-10">
            Join Today
          </button>
        </div>
      </div>
      <div className="mt-10 relative">
        <div className="w-full  relative">
          <video
            src={url}
            className="video_3 bg-no-repeat w-[100%] h-full bg-contain "
            autoPlay
            muted
          />
        </div>
        <div className="text-start absolute md:bottom-36 bottom-0 w-full p-10">
          <div className="justify-center flex">
            <div>
              <h1 className="md:text-4xl text-2xl Mon font-normal text-white leading-[46px] mb-5">
                The largest community of photo enthusiasts
              </h1>
              <div className="flex justify-center">
                <button className="text-white text-base bg-[#18A0FB] border-[#18A0FB] border rounded-md py-3 px-10">
                  Join Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-[95%] md:w-[90%]">
          <div className="flex items-center md:flex-row flex-col mb-6">
            <div className="text-start w-full p-10">
              <h1 className="text-4xl Mon font-normal leading-[46px] mb-5">
                The largest community <br /> of photo enthusiasts
              </h1>
              <button className="text-white text-base bg-[#18A0FB] border-[#18A0FB] border rounded-md py-3 px-10">
                Join Today
              </button>
            </div>
            <div className="w-full h-full">
              <video src={url} className="video_2" autoPlay muted />
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-10 px-20 flex items-center bg-cover bg-no-repeat h-[80vh] w-full bg-[image:var(--image-url)]"
        style={{
          "--image-url": ` url(https://avatars.mds.yandex.net/i?id=46e2f4333b83fb9d6c88b9fd540e943bfa4b4276-7803878-images-thumbs&n=13)`,
        }}
      >
        <div className="w-full lg:p-20 p-3 text-start">
          <h1 className="md:text-[56px] text-4xl text-white md:leading-[70px] leading-10 Mon font-normal mb-5">
            The largest community <br /> of photo enthusiasts
          </h1>
          <button className="text-white mb-10 text-base bg-[#18A0FB] border-[#18A0FB] border rounded-md py-3 px-10">
            Join Today
          </button>
          <div className="w-1/4 h-full">
            <video src={url} className="video_2" autoPlay muted />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[95%] md:w-[90%]">
          <div className="flex items-center lg:flex-row flex-col gap-20 px-10 mt-20">
            <h1 className="text-[50px] leading-[64px] Mon font-semibold mb-5">
              The largest community <br /> of photo enthusiasts
            </h1>
            <div className="flex justify-center mb-20">
              <div className="w-full border border-[#7A7A7A] p-10">
                <h1 className="pb-5 text-2xl Mon font-semibold">
                  Sign up for a free account
                </h1>
                <div className="flex md:flex-row flex-col gap-4 pb-5">
                  <input
                    type="text"
                    placeholder="First name"
                    className="p-2 border text-base Mon font-medium border-[#7A7A7A] w-full"
                  />
                  <input
                    type="text"
                    placeholder="Lasr name"
                    className="p-2 border text-base Mon font-medium border-[#7A7A7A] w-full"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  className="p-2 border mb-5 text-base Mon font-medium border-[#7A7A7A] w-full"
                />
                <input
                  type="password"
                  placeholder="Create password"
                  className="p-2 border mb-5 text-base Mon font-medium border-[#7A7A7A] w-full"
                />
                <button className="bg-[#18A0FB] text-white text-base rounded-lg transition-all py-2 px-10 hover:border-[#18A0FB] border hover:bg-white hover:text-[#18A0FB]">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header_One;
