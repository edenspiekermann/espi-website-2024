import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { ScrollIntoView } from "../animation-wrappers/scroll-into-view";
import { useInView } from "framer-motion";

interface InfiniteScrollContainerProps {
  children?: React.ReactNode;
}

export const InfiniteScrollContainer = ({
  children,
}: InfiniteScrollContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.65 });

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

  return (
    <div
      className={styles.carouselContainer}
      ref={containerRef}
      onScroll={handleScroll}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ScrollIntoView isInView={isInView} scrollAmount={50} duration={0.3}>
        <div className={styles.items}>
          {children}
          {children}
          {children}
        </div>
      </ScrollIntoView>
    </div>
  );
};

InfiniteScrollContainer.displayName = "InfiniteScrollContainer";
