"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { menuAnime, slideAnime } from "@/lib/Anime";
import Hilight from "@/Components/UI/Hilighted";
import { FaXmark } from "react-icons/fa6";
import { navList } from "@/lib/Contants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utlis";

type MobileNavProps = {
  toggleNavMenu: () => void;
};

const MobileNav: FC<MobileNavProps> = ({ toggleNavMenu }) => {
  const currentUrl = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{
        opacity: 0,
        x: 0,
        // backdropFilter: "blur-(0)",
        transition: {
          delay: 0.7,
        },
      }}
      className="fixed left-0 top-0 z-40 h-[100vh] w-[100vw] bg-primary bg-opacity-80 backdrop-blur-md"
      onClick={toggleNavMenu}
    >
      <motion.div
        variants={menuAnime}
        initial="initial"
        animate="enter"
        exit="exit"
        className="z-30 h-full w-[65%] bg-whtie p-4 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex justify-between">
          <Hilight>Nav Menu</Hilight>
          <FaXmark
            onClick={toggleNavMenu}
            className="h-6 w-6 fill-black transition-all ease-in-out active:scale-90"
          />
        </div>
        <nav className="text-lite_gray flex flex-col gap-3">
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
                  currentUrl === nav.location && "text-secondary",
                )}
                href={nav.location}
              >
                {nav.name}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </motion.div>
  );
};

export default MobileNav;
