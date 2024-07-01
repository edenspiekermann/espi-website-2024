import React from "react";
import styles from "./styles.module.scss";
import { DividerFragment } from "@/graphql/types/generated";
import classNames from "classnames";

export const Divider = ({ text, invertColor = false }: DividerFragment) => {
  const dividerClass = classNames({
    [styles.divider]: true,
    [styles.inverted]: invertColor,
  });
  return (
    <div className={dividerClass}>
      <div className="container">
        <p>{text}</p>
      </div>
    </div>
  );
};
