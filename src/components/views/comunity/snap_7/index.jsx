import React from "react";

function Snap_7() {
  const data = [
    {
      id: 1,
      img: "https://avatars.mds.yandex.net/i?id=a3d9594953d4ca1dced5f547ebfbcd75-5234584-images-thumbs&n=13",
      title: "Sed ut perspiciatis",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
    },
    {
      id: 2,
      img: "https://avatars.mds.yandex.net/i?id=eec52ff0217fc2f3baaa3fa20527a83e_sr-5496455-images-thumbs&n=13",
      title: "Lorem ipsum dolor",
      desc: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      id: 3,
      img: "https://avatars.mds.yandex.net/i?id=89530cdeedef9dfa8cd0ed8cc9e2705b_sr-9181645-images-thumbs&n=13",
      title: "Sed ut perspiciatis",
      desc: "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
  ];
  return (
    <div>
      <div className="flex justify-center mt-20 mb-20">
        <div className="w-[95%] md:w-[90%]">
          <h1 className="text-start mt-20 md:text-5xl text-2xl w-full lg:w-[60%] leading-[60px] Mon font-semibold">
            Snap photos and share like never before
          </h1>
          <p className="text-start  md:text-4xl w-full lg:w-[80%] text-xl Mon font-normal mb-10 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <div className="grid mt-20 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-16">
            {
              data.map((item) => (
                <div className="border-2 brder-[#7A7A7A]" key={item.id}>
                    <img src={item.img} className="w-full" alt="" />
                    <div className="text-start p-12">
                        <h1 className="text-2xl Mon font-semibold mb-5">{item.title}</h1>
                        <p className="text-lg Mon font-normal">{item.desc}</p>
                    </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Snap_7;
