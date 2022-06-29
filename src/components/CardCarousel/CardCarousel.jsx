import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import { useContext } from "react";
import { contextProduct } from "../../context/productContext";
import { useEffect } from "react";
import Card from "../Card/Card";

const CardCarousel = () => {
  const { getProducts, products } = useContext(contextProduct);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Swiper slidesPerView={1.2} spaceBetween={8} className="cardSwiper">
      {products.map((item) => (
        <SwiperSlide key={item.id}>
          <Card item={item} key={item.id} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardCarousel;
