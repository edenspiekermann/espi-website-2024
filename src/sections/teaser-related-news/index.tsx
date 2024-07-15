import { Divider } from "@/components/divider/divider";
import { TeaserRelatedNewsFragment } from "@/graphql/types/generated";
import React from "react";
import { NewsCard } from "./news-card";
import styles from "./styles.module.scss";

export const TeaserRelatedNews = ({
  showDivider,
  divider,
  newsArticles,
}: TeaserRelatedNewsFragment) => {
  return (
    <section className={styles.teaserRelatedNews}>
      {showDivider && divider && <Divider {...divider} />}
      <div className="container">
        {newsArticles?.map((newsArticle) => (
          <NewsCard key={newsArticle.id} {...newsArticle} />
        ))}
      </div>
    </section>
  );
};
