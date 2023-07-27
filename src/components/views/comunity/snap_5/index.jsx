import React from "react";

function Snap_5() {
  const data = [
    {
      id: 1,
      title: "Sed ut perspiciatis",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
    },
    {
      id: 2,
      title: "Sed ut perspiciatis",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
    },
    {
      id: 3,
      title: "Sed ut perspiciatis",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
    },
  ];
  return (
    <div>
      <h1 className="text-center mt-20 md:text-5xl text-2xl Mon font-semibold">
        Snap photos and share like never before
      </h1>
      <p className="text-center xl:px-28 lg:px-10 px-3 md:text-4xl text-xl Mon font-normal mb-10 mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>
      <div className="grid mt-20 grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-10">
        <div className="flex items-center">
          <div className="text-start lg:pl-10 pl-0">
            {data.map((item) => (
              <div className="text-start mb-10" key={item.id}>
                <h1 className="text-2xl Mon mb-5 font-semibold">
                  {item.title}
                </h1>
                <p className="text-lg Mon font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          className="w-full h-full"
          src="https://avatars.mds.yandex.net/i?id=89c2e57a596e70d53d1f6e0b3d1ec966e987381e-8334793-images-thumbs&n=13"
          alt=""
        />
      </div>
    </div>
  );
}

export default Snap_5;
