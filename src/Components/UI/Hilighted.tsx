import { cn } from "@/lib/utlis";
import { FC, HTMLAttributes, ReactNode } from "react";

type HilightProps = HTMLAttributes<HTMLParagraphElement> & {
  children?: ReactNode;
  className?: string;
};

const Hilight: FC<HilightProps> = ({ children, className, ...props }) => {
  return (
    <span
      className={cn("inline-block font-semibold text-secondary", className)}
      {...props}
    >
      {children}
    </span>
  );
};

export default Hilight;
