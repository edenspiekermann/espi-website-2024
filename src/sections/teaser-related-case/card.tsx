import { CaseStudyGridCardFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";
import classNames from "classnames";

export const CaseStudyRelatedCard = ({
  title,
  subtitle,
  cardMedia,
  backgroundColor,
  slug,
  invertNav,
}: CaseStudyGridCardFragment) => {
  const cardClass = classNames({
    [styles.card]: true,
    [styles.inverted]: invertNav,
  });
  return (
    <Link href={`case-studies/${slug}`} className={cardClass}>
      <div className={styles.media}>
        <Media {...(cardMedia as MediaProperties)} />
      </div>
      <div
        className={styles.cardContent}
        style={{ backgroundColor: backgroundColor.hex }}
      >
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </Link>
  );
};
