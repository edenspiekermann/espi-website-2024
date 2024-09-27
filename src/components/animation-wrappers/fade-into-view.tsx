"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { AnimationWrapperProps } from "./interfaces";

export const FadeIntoView = ({
  children,
  delay = 0,
  duration = 0.2,
  amount = 0,
}: AnimationWrapperProps) => {
  const initialStyles = {
    opacity: 0,
  };

  const animate = {
    opacity: 1,
    transition: {
      duration: duration,
      delay: delay,
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: amount });

  return (
    <motion.div ref={ref} initial={initialStyles} animate={isInView && animate}>
      {children}
    </motion.div>
  );
};
