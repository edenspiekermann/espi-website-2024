import { LocationFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./location.module.scss";
import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";
import classNames from "classnames";

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
  return (
    <div className={locationClass}>
      <div className={styles.left}>
        <p className={styles.city}>{city}</p>
        <p>{timeZone}</p>
        <div className={styles.decorativeImage}>
          <Media {...(decorativeImage as MediaProperties)} />
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.address}>
          {/* <div dangerouslySetInnerHTML={{ __html: address }} /> */}
          <p>{address}</p>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${address}`}
            target="_blank"
          >
            Get directions
          </a>
        </div>
        <a href={`mailto:${email}`}>{email}</a>
        <p>{phoneNumber}</p>
        {contactPerson && <p>{contactPerson.toString()}</p>}
      </div>
      <div className={styles.right}>
        <Media {...(media as MediaProperties)} />
      </div>
    </div>
  );
};
