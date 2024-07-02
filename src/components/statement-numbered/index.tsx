import { StatementNumberedFragment } from "@/graphql/types/generated";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const StatementNumbered = ({
  numberImage,
  title,
  subtitle,
}: StatementNumberedFragment) => {
  const statementNumeberedClass = classNames({
    [styles.statementNumbered]: true,
    container: true,
  });
  const { src, alt } = numberImage.responsiveImage!;

  return (
    <div className={statementNumeberedClass}>
      <div className={styles.imageContainer}>
        <Image src={src} alt={alt || ""} fill className={styles.image} />
      </div>
      <div className={styles.textContent}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};
