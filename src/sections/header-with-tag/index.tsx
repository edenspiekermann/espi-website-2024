import { HeaderWithTagFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";
import { Tag } from "@/components/tag";

export const HeaderWithTag = ({
  title,
  subtitle,
  industry,
}: HeaderWithTagFragment) => {
  return (
    <section className={styles.headerWithTag}>
      <div className="container">
        {industry && (
          <div className={styles.tag}>
            <Tag text={industry.industry} />
          </div>
        )}
        <h2
          dangerouslySetInnerHTML={{ __html: title }}
          className={styles.title}
        />
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
};
