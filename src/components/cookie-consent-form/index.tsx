"use client";

import { CookieConsentFormFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";
import { Button } from "../button/button";
import { CookieConsentItem } from "./item";
import { useCookieConsent } from "@/context/cookie-consent-context";
import classNames from "classnames";

export const CookieConsentForm = ({
  text,
  items,
}: CookieConsentFormFragment) => {
  const { allowAll, hideForm, isFormVisible, submitted } = useCookieConsent();

  const allowSelection = (e: React.MouseEvent) => {
    e.preventDefault();
    hideForm();
  };

  const formClass = classNames({
    [styles.cookieConsentForm]: true,
    [styles.hidden]: !isFormVisible,
    [styles.submitted]: submitted,
    [styles.changeCookieSettings]: submitted && isFormVisible,
  });

  return (
    <div className={formClass}>
      <div className="container">
        <div className={styles.top}>
          <p className={styles.text}>{text}</p>
          <div className={styles.buttonsDesktop}>
            <a href="#" onClick={allowSelection}>
              Allow selection
            </a>
            <Button onClick={allowAll} text="Allow all" />
          </div>
        </div>
        {items?.map((item) => <CookieConsentItem key={item.id} item={item} />)}
        <div className={styles.buttonsMobile}>
          <a href="#" onClick={allowSelection}>
            Allow selection
          </a>
          <Button onClick={allowAll} text="Allow all" />
        </div>
      </div>
    </div>
  );
};
