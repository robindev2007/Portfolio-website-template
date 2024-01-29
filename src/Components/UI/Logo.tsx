import { mainLogoSrc } from "@/lib/Contants";
import { cn } from "@/lib/utlis";
import Image from "next/image";
import React from "react";

function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("h-10 w-fit", className)}>
      <Image
        src={mainLogoSrc}
        height={200}
        width={100}
        alt="code robin website logo"
      />
    </div>
  );
}

export default Logo;
