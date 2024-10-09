import { SocialMediaPostRecord } from "@/graphql/types/generated";
import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";
import { ScrollContext } from "@/components/infinite-scroll-container";

export const SocialMediaCard = ({
  title,
  shortDescription,
  thumbnailImage,
  publishedDate,
  postUrl,
  openInSameTab = false,
}: SocialMediaPostRecord) => {
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
    <a
      className={styles.articleCard}
      href={postUrl}
      onClick={handleClick}
      target={openInSameTab ? "_self" : "_blank"}
    >
      <div className={styles.media}>
        <Media {...(thumbnailImage as MediaProperties)} />
      </div>
      <div className={styles.textContent}>
        <p className={styles.publishedDate}>{publishedDateFormatted}</p>
        <p className={styles.text}>
          <span className={styles.title}>{`${title}: `}</span>
          <span className={styles.shortDescription}>{shortDescription}</span>
        </p>
      </div>
    </a>
  );
};
