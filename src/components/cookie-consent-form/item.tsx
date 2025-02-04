"use client";

import React, { useState } from "react";
import { MinusSign } from "./minus-sign";
import { PlusSign } from "./plus-sign";
import { CookieConsentFormFragment } from "@/graphql/types/generated";
import styles from "./item.module.scss";
import {
  CookieConsentState,
  useCookieConsent,
} from "@/context/cookie-consent-context";

export const CookieConsentItem = ({
  item,
}: {
  item: CookieConsentFormFragment["items"][0];
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { consent, updateConsent } = useCookieConsent();

  const handleClick = () => setIsExpanded(!isExpanded);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = item.label.toLowerCase() as keyof CookieConsentState;
    const newValue = event.target.checked;
    updateConsent({ [key]: newValue });
  };

  const isChecked = () => {
    const key = item.label.toLowerCase() as keyof CookieConsentState;
    return consent[key];
  };

  return (
    <div className={styles.item}>
      <div className={styles.itemTop}>
        <div className={styles.itemLeft}>
          <input
            type="checkbox"
            id={item.id}
            className={styles.defaultCheckbox}
            checked={isChecked()}
            onChange={handleCheckboxChange}
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
