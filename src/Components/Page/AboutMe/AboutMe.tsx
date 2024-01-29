import Animator from "@/Components/UI/Animator";
import Counter from "@/Components/UI/Counter";
import Hilight from "@/Components/UI/Hilighted";
import { heroImage } from "@/lib/Contants";
import Image from "next/image";
import React from "react";
import RightList from "./RightList";
import LeftList from "./LeftList";

function AboutMe() {
  return (
    <Animator
      animate="Botton-Top"
      once
      className="border-b border-primary border-opacity-20 bg-white py-16 "
    >
      <div className="container flex flex-col gap-8 text-center">
        <Animator once animate="Scale-Up">
          <h2 className="text-[3rem] font-semibold">About Me</h2>
        </Animator>
        <div className="grid gap-5 text-left md:grid-cols-3">
          <LeftList />
          <Animator once animate="Scale-Up" className="h-fit w-full shrink-0">
            <Image
              height={735}
              width={786}
              src={heroImage}
              alt=""
              className="w-full shrink-0 object-cover"
            />
          </Animator>
          <RightList />
        </div>
      </div>
    </Animator>
  );
}

export default AboutMe;
