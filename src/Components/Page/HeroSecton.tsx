import React from "react";
import Button from "../UI/Button";
import Image from "next/image";
import { heroImage } from "@/lib/Contants";
import { AnimatedText } from "../UI/AnimatedText";
import Hilight from "../UI/Hilighted";
import Animator from "../UI/Animator";
import LogoSlider from "./LogoSlider";
import Counter from "../UI/Counter";

function HeroSecton() {
  return (
    <div className="bg-white_cold">
      <div className="container flex grid-cols-2 flex-col items-center gap-4 md:grid">
        <Animator
          once
          animate="Left-Right"
          className="flex flex-col items-start gap-6"
        >
          <div className="flex items-center">
            <div className="flex items-center text-lg font-semibold">
              <AnimatedText once text={"Say Hello To"} />
              <Hilight>
                <AnimatedText once text={"Robin Coder"} />
              </Hilight>
            </div>
          </div>
          <AnimatedText
            once
            text="Your Business Infulencer"
            className="text-[4rem] font-bold leading-[.9]"
          />

          <AnimatedText
            once
            duraction={0.01}
            className="text-gray_lite"
            text="Creating bold & modern interface desing with UX knowledge for all companies"
          />
          <Button className="">Hire Me</Button>
          <div className="flex w-full items-center justify-between gap-4 text-center md:w-fit">
            <Animator once>
              <div className="text-3xl font-bold">
                <Counter from={0} to={125} duration={1.5} />
                <Hilight>+</Hilight>
              </div>
              <p className="text-gray_lite">Happy Customers</p>
            </Animator>
            <Animator once>
              <div className="text-3xl font-bold">
                <Counter from={0} to={141} duration={1.5} />
                <Hilight>+</Hilight>
              </div>
              <p className="text-gray_lite">Projects</p>
            </Animator>
            <Animator once>
              <div className="text-3xl font-bold">
                <Counter from={0} to={5} duration={1.5} />
                <Hilight>+</Hilight>
              </div>
              <p className="text-gray_lite">Years Experiance</p>
            </Animator>
          </div>
        </Animator>
        <Animator once className="relative h-full w-full">
          <Image
            height={1448}
            width={1528}
            src={heroImage}
            alt=""
            className="max-w-[35rem] object-cover"
          />
        </Animator>
      </div>
      <LogoSlider />
    </div>
  );
}

export default HeroSecton;
