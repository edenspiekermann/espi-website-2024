import React from "react";
import { ButtonProperties } from "./interfaces";
import { ButtonPlusSign } from "./button-plus";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const RevealButton = ({
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
      <ButtonPlusSign />
    </button>
  );
};
