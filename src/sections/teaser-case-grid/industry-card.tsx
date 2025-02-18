import { IndustryGridCardFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./industry-card.module.scss";
import Link from "next/link";
import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";
import classNames from "classnames";

interface GridCardProperties extends IndustryGridCardFragment {
  visible?: boolean;
}

export const IndustryGridCard = ({
  teaserText,
  industry,
  visible,
  teaserMedia,
  slug,
}: GridCardProperties) => {
  const cardClass = classNames({
    [styles.gridCard]: true,
    [styles.visible]: visible,
  });

  return (
    <Link href={`/industries/${slug}`} className={cardClass}>
      <div className={styles.media}>
        <Media {...(teaserMedia as MediaProperties)} />
      </div>
      <div className={styles.cardContent}>
        <p className={styles.title}>{industry}</p>
        <p className={styles.subtitle}>{teaserText}</p>
      </div>
    </Link>
  );
};
