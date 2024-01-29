"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utlis";
import { navList } from "@/lib/Contants";

type StagerdListProps = {};

export const slideAnime = {
  initial: { x: -80 },

  slide: (i: number) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),

  exit: (i: number) => ({
    x: -80,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

const StagerdList: FC<StagerdListProps> = ({}) => {
  return (
    <motion.div variants={slideAnime}>
      {navList.map((nav, i) => (
        <motion.div
          variants={slideAnime}
          initial="initial"
          animate="slide"
          exit="exit"
          key={nav.name}
          custom={i}
        >
          <Link
            className={cn(
              "relative transition-all duration-200 ease-in-out hover:text-black",
            )}
            href={nav.location}
          >
            {nav.name}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StagerdList;
