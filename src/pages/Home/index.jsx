import React from "react";
import Header from "../../components/views/home/Header";
import Snap from "../../components/views/home/Snap";
import ContinerCart from "../../components/views/home/ContainerCart";
import Company from "../../components/views/home/Company";
import Join from "../../components/views/home/Join";

function Home() {
  return (
    <div>
      <Header />
      <Snap />
      <ContinerCart />
      <Company />
      <Join />
    </div>
  );
}

export default Home;
