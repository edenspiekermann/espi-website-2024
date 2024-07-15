import { CaseStudyCardFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";
import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";
import Link from "next/link";
import classNames from "classnames";

export const Card = ({
  title,
  subtitle,
  backgroundColor,
  cardMedia,
  slug,
  invertNav,
}: CaseStudyCardFragment) => {
  const cardClass = classNames({
    [styles.card]: true,
    [styles.invertedCard]: invertNav,
  });
  return (
    <Link className={cardClass} href={`case-studies/${slug}`}>
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
  );
};
