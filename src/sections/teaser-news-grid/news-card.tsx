import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";
import { NewsArticleFragment } from "@/graphql/types/generated";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";
import { Tag } from "@/components/tag";
import classNames from "classnames";

interface CardProperties extends NewsArticleFragment {
  applyFilterActiveFade?: boolean;
}

export const NewsCard = ({
  title,
  cardImage,
  slug,
  typeOfArticle,
  applyFilterActiveFade,
}: CardProperties) => {
  const cardClass = classNames({
    [styles.card]: true,
    [styles.filterActiveFade]: applyFilterActiveFade,
  });
  return (
    <Link href={`/news/${slug}`} title={title} className={cardClass}>
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
