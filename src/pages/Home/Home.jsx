import React from "react";
import Advantages from "../../components/Advantages/Advantages";
import Carousel from "../../components/Carousel/Carousel";
import FloatingButton from "../../components/FloatingButtons/FloatingButton";
import Hits from "../../components/Hits/Hits";
import NewProducts from "../../components/NewProducts/NewProducts";
import Collection from "../Collection/Collection";
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
      {/* <Collection /> */}
      <Advantages />
    </div>
  );
};

export default Home;
