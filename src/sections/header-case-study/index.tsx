"use client";

import React, { useEffect, useState } from "react";
import { HeaderCaseStudyProperties } from "./interfaces";
import { Media } from "@/components/media";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { ScrollIntoViewText } from "@/components/scroll-into-view-text";
import { FadeIntoView } from "@/components/animation-wrappers/fade-into-view";
import { ScrollIntoView } from "@/components/animation-wrappers/scroll-into-view";

export const HeaderCaseStudy = ({
  title,
  subtitle,
  backgroundColor,
  featuredMedia,
  inverted,
}: HeaderCaseStudyProperties) => {
  const headerCaseStudyClass = classNames({
    [styles.headerCaseStudy]: true,
    [styles.inverted]: inverted,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={headerCaseStudyClass} style={{ backgroundColor }}>
      <div className="container">
        <h1 className={styles.title}>
          <ScrollIntoViewText
            text={title}
            isInView={isLoaded}
            duration={0.2}
            backgroundColor={backgroundColor}
          />
        </h1>

        <h2 className={styles.subtitle}>
          <FadeIntoView isInView={isLoaded} delay={0.2}>
            {subtitle}
          </FadeIntoView>
        </h2>
        <ScrollIntoView
          fade
          isInView={isLoaded}
          delay={0.4}
          className={styles.media}
          scrollAmount={100}
        >
          <Media {...featuredMedia} />
        </ScrollIntoView>
      </div>
    </div>
  );
};
