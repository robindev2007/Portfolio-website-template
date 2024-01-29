"use client";
import { featuredProject } from "@/lib/Contants";
import React, { useRef, useState } from "react";
import SingleFeature from "./SingleFeature";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import Button from "@/Components/UI/Button";
import { Navigation } from "swiper/modules";
import Animator from "@/Components/UI/Animator";

function Featured() {
  return (
    <div className="py-3">
      <Animator
        once
        animate="Top-Bottom"
        className="container flex justify-between gap-3"
      >
        <h2>Our featured Projects</h2>
        <div className="flex gap-3">
          <Button variant="Ghost" className="swiper-button-prev">
            <FaArrowLeftLong className="h-5 w-5 fill-primary transition-all ease-in-out active:scale-90" />
          </Button>
          <Button variant="Ghost" className="swiper-button-next">
            <FaArrowRight className="h-5 w-5 fill-primary transition-all ease-in-out active:scale-90" />
          </Button>
        </div>
      </Animator>
      <Animator once animate="Right-Left" className="my-5 flex w-full ">
        <Swiper
          className="w-full"
          loop
          grabCursor
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            890: {
              slidesPerView: 2.1,
            },
            1200: {
              slidesPerView: 3,
            },
            1793: {
              slidesPerView: 4,
            },
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
            return featuredProject.map((project, i) => (
              <SwiperSlide key={project.image + i}>
                <SingleFeature project={project} />
              </SwiperSlide>
            ));
          })}
        </Swiper>
      </Animator>
    </div>
  );
}

export default Featured;
