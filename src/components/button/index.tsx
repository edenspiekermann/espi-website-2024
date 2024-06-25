"use client";

import React from "react";
import { ButtonProperties } from "./interfaces";
import "./styles.scss";
import classNames from "classnames";
import { ButtonArrowRight } from "./button-arrow-right";
import { ButtonPlusSign } from "./button-plus";
import { ButtonArrowDown } from "./button-arrow-down";

export const Button = ({
  text,
  url,
  onClick,
  isInverted = false,
  isRevealButton,
  isScrollButton,
}: ButtonProperties) => {
  const buttonClass = classNames({
    button: true,
    "button--inverted": isInverted,
  });

  if (url) {
    return (
      <a href={url} className={buttonClass} aria-label="Navigate to website">
        <span className="button__text">{text}</span>
        <ButtonArrowRight />
      </a>
    );
  }

  if (isRevealButton) {
    return (
      <button className={buttonClass} onClick={onClick}>
        <span className="button__text">{text}</span>
        <ButtonPlusSign />
      </button>
    );
  }

  if (isScrollButton) {
    return (
      <button className={buttonClass} onClick={onClick}>
        <span className="button__text">{text}</span>
        <ButtonArrowDown />
      </button>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      <span className="button__text">{text}</span>
    </button>
  );
};
