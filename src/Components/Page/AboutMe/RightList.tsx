"use client";
import { motion } from "framer-motion";
import { TbSpeakerphone, TbHeartRateMonitor } from "react-icons/tb";
import { MdOutlineDataThresholding } from "react-icons/md";

function RightList() {
  const rightList = [
    {
      logo: <TbSpeakerphone className="h-9 w-9 rounded-md bg-white_cold p-1" />,
      name: "BrandGrowing",
      text: "Faucibus pellentesque aliquam seclerisque posuere tortor",
    },
    {
      logo: (
        <MdOutlineDataThresholding className="h-9 w-9 rounded-md bg-white_cold p-1" />
      ),
      name: "CampainPlanner",
      text: "Sclerisque spaien quis tellus elementum interdum. Nec nec, sem no ultrices",
    },
    {
      logo: (
        <TbHeartRateMonitor className="h-9 w-9 rounded-md bg-white_cold p-1" />
      ),
      name: "CampainReporting",
      text: "Feucibus pelientesque aliquam scelerisque posuere tortor",
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
    hidden: { x: 20, opacity: 0 },
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
      className="flex w-full flex-col gap-8 md:pl-16"
    >
      {rightList.map((list, i) => (
        <motion.div key={i} variants={item} className="flex flex-col gap-2">
          <h3 className="flex items-center gap-3 font-semibold text-primary ">
            {list.logo}
            {list.name}
          </h3>
          <p className="text-gray_lite">{list.text}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default RightList;
