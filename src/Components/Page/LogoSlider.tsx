"use client";
import Image from "next/image";
import React from "react";
import Animator from "../UI/Animator";
import ScrollCarousel from "scroll-carousel-react";

const logos = [
  "/images/logo/vine-text-type-logo.png",
  "/images/logo/virus-total-text-logo.png",
  "/images/logo/vine-text-type-logo.png",
  "/images/logo/virus-total-text-logo.png",
  "/images/logo/vine-text-type-logo.png",
  "/images/logo/virus-total-text-logo.png",
  "/images/logo/vine-text-type-logo.png",
  "/images/logo/virus-total-text-logo.png",
  "/images/logo/vine-text-type-logo.png",
  "/images/logo/virus-total-text-logo.png",
  "/images/logo/vine-text-type-logo.png",
  "/images/logo/virus-total-text-logo.png",
];

function LogoSlider() {
  return (
    <Animator once animate="Botton-Top" className="mt-10">
      <div className="relative w-[110%] -translate-x-2 bg-secondary py-2">
        <div className="group relative z-10 flex -rotate-1 overflow-hidden bg-primary">
          <ScrollCarousel
            autoplay
            autoplaySpeed={8}
            speed={5}
            className="flex items-center gap-8 invert"
          >
            {logos.map((image, i) => (
              <div key={image} className="h-16 w-16 shrink-0">
                <Image
                  src={image}
                  height={500}
                  width={600}
                  alt="a"
                  className="pointer-events-none"
                />
              </div>
            ))}
          </ScrollCarousel>
        </div>
      </div>
    </Animator>
  );
}

export default LogoSlider;
