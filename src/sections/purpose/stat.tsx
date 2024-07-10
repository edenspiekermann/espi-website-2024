import { StatFragment, StatRecord } from "@/graphql/types/generated";
import React from "react";
import styles from "./stat.module.scss";

export const Stat = ({ statistic, context }: StatFragment) => {
  return (
    <div className={styles.stat}>
      <p className={styles.featured}>{statistic}</p>
      <p className={styles.context}>{context}</p>
    </div>
  );
};
