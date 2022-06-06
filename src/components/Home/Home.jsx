import React from "react";
import Advantages from "../Advantages/Advantages";
import Also from "../Also/Also";
import Carousel from "../Carousel/Carousel";
import Hits from "../Hits/Hits";
import NewProducts from "../NewProducts/NewProducts";
import Collection from "../Collection/Collection";
const Home = () => {
  return (
    <div>
      <Carousel />
      <Hits />
      <NewProducts />
      <Collection />
      <Advantages />
    </div>
  );
};

export default Home;
