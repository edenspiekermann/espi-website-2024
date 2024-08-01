import { motion } from "framer-motion";
import React from "react";
import { ScrollIntoViewProps } from "./interfaces";

export const ScrollIntoView = ({
  children,
  isInView,
  scrollAmount = 25,
  duration = 0.2,
  delay = 0,
}: ScrollIntoViewProps) => {
  const initialStyles = {
    y: scrollAmount,
    overflow: "hidden",
    display: "inline-block",
  };

  const animate = {
    y: 0,
    transition: {
      duration: duration,
      delay: delay,
      ease: [0.01, 0.71, 0.28, 1],
    },
    overflow: "visible",
  };

  const curtainInitial = {
    scaleY: 1,
    y: 0,
    display: "inline-block",
    backgroundColor: "var(--color-white)",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  const curtainAnimate = {
    scaleY: 0,
    y: scrollAmount * 1.5,
    transition: {
      duration: duration,
      delay: delay,
      ease: [0.01, 0.71, 0.28, 1],
    },
    display: "none",
  };

  return (
    <motion.span
      initial={initialStyles}
      animate={isInView && animate}
      style={{
        position: "relative",
      }}
    >
      <motion.span
        initial={curtainInitial}
        animate={isInView && curtainAnimate}
        style={{
          position: "absolute",
        }}
      />
      {children}
    </motion.span>
  );
};
