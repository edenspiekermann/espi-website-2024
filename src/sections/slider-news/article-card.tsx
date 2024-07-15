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
  return (
    <div className={styles.articleCard}>
      <div className={styles.media}>
        <Media {...(cardImage as MediaProperties)} />
      </div>
      <div className={styles.textContent}>
        <p className={styles.publishedDate}>{publishedDate}</p>
        <p className={styles.text}>
          <span className={styles.title}>{`${title}: `}</span>
          <span className={styles.shortDescription}>{shortDescription}</span>
        </p>
      </div>
    </div>
  );
};
