import React from "react";

function Header() {
  const data = [
    {
      id: 1,
      img: "https://avatars.mds.yandex.net/i?id=bcdf32018b4e8127c077d31dce7aaa62_sr-5878141-images-thumbs&n=13",
    },
    {
      id: 2,
      img: "https://avatars.mds.yandex.net/i?id=062fbbf917ad2f58eebaf80bdff2a616_sr-5863201-images-thumbs&n=13",
    },
    {
      id: 3,
      img: "https://avatars.mds.yandex.net/i?id=5e158ed42fe9e65c8ea44b752e39b294-4344598-images-thumbs&n=13",
    },
    {
      id: 4,
      img: "https://avatars.mds.yandex.net/i?id=237524d7bc56576cbf0558fb33042216_sr-5886141-images-thumbs&n=13",
    },
    {
      id: 5,
      img: "https://avatars.mds.yandex.net/i?id=d89acae1a27af6f185f0da1d7fd2c6e4_sr-4589723-images-thumbs&n=13",
    },
    {
      id: 6,
      img: "https://avatars.mds.yandex.net/i?id=df94e5ae09498d57bdf28292e1c0a90e_sr-8285499-images-thumbs&n=13",
    },
  ];
  return (
    <div>
      <div className=" mt-20 flex justify-center">
        <div className="w-[95%] md:w-[90%]">
          <h1 className="text-center pb-6 text-2xl md:text-5xl Mon font-semibold">
            You’re in good company
          </h1>
          <div className="flex justify-center mb-20">
            <p className="w-[90%] text-center font-medium Mon md:text-4xl text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
            <div className="grid xl:px-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-10">
              {data.map((elem) => (
                <div className="d" key={elem.id}>
                  <img src={elem.img} className="w-full " alt="" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
