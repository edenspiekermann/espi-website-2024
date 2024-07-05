import React from "react";
import styles from "./styles.module.scss";
import { DividerFragment } from "@/graphql/types/generated";
import classNames from "classnames";

export const Divider = ({ title, invertColor = false }: DividerFragment) => {
  const dividerClass = classNames({
    [styles.divider]: true,
    [styles.inverted]: invertColor,
    [styles.noText]: !title,
  });
  return (
    <div className={dividerClass}>
      <div className="container">
        <p>{title}</p>
      </div>
    </div>
  );
};
