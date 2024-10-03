import React from "react";
import { ButtonProperties } from "./interfaces";
import { ButtonArrowDown } from "./button-arrow-down";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Link from "next/link";

export const ScrollButton = ({
  text,
  onClick,
  isInverted = false,
  url,
}: ButtonProperties) => {
  const buttonClass = classNames({
    [styles.button]: true,
    [styles.inverted]: isInverted,
  });

  return (
    <Link href={url || ""} className={buttonClass} onClick={onClick}>
      <span className={styles.text}>{text}</span>
      <ButtonArrowDown />
    </Link>
  );
};
