import React from "react";

function Container() {
  const data = [
    {
      id: 1,
      img: "https://avatars.mds.yandex.net/i?id=20f40ef8df7bb772ab99cce826b4a4dc-5344952-images-thumbs&n=13",
    },
    {
      id: 2,
      img: "https://avatars.mds.yandex.net/i?id=df94e5ae09498d57bdf28292e1c0a90e_sr-8285499-images-thumbs&n=13",
    },
    {
      id: 3,
      img: "https://avatars.mds.yandex.net/i?id=1512e50dddc0d9e8f62ce317ad099d24_sr-5336886-images-thumbs&n=13",
    },
    {
      id: 4,
      img: "https://avatars.mds.yandex.net/i?id=46c3cb8ebb3ed7b9a75e2e761f8348c9_sr-7000115-images-thumbs&n=13",
    },
    {
      id: 5,
      img: "https://avatars.mds.yandex.net/i?id=bfb796ae5da549a1dfaddf7ed0f5b8fc-4499646-images-thumbs&n=13",
    },
    {
      id: 6,
      img: "https://avatars.mds.yandex.net/i?id=bbb25b9224c98dd823a7a2ec361cfc8c_sr-7051792-images-thumbs&n=13",
    },
  ];
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[95%] md:w-[90%]">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-14 mt-20">
            <div className="text-start">
              <h1 className="md:text-5xl text-2xl mb-10 Mon font-semibold">
                You’re in good company
              </h1>
              <p className="text-xl md:text-3xl Mon font-normal mb-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {data.map((elem) => (
                  <div className="d" key={elem.id}>
                    <img src={elem.img} className="w-full" alt="" />
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-[#7A7A7A] ">
              <img
                className="w-full"
                src="https://avatars.mds.yandex.net/i?id=36d82cf5210322a2b46bd644135fdd3d-4491259-images-thumbs&n=13"
                alt=""
              />
              <div className="text-start p-10">
                <h1 className="text-xl Mon font-semibold mb-5">
                  Sed ut perspiciatis unde omnis
                </h1>
                <p className="text-lg font-normal Mon">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
