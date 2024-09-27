"use client";

import { TeaserNewsGridFragment } from "@/graphql/types/generated";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { NewsCard } from "./news-card";
import { RevealButton } from "@/components/button/reveal-button";
import { FilterNews } from "@/components/filter/filter-news";

export const TeaserNewsGrid = ({
  newsCards,
  showFilter,
}: TeaserNewsGridFragment) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [typesOfNews, setTypesOfNews] = useState<string[]>([]);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  useEffect(() => {
    let typesOfNewsList: string[] = [];
    newsCards.map((newsCard) => {
      typesOfNewsList = [...typesOfNewsList, newsCard.typeOfArticle];
    });
    setTypesOfNews(Array.from(new Set(typesOfNewsList)));
  }, [newsCards]);

  const teaserNewsGridClass = classNames({
    [styles.teaserNewsGrid]: true,
    container: true,
  });

  const filteredNewsCards = selectedFilter
    ? newsCards.filter((newsCard) => newsCard.typeOfArticle === selectedFilter)
    : newsCards;

  const visibleNewsCards = filteredNewsCards.slice(0, visibleCount);

  return (
    <>
      {showFilter && (
        <FilterNews
          typesOfNews={typesOfNews}
          setSelectedFilter={setSelectedFilter}
          selectedFilter={selectedFilter}
        />
      )}
      <section className={teaserNewsGridClass}>
        {visibleNewsCards?.map((newsCard) => (
          <NewsCard key={newsCard.id} {...newsCard} />
        ))}
        {newsCards.length > visibleCount && (
          <div className={styles.button}>
            <RevealButton text="Load more" onClick={handleLoadMore} />
          </div>
        )}
      </section>
    </>
  );
};
