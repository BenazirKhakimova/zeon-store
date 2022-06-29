import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./smallcard.css";
import { useContext } from "react";
import { contextProduct } from "../../context/productContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const OneProductCarousel = () => {
  const { getOneProduct, oneProduct } = useContext(contextProduct);
  // const { id } = useParams();
  // useEffect(() => {
  //   getOneProduct(id);
  // }, [id]);
  return (
    <Swiper
      key={oneProduct.id}
      slidesPerView={1.2}
      spaceBetween={8}
      className="oneProductSwiper"
    >
      <SwiperSlide>
        <img src={oneProduct.image1} className="slide-img-one" alt="img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={oneProduct.image2} className="slide-img-one" alt="img" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={oneProduct.image3} className="slide-img-one" alt="img" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={oneProduct.image4} className="slide-img-one" alt="img" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={oneProduct.image5} className="slide-img-one" alt="img" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={oneProduct.image6} className="slide-img-one" alt="img" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={oneProduct.image7} className="slide-img-one" alt="img" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={oneProduct.image8} className="slide-img-one" alt="img" />
      </SwiperSlide>
    </Swiper>
  );
};

export default OneProductCarousel;
