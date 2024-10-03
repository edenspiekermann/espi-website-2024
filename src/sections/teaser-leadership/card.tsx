import { PersonFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";
import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";
import Link from "next/link";

export const PersonCard = ({ name, role, slug, cardImage }: PersonFragment) => {
  return (
    <Link className={styles.personCard} href={`/about/${slug}`} target="_self">
      <div className={styles.media}>
        <Media {...(cardImage as MediaProperties)} />
      </div>
      <div className={styles.text}>
        <p className={styles.name}>{name}</p>
        <p className={styles.role}>{role}</p>
      </div>
    </Link>
  );
};
