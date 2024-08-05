"use client";

import { TextRecord } from "@/graphql/types/generated";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styles from "./footer.module.scss";

export const AnimatedFooterTitle = ({
  title,
  loopingTitleText,
}: {
  title: string;
  loopingTitleText: TextRecord[];
}) => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhrase(
        (prevPhrase: number) => (prevPhrase + 1) % loopingTitleText.length,
      );
    }, 2000); // This duration should match the animation's duration

    return () => clearInterval(intervalId);
  }, [loopingTitleText.length]);

  const animationVariants = {
    initial: {
      opacity: 0,
      x: 20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: [0, 0, 0.58, 1] },
    },
    exit: {
      opacity: 0,
      x: -80,
      transition: { duration: 0.3, ease: [0, 0, 0.58, 1] },
    },
  };
  return (
    <div>
      <p>{title}</p>
      <motion.p
        key={loopingTitleText[currentPhrase].id}
        variants={animationVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={styles.animatedText}
      >
        {loopingTitleText[currentPhrase].text}
      </motion.p>
    </div>
  );
};
