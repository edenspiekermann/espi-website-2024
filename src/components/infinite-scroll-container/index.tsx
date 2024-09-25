import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { ScrollIntoView } from "../animation-wrappers/scroll-into-view";
import { useInView } from "framer-motion";
import classNames from "classnames";

interface InfiniteScrollContainerProps {
  children?: React.ReactNode;
}

export const InfiniteScrollContainer = ({
  children,
}: InfiniteScrollContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.65 });
  const [isGrabbing, setIsGrabbing] = useState(false);

  const carouselContainerStyles = classNames({
    [styles.carouselContainer]: true,
    [styles.grabbing]: isGrabbing,
  });

  useEffect(() => {
    let animationFrameId: number;
    const scrollSpeed = 0.75;

    const smoothScroll = () => {
      if (!isHovered && containerRef.current) {
        containerRef.current.scrollLeft += scrollSpeed;

        const maxScrollLeft = containerRef.current.scrollWidth / 3; // Since we duplicate the content

        if (containerRef.current.scrollLeft >= maxScrollLeft) {
          containerRef.current.scrollLeft -= maxScrollLeft;
        }
      }

      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    animationFrameId = requestAnimationFrame(smoothScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const handleScroll = () => {
    if (containerRef.current) {
      const maxScrollLeft = containerRef.current.scrollWidth / 3; // Since we duplicate the content

      if (containerRef.current.scrollLeft >= maxScrollLeft) {
        containerRef.current.scrollLeft -= maxScrollLeft;
      } else if (containerRef.current.scrollLeft <= 0) {
        containerRef.current.scrollLeft += maxScrollLeft;
      }
    }
  };

  const handleMouseDown = () => {
    setIsGrabbing(true);
  };

  const handleMouseUp = () => {
    setIsGrabbing(false);
  };

  const handleMouseLeave = () => {
    setIsGrabbing(false);
    setIsHovered(false);
  };

  return (
    <div
      className={carouselContainerStyles}
      ref={containerRef}
      onScroll={handleScroll}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div className={styles.edgeToEdgeContainer}>
        <ScrollIntoView isInView={isInView} scrollAmount={50} duration={0.3}>
          <div className={styles.items}>
            {children}
            {children}
            {children}
          </div>
        </ScrollIntoView>
      </div>
    </div>
  );
};

InfiniteScrollContainer.displayName = "InfiniteScrollContainer";
