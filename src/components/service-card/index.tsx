import { ServiceCardFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

export const ServiceCard = ({
  title,
  bodyText,
  listItems,
  image,
}: ServiceCardFragment) => {
  const { src } = image.responsiveImage!;
  return (
    <div className={styles.serviceCard}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.body}>{bodyText}</p>
      <div
        dangerouslySetInnerHTML={{ __html: listItems }}
        className={styles.listItems}
      />
      <div className={styles.image}>
        <Image src={src} alt="" fill />
      </div>
    </div>
  );
};
