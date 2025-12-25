"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaJava } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const Slider1 = () => {
  return (
    <>
    <div className="w-full overflow-hidden">
        <Swiper
  className="mt-6 mb-6 w-full max-w-full"
  modules={[Autoplay]}
  loop={true}
  freeMode={true}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}
  speed={2000}
  spaceBetween={12}
  breakpoints={{
    0: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 20,
    },
  }}
>
  {[
    FaJava,
    SiJavascript,
    FaPython,
    RiReactjsFill,
    SiMongodb,
    SiExpress,
    FaNode,
    FaGithub,
    FaAws,
    SiPostman,
    FaDocker,
    RiNextjsFill,
  ].map((Icon, index) => (
    <SwiperSlide
      key={index}
      className="flex items-center justify-center"
    >
      <Icon className="text-2xl sm:text-3xl lg:text-4xl text-white" />
    </SwiperSlide>
  ))}
</Swiper>
    </div>

    </>
  )
}

export default Slider1