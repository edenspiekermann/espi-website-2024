import { SidebarNewsFragment } from "@/graphql/types/generated";
import React from "react";
import { Media } from "../media";
import { MediaProperties } from "../media/interfaces";
import styles from "./styles.module.scss";
import { formateDate } from "@/utils/format-date";

export const SidebarNews = ({ date, text, author }: SidebarNewsFragment) => {
  const formattedDate = formateDate(date);

  return (
    <div className={styles.sidebarNews}>
      <p className={styles.date}>{formattedDate}</p>
      <div className={styles.divider} />
      <p className={styles.text}>{text}</p>
      <div className={styles.author}>
        <div className={styles.media}>
          <Media {...(author.image?.responsiveImage?.src as MediaProperties)} />
          <div className={styles.authorInfo}>
            <p className={styles.name}>{author.name}</p>
            <p className={styles.role}>{author.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
