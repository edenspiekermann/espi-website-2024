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
  const [openDrawers, setOpenDrawers] = useState<boolean[]>(
    items.map(() => false),
  );

  const handleDrawerClick = (index: number) => {
    const updatedDrawers = [...openDrawers];
    updatedDrawers[index] = !updatedDrawers[index];
    setOpenDrawers(updatedDrawers);
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
                isActive={openDrawers[index]}
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
