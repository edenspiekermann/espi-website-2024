import { ManifestoCardFragment } from "@/graphql/types/generated";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

export const ManifestoCard = ({
  image,
  title,
  subtext,
}: ManifestoCardFragment) => {
  const { src, alt } = image.responsiveImage!;
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        {image && <Image src={src} alt={alt || ""} fill />}
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.subtext}>{subtext}</p>
    </div>
  );
};
