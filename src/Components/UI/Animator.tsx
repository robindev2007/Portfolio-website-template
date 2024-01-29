"use client";
import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { scalUp, slideDown, slideLeft, slideRight, slideUp } from "@/lib/Anime";
import { cn } from "@/lib/utlis";

type animateTypes =
  | "Top-Bottom"
  | "Botton-Top"
  | "Left-Right"
  | "Right-Left"
  | "Scale-Up";

type AnimatorProps = {
  children: any;
  className?: string;
  animate?: animateTypes;
  once?: boolean;
  whileInView?: boolean;
};

const Animator: FC<AnimatorProps> = ({
  children,
  className,
  animate,
  once,
  whileInView,
}) => {
  const getVariant = (variant: animateTypes) => {
    switch (variant) {
      case "Top-Bottom":
        return slideDown;
      case "Scale-Up":
        return scalUp;
      case "Botton-Top":
        return slideUp;
      case "Left-Right":
        return slideRight;
      case "Right-Left":
        return slideLeft;

      default:
        return slideDown;
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  return (
    <motion.div
      ref={ref}
      variants={animate ? getVariant(animate) : slideDown}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      // whileInView={"animate"}
      // viewport={{ once: true }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default Animator;
