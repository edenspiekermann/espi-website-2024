import React, { createContext, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { ScrollIntoView } from "../animation-wrappers/scroll-into-view";
import { useInView } from "framer-motion";
import classNames from "classnames";

export const ScrollContext = createContext({ wasDragging: false });

interface InfiniteScrollContainerProps {
  children?: React.ReactNode;
}

export const InfiniteScrollContainer = ({
  children,
}: InfiniteScrollContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.65 });
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [startX, setStartX] = useState(0); // Initial pointer down position
  const [scrollLeft, setScrollLeft] = useState(0); // Initial scroll position
  const [velocity, setVelocity] = useState(0); // Track velocity
  const lastX = useRef(0); // For tracking the pointer position change
  const lastTime = useRef(0); // For tracking the time between movements
  const [wasDragging, setWasDragging] = useState(false);

  const carouselContainerStyles = classNames({
    [styles.carouselContainer]: true,
    [styles.grabbing]: isGrabbing,
  });

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    const scrollSpeed = 0.5; // Allows for fractional speeds

    const smoothScroll = () => {
      if (itemsRef.current) {
        if (!isGrabbing) {
          setScrollPosition((prevPosition) => {
            const newPosition = prevPosition + scrollSpeed;
            const maxScrollLeft =
              (itemsRef.current?.offsetWidth &&
                itemsRef.current?.offsetWidth / 3) ??
              0;

            if (newPosition >= maxScrollLeft) {
              return newPosition - maxScrollLeft;
            }
            return newPosition;
          });
        }
      }
      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    smoothScroll(); // Start the loop

    return () => cancelAnimationFrame(animationFrameId);
  }, [isGrabbing]);

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault(); // Prevent text selection while dragging
    setIsGrabbing(true);
    setWasDragging(false);
    if (containerRef.current) {
      setStartX(e.pageX - containerRef.current.offsetLeft); // Track initial pointer down position
      setScrollLeft(containerRef.current.scrollLeft); // Track initial scroll position
    }
    lastX.current = e.pageX; // Reset for velocity tracking
    lastTime.current = Date.now();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isGrabbing || !containerRef.current) return;

    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX;
    containerRef.current.scrollLeft = scrollLeft - walk;

    if (Math.abs(walk) > 5) {
      setWasDragging(true);
    }

    // Calculate velocity based on the difference in position and time
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime.current;
    const deltaX = e.pageX - lastX.current;

    setVelocity(deltaX / deltaTime); // Set velocity (px/ms)
    lastX.current = e.pageX;
    lastTime.current = currentTime;
  };

  const handlePointerUp = () => {
    setIsGrabbing(false);
    if (velocity !== 0) {
      applyInertia(velocity); // Apply inertia after letting go
    }
    setTimeout(() => {
      setWasDragging(false);
    }, 0);
  };

  const handlePointerLeave = () => {
    setIsGrabbing(false);
  };

  const applyInertia = (initialVelocity: number) => {
    let currentVelocity = -initialVelocity; // Invert the direction of the velocity
    const friction = 0.95; // Friction to slow down the scrolling

    const scrollInertia = () => {
      if (!containerRef.current) return;

      containerRef.current.scrollLeft += currentVelocity * 20; // Multiply for noticeable inertia

      // Apply friction to gradually slow down
      currentVelocity *= friction;

      if (Math.abs(currentVelocity) > 0.1) {
        requestAnimationFrame(scrollInertia); // Continue until velocity is low
      }
    };

    scrollInertia();
  };

  return (
    <ScrollContext.Provider value={{ wasDragging }}>
      <div
        className={carouselContainerStyles}
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerLeave}
      >
        <ScrollIntoView isInView={isInView} scrollAmount={50} duration={0.3}>
          <div
            className={styles.items}
            ref={itemsRef}
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {children}
            {children}
            {children}
          </div>
        </ScrollIntoView>
      </div>
    </ScrollContext.Provider>
  );
};

InfiniteScrollContainer.displayName = "InfiniteScrollContainer";
