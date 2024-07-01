"use client";

import React from "react";
import { ButtonProperties } from "./interfaces";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { ButtonArrowRight } from "./button-arrow-right";

export const Button = ({ text, url, isInverted = false }: ButtonProperties) => {
  const buttonClass = classNames({
    [styles.button]: true,
    [styles.inverted]: isInverted,
  });

  return (
    <a href={url} className={buttonClass} aria-label="Navigate to website">
      <span className={styles.text}>{text}</span>
      <ButtonArrowRight />
    </a>
  );
};
