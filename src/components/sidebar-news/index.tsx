import { SidebarNewsFragment } from "@/graphql/types/generated";
import React from "react";
import { Media } from "../media";
import { MediaProperties } from "../media/interfaces";
import styles from "./styles.module.scss";
import { formateDate } from "@/utils/format-date";
import classNames from "classnames";
import Link from "next/link";

interface SidebarNewsProps extends SidebarNewsFragment {
  date: string;
}

export const SidebarNews = ({
  date,
  text,
  author,
  greyBackground = false,
}: SidebarNewsProps) => {
  const formattedDate = formateDate(date);
  const authorInfoClass = classNames({
    [styles.authorInfo]: true,
    [styles.greyBackground]: greyBackground,
  });

  return (
    <div className={styles.sidebarNews}>
      <p className={styles.date}>{formattedDate}</p>
      <div className={styles.divider} />
      <p className={styles.text}>{text}</p>
      <Link href={`/about/${author.slug}`} className={styles.authorLink}>
        <div className={styles.media}>
          <Media {...(author.smallImage as MediaProperties)} />
        </div>
        <div className={authorInfoClass}>
          <p className={styles.name}>{author.name}</p>
          <p className={styles.role}>{author.role}</p>
        </div>
      </Link>
    </div>
  );
};
