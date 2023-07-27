import React from "react";

function Snap_2() {
  return (
    <div>
      <div className="flex justify-center my-20">
        <div className="w-[95%] md:w-[90%]">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
            <img
              className="w-full h-full"
              src="https://avatars.mds.yandex.net/i?id=5fbef410223d709a8aa104ce736d8defd93d038b-4828361-images-thumbs&n=13"
              alt=""
            />
            <div className="flex items-center">
              <div className="text-start">
                <h1 className="text-2xl Mon font-semibold">
                  Sed ut perspiciatis unde omnis
                </h1>
                <p className="mt-5 pb-5 text-lg Mon font-normal border-b-2 border-gray-400">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem.
                </p>
                <p className="text-sm mt-5 Mon font-normal">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Snap_2;
