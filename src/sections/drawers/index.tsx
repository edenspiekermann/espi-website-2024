"use client";

import { DrawersFragment } from "@/graphql/types/generated";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { DrawerItem } from "./drawer-item";
import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";
import classNames from "classnames";

export const Drawers = ({
  title,
  items = [],
  media,
  imageOnLeft = false,
  whiteBackground = false,
}: DrawersFragment) => {
  const [activeDrawer, setActiveDrawer] = useState<number | null>();

  const handleDrawerClick = (index: number) => {
    activeDrawer === index ? setActiveDrawer(null) : setActiveDrawer(index);
  };

  const drawersClass = classNames({
    [styles.drawers]: true,
    [styles.imageOnLeft]: imageOnLeft,
    [styles.whiteBackground]: whiteBackground,
  });

  return (
    <section className={drawersClass}>
      <div className="container">
        <div className={styles.left}>
          <p className={styles.title}>{title}</p>
          <ul className={styles.drawerItems}>
            {items?.map((item, index) => (
              <DrawerItem
                key={item.id}
                {...item}
                isActive={activeDrawer === index}
                onClick={() => handleDrawerClick(index)}
              />
            ))}
          </ul>
        </div>
        <div className={styles.media}>
          <Media {...(media as MediaProperties)} />
        </div>
      </div>
    </section>
  );
};
