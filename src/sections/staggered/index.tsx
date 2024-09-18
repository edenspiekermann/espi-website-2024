import { StaggeredFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";
import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";
import { Divider } from "@/components/divider/divider";
import classNames from "classnames";

export const Staggered = ({
  showDivider,
  divider,
  title,
  items,
}: StaggeredFragment) => {
  return (
    <section className={styles.staggered}>
      {showDivider && divider && (
        <Divider invertColor={divider.invertColor} text={divider.text} />
      )}
      <div className="container">
        <div
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className={styles.items}>
          {items?.map((item, index) => {
            const itemClass = classNames({
              [styles.item]: true,
              [styles.itemEven]: index % 2 === 0,
            });
            return (
              <div className={itemClass} key={item.id}>
                <div className={styles.itemText}>
                  <div className={styles.itemTitle}>{item.title}</div>
                  <div className={styles.itemSubtext}>{item.subtext}</div>
                </div>
                <div className={styles.itemMedia}>
                  <Media {...(item.media as MediaProperties)} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
