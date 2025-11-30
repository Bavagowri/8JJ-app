import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import './Slider.css';

const Slider = () => {
  const slides = [
    { img: "/images/slider/1.jpg", link: "/events/1" },
    { img: "/images/slider/3.jpg", link: "/events/2" },
    { img: "/images/slider/2.jpg", link: "/events/3" },
  ];

  return (
    
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      loop
      className="slider hero-slider"
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
