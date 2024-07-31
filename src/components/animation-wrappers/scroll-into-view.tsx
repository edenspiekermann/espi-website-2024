import { motion } from "framer-motion";
import React, { useState } from "react";
import { ScrollIntoViewProps } from "./interfaces";

export const ScrollIntoView = ({
  children,
  isInView,
  scrollAmount = 25,
  duration = 0.2,
  delay = 0,
}: ScrollIntoViewProps) => {
  const [isCurtainHidden, setCurtainHidden] = useState(false);

  const initialStyles = {
    opacity: 0,
    y: scrollAmount,
    overflow: "hidden",
    display: "inline-block",
  };

  const animate = {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration,
      delay: delay,
    },
    overflow: "visible",
    // display: "none",
  };

  const curtainInitial = {
    y: 0,
    display: "inline-block",
    backgroundColor: "var(--color-white)",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  const curtainAnimate = {
    y: scrollAmount * 1.5,
    transition: {
      duration: duration,
      delay: delay,
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
          visibility: isCurtainHidden ? "hidden" : "visible",
        }}
        onAnimationComplete={() => {
          if (isInView) {
            setCurtainHidden(true);
          }
        }}
      />
      {children}
    </motion.span>
  );
};
