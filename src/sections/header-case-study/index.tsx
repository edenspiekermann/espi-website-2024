import React from "react";
import { HeaderCaseStudyProperties } from "./interfaces";
import { Media } from "@/components/media";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { ScrollIntoViewText } from "@/components/scroll-into-view-text";
import { FadeIntoView } from "@/components/animation-wrappers/fade-into-view";
import { ScrollIntoViewMedia } from "@/components/animation-wrappers/scroll-into-view-media";

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

  return (
    <div className={headerCaseStudyClass} style={{ backgroundColor }}>
      <div className="container">
        <ScrollIntoViewText
          text={title}
          tag="h1"
          inline
          duration={0.7}
          backgroundColor={backgroundColor}
          className={styles.title}
        />

        <h2 className={styles.subtitle}>
          <FadeIntoView delay={0.7}>{subtitle}</FadeIntoView>
        </h2>
        <ScrollIntoViewMedia
          fade
          delay={0.8}
          className={styles.media}
          scrollAmount={100}
          showCurtain={false}
        >
          <Media {...featuredMedia} priority={true} />
        </ScrollIntoViewMedia>
      </div>
    </div>
  );
};
