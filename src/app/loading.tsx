import { preLoader } from "@/lib/Contants";
import Image from "next/image";
import React from "react";

function Loading() {
  return (
    <div className="fixed left-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-center bg-white">
      <div className="h-72 w-72 ">
        <Image
          src={preLoader}
          height={800}
          width={600}
          alt="loader animaction gif"
          className="h-full w-full"
        />
      </div>
      <h2>Loading...</h2>
    </div>
  );
}

export default Loading;
