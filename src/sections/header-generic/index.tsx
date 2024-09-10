import React from "react";
import { HeaderGenericProperties } from "./interfaces";
import styles from "./styles.module.scss";

export const HeaderGeneric = ({ eyebrow, title }: HeaderGenericProperties) => {
  return (
    <div className={styles.headerGeneric}>
      <div className="container">
        <div className={styles.content}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <p className={styles.title}>{title}</p>
        </div>
      </div>
    </div>
  );
};
