"use client"
import React, { useRef, useState } from "react";
import style from "./Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export default function Slider() {
  return (
    <div className={style.parent}>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image className={style.image} width={500} height={300} alt="slider image" src="/Assets/slider-1.avif" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={style.image} width={500} height={300} alt="slider image" src="/Assets/slider-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={style.image} width={500} height={300} alt="slider image" src="/Assets/slider-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={style.image} width={500} height={300} alt="slider image" src="/Assets/slider-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
