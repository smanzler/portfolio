import { Slot } from "@radix-ui/react-slot";
import { motion, type MotionProps } from "motion/react";

const AccentShadowContainer = ({
  children,
  className,
  asChild,
  hoverOffset = 8,
  ...props
}: MotionProps & {
  className?: string;
  asChild?: boolean;
  hoverOffset?: number;
}) => {
  const MotionSlot = motion(Slot);
  const Comp = asChild ? MotionSlot : motion.div;

  return (
    <Comp
      whileHover={{
        x: hoverOffset,
        y: -hoverOffset,
        boxShadow: `-${hoverOffset}px ${hoverOffset}px 0 0 #ff7300`,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className={className}
      {...props}
    >
      {children}
    </Comp>
  );
};

export default AccentShadowContainer;
