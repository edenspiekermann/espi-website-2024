"use client";

import { TeaserNewsGridFragment } from "@/graphql/types/generated";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { NewsCard } from "./news-card";
import { RevealButton } from "@/components/button/reveal-button";

export const TeaserNewsGrid = ({ newsCards }: TeaserNewsGridFragment) => {
  const [visibleCount, setVisibleCount] = useState(12);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const teaserNewsGridClass = classNames({
    [styles.teaserNewsGrid]: true,
    container: true,
  });
  return (
    <section className={teaserNewsGridClass}>
      {newsCards?.map((newsCard) => (
        <NewsCard key={newsCard.id} {...newsCard} />
      ))}
      {newsCards.length > visibleCount && (
        <div className={styles.button}>
          <RevealButton text="Load more" onClick={handleLoadMore} />
        </div>
      )}
    </section>
  );
};
