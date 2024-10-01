"use client";

import { SpacerFragment } from "@/graphql/types/generated";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

export const Spacer = ({
  desktopSpaceAmount,
  tabletSpaceAmount,
  mobileSpaceAmount,
  backgroundColor = "transparent",
}: SpacerFragment) => {
  const [height, setHeight] = useState(desktopSpaceAmount);

  useEffect(() => {
    // Media queries for each Spacer instance
    const updateHeight = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setHeight(desktopSpaceAmount);
      } else if (window.matchMedia("(min-width: 680px)").matches) {
        setHeight(tabletSpaceAmount ?? desktopSpaceAmount);
      } else {
        setHeight(mobileSpaceAmount ?? tabletSpaceAmount ?? desktopSpaceAmount);
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, [desktopSpaceAmount, tabletSpaceAmount, mobileSpaceAmount]);

  return <div className={styles[backgroundColor!]} style={{ height }} />;
};
