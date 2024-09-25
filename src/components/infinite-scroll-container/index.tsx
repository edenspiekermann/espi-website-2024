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
  const [startX, setStartX] = useState(0); // Track initial click position
  const [scrollLeft, setScrollLeft] = useState(0); // Track initial scroll position

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

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent text selection while dragging
    setIsGrabbing(true);
    if (containerRef.current) {
      setStartX(e.pageX - containerRef.current.offsetLeft); // Track initial click position
      setScrollLeft(containerRef.current.scrollLeft); // Track initial scroll position
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isGrabbing || !containerRef.current) return;

    const x = e.pageX - containerRef.current.offsetLeft; // Current mouse position
    const walk = x - startX; // Multiplied by 2 for faster scroll
    containerRef.current.scrollLeft = scrollLeft - walk; // Set the new scroll position
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
      onMouseMove={handleMouseMove} // Handle mouse movement
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
