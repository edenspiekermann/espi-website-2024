"use client";

import React, { useState } from "react";
import { MinusSign } from "./minus-sign";
import { PlusSign } from "./plus-sign";
import { CookieConsentFormFragment } from "@/graphql/types/generated";
import styles from "./item.module.scss";

export const CookieConsentItem = ({
  item,
}: {
  item: CookieConsentFormFragment["items"][0];
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => setIsExpanded(!isExpanded);

  return (
    <div key={item.id} className={styles.item}>
      <div className={styles.itemTop}>
        <div className={styles.itemLeft}>
          <input
            type="checkbox"
            id={item.id}
            className={styles.defaultCheckbox}
          />
          <label htmlFor={item.id} className={styles.label}>
            {item.label}
          </label>
        </div>
        <div className={styles.showMore} onClick={handleClick}>
          {isExpanded ? <MinusSign /> : <PlusSign />}
        </div>
      </div>
      {isExpanded && (
        <div className={styles.itemDescription}>
          <p>{item.description}</p>
        </div>
      )}
    </div>
  );
};
