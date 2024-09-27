"use client";

import React from "react";
import { ButtonProperties } from "./interfaces";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { ButtonArrowRight } from "./button-arrow-right";
import Link from "next/link";
import { ButtonArrowDownload } from "./button-arrow-download";
import { ScrollButton } from "./scroll-button";

export const Button = ({
  text,
  url,
  isInverted = false,
  slug,
  onClick,
  type,
}: ButtonProperties) => {
  const buttonClass = classNames({
    [styles.button]: true,
    [styles.inverted]: isInverted,
  });

  if (slug && type === "link") {
    return (
      <Link
        href={slug}
        scroll={false}
        title={text}
        className={buttonClass}
        aria-label={text}
      >
        <span className={styles.text}>{text}</span>
        <ButtonArrowRight />
      </Link>
    );
  }

  if (onClick && type === "link") {
    return (
      <button
        onClick={onClick}
        className={buttonClass}
        aria-label="Navigate to website"
      >
        <span className={styles.text}>{text}</span>
        <ButtonArrowRight />
      </button>
    );
  }

  if (type === "download") {
    return (
      <a href={url} className={buttonClass} aria-label="Download file">
        <span className={styles.text}>{text}</span>
        <ButtonArrowDownload />
      </a>
    );
  }

  {
    /* TODO - Implement scroll behavior on button */
  }
  if (type === "scroll") {
    return (
      <ScrollButton text={text} onClick={onClick} isInverted={isInverted} />
    );
  }

  return (
    <a href={url} className={buttonClass} aria-label="Navigate to website">
      <span className={styles.text}>{text}</span>
      <ButtonArrowRight />
    </a>
  );
};
