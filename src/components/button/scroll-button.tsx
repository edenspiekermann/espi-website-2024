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
    [styles.scrollButton]: true,
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent the default anchor behavior
    if (onClick) {
      onClick();
    }
    const targetId = url?.startsWith("#") ? url.substring(1) : url;
    const targetElement = document.getElementById(targetId!);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link href={url || ""} className={buttonClass} onClick={handleClick}>
      <ButtonArrowDown />
      <span className={styles.text}>{text}</span>
      <ButtonArrowDown />
    </Link>
  );
};
