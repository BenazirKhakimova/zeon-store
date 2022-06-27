import React, { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import FloatingButton from "../../components/FloatingButtons/FloatingButton";
import SmallCarousel from "../../components/Carousel/SmallCarousel";
import Hits from "../../components/Hits/Hits";
import NewProducts from "../../components/NewProducts/NewProducts";
import MainCollection from "../../components/MainCollection/MainCollection";
import Advantages from "../../components/Advantages/Advantages";
import Loading from "../../components/Loading/Loading";
const Home = () => {
  const move = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1300);
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <div>
      {move()}
      <FloatingButton />
      {window.innerHeight < 320 ? <Carousel /> : <SmallCarousel />}
      {/* <Hits />
      <NewProducts />
      <MainCollection />
      <Advantages /> */}
    </div>
  );
};

export default Home;
