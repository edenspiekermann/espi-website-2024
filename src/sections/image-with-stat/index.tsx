import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";
import { ImageWithStatFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";

export const ImageWithStat = ({ media, stats }: ImageWithStatFragment) => {
  return (
    <section className={styles.imageWithStat}>
      <div className="container">
        <div className={styles.media}>
          <Media {...(media as MediaProperties)} />
        </div>
        {stats?.map((stat) => (
          <div key={stat.id} className={styles.stat}>
            <p className={styles.statistic}>{stat.statistic}</p>
            <p className={styles.context}>{stat.context}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
