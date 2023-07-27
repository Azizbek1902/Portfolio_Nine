import React from "react";

function Snap_4() {
  const data = [
    {
      id: 1,
      img: "https://avatars.mds.yandex.net/i?id=2a0000017a1991aaf0656a0582898cf99cf2-5194866-images-thumbs&n=13",
      title: "Sed ut perspiciatis",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
    },
    {
      id: 2,
      img: "https://avatars.mds.yandex.net/i?id=5282de1b1490166d24d80546070030c5-3703902-images-thumbs&n=13",
      title: "Lorem ipsum dolor",
      desc: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    },
    {
      id: 3,
      img: "https://avatars.mds.yandex.net/i?id=0f5784925a7debfdd8d2ec47313f5e05_sr-5235124-images-thumbs&n=13",
      title: "Nemo enim ipsam",
      desc: "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.",
    },
  ];
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[95%] md:w-[90%]">
          <h1 className="md:text-5xl md:w-[50%] w-full text-2xl Mon font-normal mb-10">
            Snap photos and share like never before
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {data.map((item) => (
              <div className="lg:text-start text-center" key={item.id}>
                <div className="flex justify-center mb-10 lg:justify-start">
                  <img src={item.img} className="rounded-full" alt="" />
                </div>
                <h1 className="text-2xl Mon font-semibold mb-5">
                  {item.title}
                </h1>
                <p className="text-lg Mon font-normal mb-5">{item.desc}</p>
                <button className="bg-white text-[#18A0FB] font-medium Mon text-lg">
                  Learn more
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Snap_4;
