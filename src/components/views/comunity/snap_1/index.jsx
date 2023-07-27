import React from "react";

function Snap_1() {
  const data = [
    {
      id: 1,
      img: "https://avatars.mds.yandex.net/i?id=8cc288873cd6688e65829d3c5415cdc87078f2fc-9181103-images-thumbs&n=13",
      title: "Sed ut perspiciatis",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
    },
    {
      id: 2,
      img: "https://avatars.mds.yandex.net/i?id=0402ded968ba469425016fe30c9c53d446d34421-9098551-images-thumbs&n=13",
      title: "Lorem ipsum dolor",
      desc: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    },
  ];
  return (
    <div>
      <div className="flex justify-center mb-20">
        <div className="w-[95%] md:w-[90%]">
          <h1 className="md:text-5xl text-2xl lg:w-[60%] Mon mb-20">
            Snap photos and share like never before
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {data.map((item) => (
              <div className="lg:text-start text-center w-full" key={item.id}>
                <div className="w-full mb-10 flex lg:justify-start justify-center">
                  <img src={item.img} className="rounded-full" alt="" />
                </div>
                <h1 className="text-2xl Mon font-semibold">{item.title}</h1>
                <p className="pt-5 text-lg font-normal Mon">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Snap_1;
