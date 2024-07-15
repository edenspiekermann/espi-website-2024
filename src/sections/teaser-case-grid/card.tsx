import { CaseStudyGridCardFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";
import classNames from "classnames";

interface GridCardProperties extends CaseStudyGridCardFragment {
  visible?: boolean;
}

export const GridCard = ({
  title,
  subtitle,
  cardMedia,
  slug,
  backgroundColor,
  invertNav,
  visible,
}: GridCardProperties) => {
  const cardClass = classNames({
    [styles.gridCard]: true,
    [styles.invertedCard]: invertNav,
    [styles.visible]: visible,
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
