import React from "react";
import Advantages from "../../components/Advantages/Advantages";
import Carousel from "../../components/Carousel/Carousel";
import FloatingButton from "../../components/FloatingButtons/FloatingButton";
import Hits from "../../components/Hits/Hits";
import MainCollection from "../../components/MainCollection/MainCollection";
import NewProducts from "../../components/NewProducts/NewProducts";
const Home = () => {
  const move = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };
  return (
    <div>
      {move()}
      <FloatingButton />
      <Carousel />
      <Hits />
      <NewProducts />
      <MainCollection />
      <Advantages />
    </div>
  );
};

export default Home;
