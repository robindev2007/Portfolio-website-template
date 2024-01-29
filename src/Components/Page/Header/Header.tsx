"use client";
import { navList } from "@/lib/Contants";
import Link from "next/link";
import React, { useState } from "react";
import Button from "@/Components/UI/Button";
import { cn } from "@/lib/utlis";
import { usePathname } from "next/navigation";
import { FaBars, FaXmark } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import MobileNav from "./MobileNav";
import { slideDown } from "@/lib/Anime";
import Logo from "@/Components/UI/Logo";

function Header() {
  const [navActive, setNavActive] = useState(false);
  const currentUrl = usePathname();

  const toggleNavMenu = () => {
    setNavActive((prev) => !prev);
  };

  return (
    <>
      <motion.div
        variants={slideDown}
        initial="initial"
        animate="animate"
        className="sticky left-0 top-0 z-20 border-b border-primary border-opacity-20 bg-slate-300 bg-opacity-10 backdrop-blur-md"
      >
        <div className="container flex items-center justify-between gap-2 py-2">
          <Logo />

          <nav className="text-lite_gray hidden gap-3 md:flex">
            {navList.map((nav) => (
              <Link
                className={cn(
                  "relative transition-all duration-300 ease-in-out hover:scale-105 hover:text-black",
                  currentUrl === nav.location && "text-secondary",
                )}
                key={nav.location}
                href={nav.location}
              >
                {nav.name}
              </Link>
            ))}
          </nav>

          <Button variant="Outline" className="ml-auto md:ml-0">
            <Link href={"/contact"}>Contact Me</Link>
          </Button>

          <FaBars
            onClick={toggleNavMenu}
            className="h-6 w-6 fill-black transition-all ease-in-out active:scale-90 md:hidden"
          />
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {navActive && <MobileNav toggleNavMenu={toggleNavMenu} />}
      </AnimatePresence>
    </>
  );
}

export default Header;
