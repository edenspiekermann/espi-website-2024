import { PersonFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";
import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";

export const PersonCard = ({ name, role, slug, image }: PersonFragment) => {
  return (
    <div className={styles.personCard}>
      <div className={styles.media}>
        <Media {...(image as MediaProperties)} />
      </div>
      <div className={styles.text}>
        <p className={styles.name}>{name}</p>
        <p className={styles.role}>{role}</p>
      </div>
    </div>
  );
};
