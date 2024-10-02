import { CaseStudyGridCardFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./case-study-card.module.scss";
import Link from "next/link";
import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";
import classNames from "classnames";

interface GridCardProperties extends CaseStudyGridCardFragment {
  visible?: boolean;
  index: number;
}

export const CaseStudyGridCard = ({
  title,
  subtitle,
  cardMedia2x1,
  cardMedia3x2,
  slug,
  backgroundColor,
  invertNav,
  visible,
  index,
}: GridCardProperties) => {
  const cardClass = classNames({
    [styles.gridCard]: true,
    [styles.invertedCard]: invertNav,
    [styles.visible]: visible,
  });

  const cardMedia = index % 3 === 0 ? cardMedia2x1 : cardMedia3x2;

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
