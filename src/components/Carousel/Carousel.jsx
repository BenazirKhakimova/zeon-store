// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";
import carousel from "../../assets/img/carousel.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <div className="slide">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={carousel} alt="carousel" />
        </SwiperSlide>

        <Link to="/goout">
          <SwiperSlide>
            <img src={carousel} alt="carousel" />
          </SwiperSlide>
        </Link>

        <SwiperSlide>
          <img src={carousel} alt="carousel" />
        </SwiperSlide>

        <Link to="/summer">
          <SwiperSlide>
            <img src={carousel} alt="carousel" />
          </SwiperSlide>
        </Link>

        <Link to="/dresses">
          <SwiperSlide>
            <img src={carousel} alt="carousel" />
          </SwiperSlide>
        </Link>

        <SwiperSlide>
          <img src={carousel} alt="carousel" />
        </SwiperSlide>

        <Link to="/skirt">
          <SwiperSlide>
            <img src={carousel} alt="carousel" />
          </SwiperSlide>
        </Link>

        <SwiperSlide>
          <img src={carousel} alt="carousel" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
