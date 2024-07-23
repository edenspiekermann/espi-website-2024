"use client";

import { CookieConsentFormFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";
import { Button } from "../button/button";
import { CookieConsentItem } from "./item";

export const CookieConsentForm = ({
  text,
  items,
}: CookieConsentFormFragment) => {
  return (
    <div className={styles.cookieConsentForm}>
      <div className="container">
        <div className={styles.top}>
          <p className={styles.text}>{text}</p>
          <div className={styles.buttonsDesktop}>
            <a href="#">Allow selection</a>
            <Button onClick={() => {}} text="Allow all" />
          </div>
        </div>
        {items?.map((item) => <CookieConsentItem key={item.id} item={item} />)}
        <div className={styles.buttonsMobile}>
          <a href="#">Allow selection</a>
          <Button onClick={() => {}} text="Allow all" />
        </div>
      </div>
    </div>
  );
};
