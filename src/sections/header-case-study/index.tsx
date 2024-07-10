import React from "react";
import { HeaderCaseStudyProperties } from "./interfaces";
import { Media } from "@/components/media";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const HeaderCaseStudy = ({
  title,
  subtitle,
  backgroundColor,
  featuredMedia,
  inverted,
}: HeaderCaseStudyProperties) => {
  const headerCaseStudyClass = classNames({
    [styles.headerCaseStudy]: true,
    [styles.inverted]: inverted,
  });
  return (
    <div className={headerCaseStudyClass} style={{ backgroundColor }}>
      <div className="container">
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <div className={styles.media}>
          <Media {...featuredMedia} />
        </div>
      </div>
    </div>
  );
};
