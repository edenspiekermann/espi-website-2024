"use client";

import { DrawersFragment } from "@/graphql/types/generated";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { DrawerItem } from "./drawer-item";
import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";

export const Drawers = ({ title, items = [], media }: DrawersFragment) => {
  const [activeDrawer, setActiveDrawer] = useState<number | null>();

  const handleDrawerClick = (index: number) => {
    activeDrawer === index ? setActiveDrawer(null) : setActiveDrawer(index);
  };

  return (
    <section className={styles.drawers}>
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
