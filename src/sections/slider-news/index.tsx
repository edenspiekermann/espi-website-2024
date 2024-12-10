"use client";

import { Divider } from "@/components/divider/divider";
import { SliderNewsFragment } from "@/graphql/types/generated";
import React from "react";
import { ArticleCard } from "./article-card";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { InfiniteScrollContainer } from "@/components/infinite-scroll-container";
import { SocialMediaCard } from "./social-media-card";

export const SliderNews = ({
  showDivider,
  divider,
  articles,
  posts,
}: SliderNewsFragment) => {
  const cards = [...articles, ...posts].sort((a, b) => {
    const dateA = a.publishedDate ? new Date(a.publishedDate).getTime() : 0;
    const dateB = b.publishedDate ? new Date(b.publishedDate).getTime() : 0;

    return dateB - dateA;
  });

  const cardSwitch = (card: any) => {
    switch (card.__typename) {
      case "NewsArticleRecord":
        return <ArticleCard key={card.id} {...card} />;
      case "SocialMediaPostRecord":
        return <SocialMediaCard key={card.id} {...card} />;
      default:
        return null;
    }
  };

  return (
    <section className={styles.sliderNews}>
      {showDivider && divider && <Divider {...divider} />}
      <div className={styles.slider}>
        <InfiniteScrollContainer>
          {cards?.map((article) => cardSwitch(article))}
        </InfiniteScrollContainer>
      </div>
    </section>
  );
};
