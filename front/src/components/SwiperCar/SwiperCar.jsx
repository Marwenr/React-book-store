import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { AiOutlineRightCircle, AiOutlineLeftCircle } from "react-icons/ai";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./styles.module.css";

import { Navigation } from "swiper";

const SwiperCar = ({ children, items, name }) => {
  const swiperSlide = items.map((el) => (
    <SwiperSlide className="d-flex justify-content-center" key={el.id}>
      {React.cloneElement(children, { ...el })}
    </SwiperSlide>
  ));

  var MobileSlides = window.innerWidth <= 760 ? 2 : 5;

  const swiperClass = `swiper-${Math.floor(Math.random() * 100000)}`;



  return (
    <div className="mt-5">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <h3>{name}</h3>
        </div>
        <div className="d-flex align-items-center">
          <div className={`${swiperClass}-right p-3`}>
            <AiOutlineLeftCircle className="fs-5" />
          </div>
          <div className={`${swiperClass}-left p-3`}>
            <AiOutlineRightCircle className="fs-5" />
          </div>
        </div>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={MobileSlides}
        modules={[Navigation]}
        navigation={{
          nextEl: `.${swiperClass}-left`,
          prevEl: `.${swiperClass}-right`,
        }}
      >
        {swiperSlide}
      </Swiper>
    </div>
  );
};

export default SwiperCar;
