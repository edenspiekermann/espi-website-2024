import { CaseStudyContentImageFragment } from "@/graphql/types/generated";
import React from "react";
import { MediaProperties } from "../media/interfaces";
import styles from "./styles.module.scss";
import { Media } from "../media";

export const InlineContentImage = (record: CaseStudyContentImageFragment) => {
  return (
    <div
      key={record.id}
      className={record.halfSize ? styles.halfImage : styles.fullImage}
    >
      <Media {...(record.media as MediaProperties)} />
    </div>
  );
};
