"use client";

import React from "react";
import { ButtonProperties } from "./interfaces";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { ButtonArrowRight } from "./button-arrow-right";
import Link from "next/link";

export const Button = ({
  text,
  url,
  isInverted = false,
  slug,
}: ButtonProperties) => {
  const buttonClass = classNames({
    [styles.button]: true,
    [styles.inverted]: isInverted,
  });

  if (slug) {
    return (
      <Link
        href={slug}
        title={text}
        className={buttonClass}
        aria-label="Navigate to website"
      >
        <span className={styles.text}>{text}</span>
        <ButtonArrowRight />
      </Link>
    );
  }
  return (
    <a href={url} className={buttonClass} aria-label="Navigate to website">
      <span className={styles.text}>{text}</span>
      <ButtonArrowRight />
    </a>
  );
};
