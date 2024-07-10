import React from "react";
import styles from "./styles.module.scss";
import { PurposeFragment } from "@/graphql/types/generated";
import { Divider } from "@/components/divider/divider";
import { StatementSimple } from "../statement-simple";
import classNames from "classnames";
import { Stat } from "./stat";
import { Button } from "@/components/button/button";
import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";

export const Purpose = ({
  showDivider,
  divider,
  statement,
  text,
  button,
  media,
  stats,
  invertColor,
}: PurposeFragment) => {
  const purposeClass = classNames({
    [styles.purpose]: true,
    [styles.inverted]: invertColor,
  });
  return (
    <div className={purposeClass}>
      {showDivider && divider && (
        <Divider {...divider} invertColor={invertColor} />
      )}
      {statement && (
        <StatementSimple {...statement} invertColor={invertColor} />
      )}
      <div className={`${[styles.container]} container`}>
        <div className={styles.leftSide}>
          <div className={styles.textContent}>
            <p className={styles.text}>{text}</p>
            {button && <Button {...button} isInverted={invertColor} />}
          </div>
          <div className={styles.stats}>
            {stats?.map((stat) => <Stat {...stat} key={stat.statistic} />)}
          </div>
        </div>
        <div className={styles.media}>
          <Media {...(media as MediaProperties)} />
        </div>
      </div>
    </div>
  );
};
