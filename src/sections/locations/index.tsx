import { LocationsFragment } from "@/graphql/types/generated";
import React from "react";
import { Location } from "./location";
import styles from "./styles.module.scss";

export const Locations = ({ locations }: LocationsFragment) => {
  return (
    <section className={styles.locations}>
      {locations?.map((location) => (
        <Location key={location.id} {...location} />
      ))}
    </section>
  );
};
