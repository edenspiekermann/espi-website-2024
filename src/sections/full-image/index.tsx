import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";
import { FullImageFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";

export const FullImage = ({ media }: FullImageFragment) => {
  return (
    <section className={styles.fullImage}>
      <Media {...(media as MediaProperties)} />
    </section>
  );
};
