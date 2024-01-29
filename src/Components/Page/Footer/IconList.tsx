"use client";
import { socialLinks } from "@/lib/Contants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function IconList() {
  return (
    <ul className="flex gap-3">
      {socialLinks.map((social) => (
        <motion.li whileHover={{ scale: 1.2 }} key={social.name}>
          <Link href={social.link}>
            <div className="h-10 w-10 rounded-full bg-white p-1">
              <Image
                src={social.logo}
                height={20}
                width={20}
                alt={social.name}
              />
            </div>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}

export default IconList;
