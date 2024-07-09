"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { LocationTeaserFragment } from "@/graphql/types/generated";
import { formatTime } from "@/utils/format-time";

export const Locations = ({
  locations,
}: {
  locations: LocationTeaserFragment["locations"];
}) => {
  const [locationsWithCurrentTimes, setLocationsCurrentTimes] = useState(
    locations.map((location) => ({
      ...location,
      time: formatTime(new Date(), location.timeZone),
    })),
  );

  const [colonVisible, setColonVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLocationsCurrentTimes((locations) =>
        locations.map((location) => ({
          ...location,
          time: formatTime(new Date(), location.timeZone),
        })),
      );
    }, 60000); // Update the time every minute

    const colonVisibilityInterval = setInterval(() => {
      setColonVisible((prev) => !prev);
    }, 1000); // Toggle colon visibility every second

    return () => {
      clearInterval(interval);
      clearInterval(colonVisibilityInterval);
    };
  }, []);

  return (
    <ul className={styles.locations}>
      {locationsWithCurrentTimes?.map((location, index) => (
        <li key={location.id} className={styles.location}>
          <span>{location.city}</span>
          <span className={styles.time}>
            {location.time.hour}
            <span style={{ visibility: colonVisible ? "visible" : "hidden" }}>
              :
            </span>
            {location.time.minute} {location.time.period}
          </span>
        </li>
      ))}
    </ul>
  );
};
