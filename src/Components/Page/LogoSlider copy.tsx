import Image from "next/image";
import React from "react";
import Animator from "../UI/Animator";

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
    <Animator
      once
      animate="Botton-Top"
      className="relative mt-8 w-[120%] -translate-x-5 bg-secondary"
    >
      <div className="group relative z-10 mx-auto flex -rotate-2 overflow-hidden bg-primary">
        <div className="flex animate-carosale gap-8 invert">
          {logos.map((image, i) => (
            <div key={image} className="h-16 w-16 shrink-0">
              <Image src={image} height={500} width={600} alt="a" />
            </div>
          ))}
        </div>
        <div className="flex animate-carosale gap-8 invert">
          {logos.map((image, i) => (
            <div key={image} className="h-16 w-16 shrink-0">
              <Image src={image} height={500} width={600} alt="a" />
            </div>
          ))}
        </div>
      </div>
    </Animator>
  );
}

export default LogoSlider;
