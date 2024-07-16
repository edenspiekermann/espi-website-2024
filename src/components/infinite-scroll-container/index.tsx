import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface InfiniteScrollContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export const InfiniteScrollContainer = ({
  children,
  className,
}: InfiniteScrollContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const controls = useAnimation();

  const containerClass = classNames(styles.carouselContainer, className);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
      controls.start({
        x: -containerWidth,
        transition: { duration: 15, repeat: Infinity, ease: "linear" },
      });
    }
  }, [containerRef, controls, containerWidth]);

  return (
    <motion.div
      className={containerClass}
      ref={containerRef}
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() =>
        controls.start({
          x: -containerWidth,
          transition: { duration: 15, repeat: Infinity, ease: "linear" },
        })
      }
    >
      <motion.div className={styles.items} animate={controls}>
        {children}
      </motion.div>
      <motion.div className={styles.items} animate={controls}>
        {children}
      </motion.div>
    </motion.div>
  );
};

InfiniteScrollContainer.displayName = "InfiniteScrollContainer";
