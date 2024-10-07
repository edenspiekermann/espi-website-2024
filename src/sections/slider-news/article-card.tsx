import { SliderNewsCardFragment } from "@/graphql/types/generated";
import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";
import Link from "next/link";
import { ScrollContext } from "@/components/infinite-scroll-container";
export const ArticleCard = ({
  title,
  shortDescription,
  cardImage,
  publishedDate,
  slug,
}: SliderNewsCardFragment) => {
  const { wasDragging } = useContext(ScrollContext);
  const handleClick = (e: React.MouseEvent) => {
    if (wasDragging) {
      e.preventDefault(); // Prevent navigation if dragging
    }
  };

  const publishedDateFormatted = new Date(
    publishedDate as string,
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <Link
      className={styles.articleCard}
      href={`/news/${slug}`}
      onClick={handleClick}
    >
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
    </Link>
  );
};
