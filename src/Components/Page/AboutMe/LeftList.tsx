"use client";
import Animator from "@/Components/UI/Animator";
import Counter from "@/Components/UI/Counter";
import Hilight from "@/Components/UI/Hilighted";
import React from "react";
import { motion } from "framer-motion";

function LeftList() {
  const lists = [
    {
      name: "Biography",
      text: " Work with leading international Brands And Business Vesitbulum sed Augue Ultrices",
    },
    {
      name: "Contact",
      text: "Tongi, Gazipur, Dhaka, Bangladesh email:robin.dev724@gmail.com",
    },
  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex h-fit  w-full flex-col md:gap-8 md:pr-16"
    >
      {lists.map((list, i) => (
        <motion.div key={i} variants={item} className="flex flex-col gap-2">
          <h3 className="font-semibold text-primary">{list.name}</h3>
          <p className="text-gray_lite">{list.text}</p>
        </motion.div>
      ))}
      <Animator
        once
        animate="Top-Bottom"
        className="flex justify-between gap-2"
      >
        <div>
          <div className="text-3xl font-bold">
            <Counter from={0} to={141} duration={1.5} />
            <Hilight>Yrs</Hilight>
          </div>
          <p className="text-gray_lite">Experience</p>
        </div>
        <div>
          <div className="text-3xl font-bold">
            <Counter from={0} to={387} duration={1.5} />
            <Hilight>+</Hilight>
          </div>
          <p className="text-gray_lite">Clients</p>
        </div>
      </Animator>
    </motion.div>
  );
}

export default LeftList;
