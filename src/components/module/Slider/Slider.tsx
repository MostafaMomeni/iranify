"use client";
import React, { useRef, useState } from "react";
import style from "./Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export default function Slider() {
  return (
    <div className={style.parent}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay , Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            className={style.image}
            width={500}
            height={300}
            alt="slider image"
            src="/Assets/slider-1.avif"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={style.image}
            width={500}
            height={300}
            alt="slider image"
            src="/Assets/slider-2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={style.image}
            width={500}
            height={300}
            alt="slider image"
            src="/Assets/slider-3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={style.image}
            width={500}
            height={300}
            alt="slider image"
            src="/Assets/slider-4.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
