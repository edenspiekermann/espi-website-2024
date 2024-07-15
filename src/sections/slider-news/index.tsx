import { Divider } from "@/components/divider/divider";
import { SliderNewsFragment } from "@/graphql/types/generated";
import React from "react";
import { ArticleCard } from "./article-card";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const SliderNews = ({
  showDivider,
  divider,
  articles,
}: SliderNewsFragment) => {
  const containerClass = classNames({
    [styles.sliderNews]: true,
    container: true,
  });

  return (
    <section>
      {showDivider && divider && <Divider {...divider} />}
      <div className={containerClass}>
        <div className={styles.sliderContainer}>
          {articles?.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};
