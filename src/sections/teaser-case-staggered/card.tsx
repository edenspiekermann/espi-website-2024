import { CaseStudyCardFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";
import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";
import Link from "next/link";
import classNames from "classnames";
import { ScrollIntoView } from "@/components/animation-wrappers/scroll-into-view";

interface CardProps extends CaseStudyCardFragment {
  isInView?: boolean;
  index: number;
}

export const Card = ({
  title,
  subtitle,
  backgroundColor,
  cardMedia,
  slug,
  invertNav,
  isInView,
  index,
}: CardProps) => {
  const cardClass = classNames({
    [styles.card]: true,
    [styles.invertedCard]: invertNav,
  });

  return (
    <ScrollIntoView
      isInView={isInView}
      delay={index * 0.1}
      duration={0.4}
      scrollAmount={40}
      className={cardClass}
      fade
    >
      <Link href={`case-studies/${slug}`}>
        <div className={styles.media}>
          <Media {...(cardMedia as MediaProperties)} />
        </div>
        <div
          className={styles.content}
          style={{ backgroundColor: backgroundColor.hex }}
        >
          <p className={styles.title}>{title}</p>
          <p>{subtitle}</p>
        </div>
      </Link>
    </ScrollIntoView>
  );
};
