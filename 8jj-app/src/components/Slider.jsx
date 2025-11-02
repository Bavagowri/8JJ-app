import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Slider = () => {
  const slides = [
    { img: "/images/blog3.jpg", link: "/events/1" },
    { img: "/images/blog4.jpg", link: "/events/2" },
    { img: "/images/blog5.jpg", link: "/events/3" },
  ];

  return (
    
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 3000 }}
      loop
      className="slider"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <a href={slide.link}>
            <img src={slide.img} alt={`slide-${i}`} className="slider-img" />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
