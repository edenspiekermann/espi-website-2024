import { motion, useMotionValue } from "framer-motion";
import React, { useEffect, useState, forwardRef } from "react";

interface InfiniteScrollContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export const InfiniteScrollContainer = forwardRef<
  HTMLDivElement,
  InfiniteScrollContainerProps
>(({ children, className }, ref) => {
  const x = useMotionValue(0);
  const [sliderWidth, setSliderWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref && "current" in ref && ref.current !== null) {
        const sliderContainer = ref.current as HTMLDivElement;
        if (sliderContainer.scrollLeft <= 0) {
          sliderContainer.scrollLeft = sliderContainer.scrollWidth / 2;
        } else if (
          sliderContainer.scrollLeft + sliderContainer.clientWidth >=
          sliderContainer.scrollWidth
        ) {
          sliderContainer.scrollLeft =
            sliderContainer.scrollWidth / 2 - sliderContainer.clientWidth;
        }
      }
    };

    if (ref && "current" in ref && ref.current !== null) {
      const sliderContainer = ref.current as HTMLDivElement;
      setSliderWidth(sliderContainer.scrollWidth);
      sliderContainer.addEventListener("scroll", handleScroll);

      return () => {
        sliderContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, [children, ref]);

  const handleDragEnd = (
    sliderContainerRef: React.RefObject<HTMLDivElement>,
  ) => {
    if (sliderContainerRef.current !== null) {
      const sliderContainer = sliderContainerRef.current;
      if (sliderContainer.scrollLeft <= 0) {
        sliderContainer.scrollLeft = sliderContainer.scrollWidth / 2;
      } else if (
        sliderContainer.scrollLeft + sliderContainer.clientWidth >=
        sliderContainer.scrollWidth
      ) {
        sliderContainer.scrollLeft =
          sliderContainer.scrollWidth / 2 - sliderContainer.clientWidth;
      }
    }
  };

  const dragConstraints = {
    left: sliderWidth ? -sliderWidth / 2 : 0,
    right: 0,
  };

  return (
    <motion.div
      className={className}
      ref={ref}
      style={{ x }}
      drag="x"
      dragConstraints={dragConstraints}
      onDragEnd={() => handleDragEnd(ref as React.RefObject<HTMLDivElement>)}
    >
      {children}
      {children}
    </motion.div>
  );
});

InfiniteScrollContainer.displayName = "InfiniteScrollContainer";
