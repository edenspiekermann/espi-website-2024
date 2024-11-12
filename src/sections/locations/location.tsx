"use client";

import { LocationFragment } from "@/graphql/types/generated";
import React, { useEffect, useState } from "react";
import styles from "./location.module.scss";
import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";
import classNames from "classnames";
import { formatTime } from "@/utils/format-time";

export const Location = ({
  city,
  timeZone,
  decorativeImage,
  address,
  email,
  phoneNumber,
  contactPerson,
  media,
}: LocationFragment) => {
  const locationClass = classNames({
    [styles.location]: true,
    container: true,
  });

  const [currentTime, setCurrentTime] = useState(
    formatTime(new Date(), timeZone),
  );
  const [colonVisible, setColonVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((time) => formatTime(new Date(), timeZone));
    }, 60000); // Update the time every minute

    const colonVisibilityInterval = setInterval(() => {
      setColonVisible((prev) => !prev);
    }, 1000); // Toggle colon visibility every second

    return () => {
      clearInterval(interval);
      clearInterval(colonVisibilityInterval);
    };
  }, [timeZone]);

  const plainAddress =
    new DOMParser().parseFromString(address, "text/html").body.textContent ||
    "";

  return (
    <div className={locationClass}>
      <div className={styles.left}>
        <div>
          <p className={styles.city}>{city}</p>
          <span className={styles.time}>
            {currentTime.hour}
            <span style={{ visibility: colonVisible ? "visible" : "hidden" }}>
              :
            </span>
            {currentTime.minute} {currentTime.period}
          </span>
        </div>
        <div className={styles.decorativeImage}>
          <Media {...(decorativeImage as MediaProperties)} />
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.address}>
          <div dangerouslySetInnerHTML={{ __html: address }} />
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(plainAddress)}`}
            target="_blank"
          >
            Get directions
          </a>
        </div>
        <div>
          <a href={`mailto:${email}`}>{email}</a>
          {phoneNumber && <p>{phoneNumber}</p>}
        </div>
        {contactPerson && (
          <div className={styles.person}>
            <p>{contactPerson.name}</p>
            <p>{contactPerson.role}</p>
            {contactPerson.email && (
              <a href={`mailto:${contactPerson.email}`}>
                {contactPerson.email}
              </a>
            )}
          </div>
        )}
      </div>
      <div className={styles.right}>
        <Media {...(media as MediaProperties)} />
      </div>
    </div>
  );
};
