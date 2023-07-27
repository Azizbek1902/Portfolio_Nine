import React from "react";

function Snap_6() {
  const data = [
    {
      id: 1,
      img: "https://avatars.mds.yandex.net/i?id=759912c01cb54be3181c9516c94c668d4ce09065-8497475-images-thumbs&n=13",
      title: "Sed ut perspiciatis",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
    },
    {
      id: 2,
      img: "https://avatars.mds.yandex.net/i?id=1d5081fa38672efebb5b1780863c4fc2b7452253-8168927-images-thumbs&n=13",
      title: "Sed ut perspiciatis",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
    },
  ];
  return (
    <div>
      <div className="flex justify-center mt-20">
        <div className="w-[95%] md:w-[90%]">
          <h1 className="text-start mt-20 md:text-5xl text-2xl w-full lg:w-[60%] leading-[60px] Mon font-semibold">
            Snap photos and share like never before
          </h1>
          <p className="text-start  md:text-4xl w-full lg:w-[80%] text-xl Mon font-normal mb-10 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <div className="grid mt-20 grid-cols-1 lg:grid-cols-2 gap-16">
            {data.map((elem) => (
              <div key={elem.id} className="border border-[#7A7A7A]">
                <img src={elem.img} className="w-full" alt="" />
                <div className="p-10">
                  <h1 className="text-2xl Mon font-semibold mb-5">
                    {elem.title}
                  </h1>
                  <p className="text-lg font-normal Mon">{elem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Snap_6;
