"use client";

import React from "react";
import { ButtonProperties } from "./interfaces";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { ButtonArrowRight } from "./button-arrow-right";
import Link from "next/link";
import { ButtonArrowDownload } from "./button-arrow-download";
import { ScrollButton } from "./scroll-button";
import { ButtonArrowLinkOut } from "./button-arrow-link-out";

export const Button = ({
  text,
  url,
  isInverted = false,
  slug,
  onClick,
  type,
  replace,
}: ButtonProperties) => {
  const buttonClass = classNames({
    [styles.button]: true,
    [styles.inverted]: isInverted,
  });

  const iconSwitch = (type?: ButtonProperties["type"]) => {
    switch (type) {
      case "link":
        return <ButtonArrowRight />;
      case "download":
        return <ButtonArrowDownload />;
      case "external":
        return <ButtonArrowLinkOut />;
      default:
        return <ButtonArrowRight />;
    }
  };

  if (slug) {
    return (
      <Link
        href={slug.startsWith("/") ? slug : `/${slug}`}
        scroll={true}
        title={text}
        className={buttonClass}
        aria-label={text}
        replace={replace}
        onClick={onClick || undefined}
      >
        {iconSwitch(type)}
        <span className={styles.text}>{text}</span>
        {iconSwitch(type)}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={buttonClass}
        aria-label="Navigate to website"
      >
        {iconSwitch(type)}
        <span className={styles.text}>{text}</span>
        {iconSwitch(type)}
      </button>
    );
  }

  if (type === "scroll") {
    return (
      <ScrollButton
        text={text}
        url={url}
        onClick={onClick}
        isInverted={isInverted}
      />
    );
  }

  return (
    <a href={url} className={buttonClass} aria-label={text} target="_blank">
      {iconSwitch(type)}
      <span className={styles.text}>{text}</span>
      {iconSwitch(type)}
    </a>
  );
};
