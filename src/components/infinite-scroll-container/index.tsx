import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.scss";
<<<<<<< HEAD
import classNames from "classnames";

interface InfiniteScrollContainerProps {
  children?: React.ReactNode;
  className?: string;
=======

interface InfiniteScrollContainerProps {
  children?: React.ReactNode;
>>>>>>> develop
}

export const InfiniteScrollContainer = ({
  children,
<<<<<<< HEAD
  className,
=======
>>>>>>> develop
}: InfiniteScrollContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const controls = useAnimation();

<<<<<<< HEAD
  const containerClass = classNames(styles.carouselContainer, className);

=======
>>>>>>> develop
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
<<<<<<< HEAD
      className={containerClass}
=======
      className={styles.carouselContainer}
>>>>>>> develop
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
