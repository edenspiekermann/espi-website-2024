import { Divider } from "@/components/divider/divider";
import { StatsFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Stats = ({ showDivider, divider, stats }: StatsFragment) => {
  const statsClass = classNames({
    [styles.stats]: true,
    container: true,
    [styles.twoStats]: stats?.length === 2,
  });

  return (
    <section>
      {showDivider && divider && <Divider {...divider} />}
      <div className={statsClass}>
        {stats?.map((stat) => (
          <div key={stat.id} className={styles.statistic}>
            <p className={styles.statistic}>{stat.statistic}</p>
            <p className={styles.context}>{stat.context}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
