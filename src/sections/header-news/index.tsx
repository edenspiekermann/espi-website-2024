import React from "react";
import { HeaderNewsProperties } from "./interfaces";
import { Tag } from "@/components/tag";
import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";
import styles from "./styles.module.scss";
import Link from "next/link";
import classNames from "classnames";

export const HeaderNews = ({
  title,
  typeOfArticle,
  featuredMedia,
}: HeaderNewsProperties) => {
  const headerNewsClass = classNames({
    [styles.headerNews]: true,
  });
  return (
    <section className={headerNewsClass}>
      <div className={styles.left}>
        <Link
          href={{ pathname: "/news", query: { filter: typeOfArticle } }}
          className={styles.tag}
        >
          <Tag text={typeOfArticle} />
        </Link>
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
