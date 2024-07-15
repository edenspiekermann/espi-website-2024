import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";
import { NewsArticleFragment } from "@/graphql/types/generated";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";
import { Tag } from "@/components/tag";

export const NewsCard = ({
  title,
  cardImage,
  slug,
  typeOfArticle,
}: NewsArticleFragment) => {
  return (
    <Link href={`/news/${slug}`} title={title} className={styles.card}>
      <div className={styles.media}>
        <Media {...(cardImage as MediaProperties)} />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <Tag text={typeOfArticle} />
      </div>
    </Link>
  );
};
