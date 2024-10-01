import { SidebarGenericFragment } from "@/graphql/types/generated";
import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";
import { Button } from "../button/button";

export const SidebarGeneric = ({
  text,
  textStyle,
  callToAction,
}: SidebarGenericFragment) => {
  const textClass = classNames({
    [styles.text]: true,
    [styles[textStyle!]]: true,
  });

  return (
    <div className={styles.sidebarGeneric}>
      <div className={textClass} dangerouslySetInnerHTML={{ __html: text }} />
      {callToAction && (
        <Button {...callToAction} url={callToAction.url || ""} />
      )}
    </div>
  );
};
