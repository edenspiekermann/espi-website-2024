import React from "react";
import { ButtonProperties } from "./interfaces";
import { ButtonArrowDown } from "./button-arrow-down";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const ScrollButton = ({
  text,
  onClick,
  isInverted = false,
}: ButtonProperties) => {
  const buttonClass = classNames({
    [styles.button]: true,
    [styles.inverted]: isInverted,
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      <span className={styles.text}>{text}</span>
      <ButtonArrowDown />
    </button>
  );
};
