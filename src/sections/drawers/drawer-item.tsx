import React from "react";
import styles from "./drawer-item.module.scss";
import classNames from "classnames";
import { DrawerOpenButton } from "./drawer-open-button";
import { DrawerCloseButton } from "./drawer-close-button";

type DrawerItemProps = {
  title: string;
  body: string;
  isActive?: boolean;
  onClick?: () => void;
};

export const DrawerItem = ({
  title,
  body,
  isActive,
  onClick,
}: DrawerItemProps) => {
  const bodyClass = classNames({
    [styles.body]: true,
    [styles.active]: isActive,
  });
  const buttonClass = classNames({
    [styles.button]: true,
    [styles.buttonActive]: isActive,
  });

  return (
    <li className={styles.item}>
      <div className={styles.outer} onClick={onClick}>
        <p className={styles.title}>{title}</p>
        <div className={buttonClass}>
          <DrawerCloseButton />
          <DrawerOpenButton />
        </div>
      </div>
      <p className={bodyClass}>{body}</p>
    </li>
  );
};
