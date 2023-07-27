import React from "react";
import Snap from "../../components/views/home/Snap";
import ContainerCart from "../../components/views/home/ContainerCart";
import Snap_1 from "../../components/views/comunity/snap_1";
import Snap_2 from "../../components/views/comunity/snap_2";
import Snap_3 from "../../components/views/comunity/snap_3";
import Snap_4 from "../../components/views/comunity/snap_4";
import Snap_5 from "../../components/views/comunity/snap_5";
import Snap_6 from "../../components/views/comunity/snap_6";
import Snap_7 from "../../components/views/comunity/snap_7";

function Community() {
  return (
    <div>
      <Snap button={true} />
      <Snap buttonClass={true} />
      <Snap />
      <Snap_1 />
      <ContainerCart />
      <Snap_2 />
      <Snap_3 />
      <Snap_4 />
      <Snap_5 />
      <Snap_6 />
      <Snap_7 />
    </div>
  );
}

export default Community;
