import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.scss";

interface InfiniteScrollContainerProps {
  children?: React.ReactNode;
}

export const InfiniteScrollContainer = ({
  children,
}: InfiniteScrollContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const controls = useAnimation();
  const [duration, setDuration] = useState(25);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current && containerRef.current) {
        const containerWidth =
          containerRef.current.getBoundingClientRect().width;
        const contentWidth = contentRef.current.getBoundingClientRect().width;
        setContentWidth(contentWidth);

        const ratio = contentWidth / containerWidth;
        let baseDuration;
        if (window.innerWidth < 768) {
          baseDuration = 10;
        } else if (window.innerWidth < 1024) {
          baseDuration = 20;
        } else {
          baseDuration = 25;
        }
        setDuration(baseDuration * ratio);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (contentWidth > 0) {
      controls.start({
        x: -contentWidth / 2,
        transition: {
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        },
      });
    }
  }, [contentWidth, duration, controls]);

  return (
    <motion.div
      className={styles.carouselContainer}
      ref={containerRef}
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() =>
        controls.start({
          x: -contentWidth / 2,
          transition: {
            duration,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        })
      }
    >
      <motion.div
        className={styles.items}
        animate={controls}
        ref={contentRef}
        style={{ display: "flex" }}
      >
        {children}
        {children}
      </motion.div>
    </motion.div>
  );
};

InfiniteScrollContainer.displayName = "InfiniteScrollContainer";
