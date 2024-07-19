import { SliderNewsCardFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";
import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";

export const ArticleCard = ({
  title,
  shortDescription,
  cardImage,
  publishedDate,
}: SliderNewsCardFragment) => {
  const publishedDateFormatted = new Date(
    publishedDate as string,
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  return (
    <div className={styles.articleCard}>
      <div className={styles.media}>
        <Media {...(cardImage as MediaProperties)} />
      </div>
      <div className={styles.textContent}>
        <p className={styles.publishedDate}>{publishedDateFormatted}</p>
        <p className={styles.text}>
          <span className={styles.title}>{`${title}: `}</span>
          <span className={styles.shortDescription}>{shortDescription}</span>
        </p>
      </div>
    </div>
  );
};
