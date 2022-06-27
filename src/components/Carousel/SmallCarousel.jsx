// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";
import smallCarousel from "../../assets/img/smallCarousel.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

export default function SmallCarousel() {
  return (
    <div className="slide mySmallSwiper">
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
      >
        <SwiperSlide>
          <img src={smallCarousel} alt="carousel" />
        </SwiperSlide>

        <Link to="/goout">
          <SwiperSlide>
            <img src={smallCarousel} alt="carousel" />
          </SwiperSlide>
        </Link>

        <SwiperSlide>
          <img src={smallCarousel} alt="carousel" />
        </SwiperSlide>

        <Link to="/summer">
          <SwiperSlide>
            <img src={smallCarousel} alt="carousel" />
          </SwiperSlide>
        </Link>

        <Link to="/dresses">
          <SwiperSlide>
            <img src={smallCarousel} alt="carousel" />
          </SwiperSlide>
        </Link>

        <SwiperSlide>
          <img src={smallCarousel} alt="carousel" />
        </SwiperSlide>

        <Link to="/skirt">
          <SwiperSlide>
            <img src={smallCarousel} alt="carousel" />
          </SwiperSlide>
        </Link>

        <SwiperSlide>
          <img src={smallCarousel} alt="carousel" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
