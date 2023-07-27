import React from "react";

function Company() {
  const data = [
    {
      id: 1,
      img: "https://avatars.mds.yandex.net/i?id=940c946a1cf0b6eb66a6173d414d425c_sr-5110174-images-thumbs&n=13",
    },
    {
      id: 2,
      img: "https://avatars.mds.yandex.net/i?id=3c4bb2b42faa194a5b69c1161cec318f-5905145-images-thumbs&n=13",
    },
    {
      id: 3,
      img: "https://avatars.mds.yandex.net/i?id=d9ae7f214ef486d866e3fe8631a38051-4593579-images-thumbs&n=13",
    },
    {
      id: 4,
      img: "https://avatars.mds.yandex.net/i?id=2223e13f4d1035563089b13bb81ba1da_sr-4055806-images-thumbs&n=13",
    },
    {
      id: 5,
      img: "https://avatars.mds.yandex.net/i?id=00ae338d01525e1f31a60bef2c772e26_sr-8496994-images-thumbs&n=13",
    },
    {
      id: 6,
      img: "https://avatars.mds.yandex.net/i?id=1e4b16a4d1ed933100d79a15599a500d_sr-9265621-images-thumbs&n=13",
    },
    {
      id: 7,
      img: "https://avatars.mds.yandex.net/i?id=dbbf56250c65f87d633b9deea2a5560d59e2325f-7803878-images-thumbs&n=13",
    },
    {
      id: 8,
      img: "https://avatars.mds.yandex.net/i?id=bdb0e6e0c8c4a4025d27817511e08c01_sr-8497734-images-thumbs&n=13",
    },
  ];
  return (
    <div className="my-20">
      <h1 className="text-center text-5xl font-semibold Mon">
        You’re in good company
      </h1>
      <div className="flex justify-center">
        <h1 className="text-center font-medium Mon py-10 text-4xl lg:w-[80%] w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ad
          voluptatem molestiae magni numquam officia.
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-10">
            {data.map((elem) => (
              <div key={elem.id} className=" md:mb-0 mb-10">
                <img
                  src={elem.img}
                  alt=""
                  className="w-full rounded-md h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
