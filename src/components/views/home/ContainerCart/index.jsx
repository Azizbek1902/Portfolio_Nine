import React from "react";

function ContinerCart() {
  const data = [
    {
      id: 1,
      img: "https://avatars.mds.yandex.net/i?id=524b1c27f8337e0ac1e2177ec571c945f6781440-8497218-images-thumbs&n=13",
      title: "Sed ut perspiciatis unde omnis",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.",
      color: "#fff",
      flex: "flex-row",
    },
    {
      id: 2,
      img: "https://avatars.mds.yandex.net/i?id=78154121188c60cf03bdb0a3b1382930e310ee2c-4034191-images-thumbs&n=13",
      title: "Sed ut perspiciatis unde omnis",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.",
      color: "#F5F5F5",
      flex: "flex-row-reverse",
    },
  ];
  return (
    <div>
      {data.map((item) => (
        <div
          className="w-full"
          key={item.id}
          style={{ backgroundColor: item.color }}
        >
          <div className="justify-center flex">
            <div className="w-[95%] md:w-[90%]">
              <div
                className={`flex items-center py-10 lg:gap-20 gap-0 lg:flex-row lg:${item.flex} flex-col`}
              >
                <img src={item.img} alt="" className="w-full h-full" />
                <div className="text-start w-full">
                  <h1 className="text-2xl text-black Mon font-medium mb-5">
                    {item.title}
                  </h1>
                  <p className="text-lg Mon font-normal">{item.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContinerCart;
