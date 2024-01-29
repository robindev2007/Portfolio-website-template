import React from "react";
import Logo from "@/Components/UI/Logo";
import Button from "@/Components/UI/Button";
import { FaLongArrowAltUp } from "react-icons/fa";
import { navList, socialLinks } from "@/lib/Contants";
import Image from "next/image";
import Link from "next/link";
import IconList from "./IconList";
import Animator from "@/Components/UI/Animator";
import Hilight from "@/Components/UI/Hilighted";

function Footer() {
  const footerList = [
    {
      heading: "FAQ",
      link: "#",
    },
    {
      heading: "Careers",
      link: "#",
    },
    {
      heading: "Contact Us",
      link: "#",
    },
  ];

  return (
    <Animator
      once
      animate="Botton-Top"
      className="border-t border-primary border-opacity-20 bg-whtie py-2"
    >
      <div className="container flex items-center justify-between">
        <Logo />
        <div className="text-center font-Rubik text-xs">
          <p>©2024 RobinCoder is Produly Proverd by </p>
          <Hilight>ROBIN</Hilight>
        </div>
        <div className="flex gap-3 text-xs">
          {footerList.map((list, i) => (
            <Link key={list.heading + i} href={list.link}>
              {list.heading}
            </Link>
          ))}
        </div>
      </div>
    </Animator>
  );
}

export default Footer;
