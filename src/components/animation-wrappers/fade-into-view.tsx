"use client";

import { motion } from "framer-motion";
import React from "react";
import { AnimationWrapperProps } from "./interfaces";

export const FadeIntoView = ({
  children,
  isInView,
  delay = 0,
  duration = 0.2,
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

  return (
    <motion.div initial={initialStyles} animate={isInView && animate}>
      {children}
    </motion.div>
  );
};
