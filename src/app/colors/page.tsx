import StagerdList from "@/Components/UI/StagerdList";
import { cn } from "@/lib/utlis";
import React from "react";

function Colors() {
  const colors = [
    "primary",
    "secondary",
    "whtie",
    "gray_lite",
    "black_greay",
    "white_cold",
  ];

  return (
    <div className="flex flex-wrap gap-5">
      {colors.map((color) => (
        <div key={color} className="flex flex-col items-center justify-center">
          <div
            className={cn(
              "h-20 w-20 rounded-full border-red-400 shadow-xl",
              `bg-${color}`,
            )}
          ></div>
          <p className="font-semibold">{color}</p>
        </div>
      ))}
      <div className="block w-full">
        <StagerdList />
      </div>
    </div>
  );
}

export default Colors;
