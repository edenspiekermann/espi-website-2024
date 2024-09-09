import React from "react";
import { HeaderNewsProperties } from "./interfaces";
import { Tag } from "@/components/tag";
import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";
import styles from "./styles.module.scss";

export const HeaderNews = ({
  title,
  typeOfArticle,
  featuredMedia,
}: HeaderNewsProperties) => {
  return (
    <section className={styles.headerNews}>
      <div className={styles.left}>
        <Tag text={typeOfArticle} />
        <h1 className={styles.title}>{title}</h1>
      </div>
      {featuredMedia && (
        <div className={styles.image}>
          <Media {...(featuredMedia as MediaProperties)} />
        </div>
      )}
    </section>
  );
};
