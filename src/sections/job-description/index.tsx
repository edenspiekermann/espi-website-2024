import React from "react";
import { JobDescriptionProperties } from "./interfaces";
import styles from "./styles.module.scss";

export const JobDescription = ({
  jobDescriptions,
}: JobDescriptionProperties) => {
  return (
    <div className={styles.jobDescription}>
      {jobDescriptions?.map((description: any) => {
        return (
          <div key={description.name}>
            <div className={styles.name}>{description.name}</div>
            <div
              className={styles.value}
              dangerouslySetInnerHTML={{ __html: description.value }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};
