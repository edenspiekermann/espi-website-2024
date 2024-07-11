"use client";

import { TeaserCaseGridFragment } from "@/graphql/types/generated";
import React, { useState } from "react";
import { GridCard } from "./card";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { RevealButton } from "@/components/button/reveal-button";

export const TeaserCaseGrid = ({ caseStudies }: TeaserCaseGridFragment) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };
  const teaserCaseGridClass = classNames({
    [styles.teaserCaseGrid]: true,
    container: true,
  });
  return (
    <section className={teaserCaseGridClass}>
      {caseStudies?.slice(0, visibleCount).map((caseStudy, index) => {
        return (
          <GridCard
            key={caseStudy.id}
            {...caseStudy}
            visible={index < visibleCount}
          />
        );
      })}
      {caseStudies.length > visibleCount && (
        <div className={styles.button}>
          <RevealButton text="Load more" onClick={handleLoadMore} />
        </div>
      )}
    </section>
  );
};
