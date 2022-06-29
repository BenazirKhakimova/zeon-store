import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./carousel.css";
import { useContext } from "react";
import { contextProduct } from "../../context/productContext";
import { useEffect } from "react";
import MainColectionCard from "./MainColectionCard";

const CollectionCarousel = ({item}) => {
  const { collections, getCollections } = useContext(contextProduct);
  useEffect(() => {
    getCollections();
  }, []);
  return (
    <Swiper slidesPerView={1.2} spaceBetween={8} className="cardSwiper">
      {collections.map((item) => (
        <SwiperSlide key={item.id}>
          <MainColectionCard item={item} key={item.id} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CollectionCarousel;
