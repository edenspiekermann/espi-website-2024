"use client";

import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";
import { SliderGalleryFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";
import { InfiniteScrollContainer } from "@/components/infinite-scroll-container";

export const SliderGallery = ({ assets }: SliderGalleryFragment) => {
  return (
    <section className={styles.sliderGallery}>
      <InfiniteScrollContainer className={styles.container}>
        {assets.map((asset) => (
          <div key={asset.id} className={styles.media}>
            <Media {...(asset as MediaProperties)} />
          </div>
        ))}
      </InfiniteScrollContainer>
    </section>
  );
};
