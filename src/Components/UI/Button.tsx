"use client";
import { cn } from "@/lib/utlis";
import { ButtonHTMLAttributes, FC, ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { scalUp } from "@/lib/Anime";

type ButtonProps = {
  children?: ReactNode | ReactNode[];
  className?: string;
  variant?: "Default" | "Ghost" | "Outline";
  animateOnce?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant,
  animateOnce,
  ...props
}) => {
  const getVariant = (variant: "Default" | "Ghost" | "Outline") => {
    switch (variant) {
      case "Ghost":
        return "";
      case "Outline":
        return "border-black_greay text-black rounded-full border-2";
      case "Default":
        return "text-white bg-black_greay rounded-full";
      default:
        return "text-white bg-black_greay rounded-full";
    }
  };

  const customClass = cn(
    "flex h-9 w-fit items-center no-warp px-5",
    // className,
    variant ? getVariant(variant) : getVariant("Default")
  );

  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.1, opacity: 0, y: 0 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className={cn(
        !variant || variant === "Default"
          ? "flex items-center justify-center text-nowrap rounded-full"
          : "bg-transparent p-0",
        className
      )}>
      <button className={customClass} {...props}>
        {children}
      </button>
    </motion.div>
  );
};

export default Button;
