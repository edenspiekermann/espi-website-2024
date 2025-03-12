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
  const headerNewsInnerClass = classNames({
    [styles.headerNewsInner]: true,
    container: true,
  });
  return (
    <section className={styles.headerNews}>
      <div className={headerNewsInnerClass}>
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
      </div>
    </section>
  );
};
