import { LocationTeaserFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";
import { Divider } from "@/components/divider/divider";
import { Locations } from "./locations";

export const LocationTeaser = ({
  showDivider,
  divider,
  title,
  subtext,
  locations = [],
}: LocationTeaserFragment) => {
  return (
    <section>
      {showDivider && divider && <Divider {...divider} />}
      <div className={`${[styles.locationTeaser]} container`}>
        <div className={styles.text}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtext}>{subtext}</p>
        </div>
        <Locations locations={locations} />
      </div>
    </section>
  );
};
