"use client";

import { Divider } from "@/components/divider/divider";
import { SliderNewsFragment } from "@/graphql/types/generated";
import React, { useRef } from "react";
import { ArticleCard } from "./article-card";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { InfiniteScrollContainer } from "@/components/infinite-scroll-container";

export const SliderNews = ({
  showDivider,
  divider,
  articles,
}: SliderNewsFragment) => {
  const containerClass = classNames({
    [styles.sliderNews]: true,
    container: true,
  });

  const sliderContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section>
      {showDivider && divider && <Divider {...divider} />}
      <div className={containerClass}>
        <InfiniteScrollContainer
          ref={sliderContainerRef}
          className={styles.sliderContainer}
        >
          {articles?.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </InfiniteScrollContainer>
      </div>
    </section>
  );
};
