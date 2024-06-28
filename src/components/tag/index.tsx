import React from "react";
import { TagProperties } from "./interfaces";
import classNames from "classnames";
import "./styles.scss";

export const Tag = ({ isLargeTag, text }: TagProperties) => {
  const tagClass = classNames({
    tag: true,
    "tag--large": isLargeTag,
  });
  return <div className={tagClass}>{text}</div>;
};
