import React from "react";
import { HamburgerProperties } from "./interfaces";
import classnames from "classnames";
import styles from "./styles.module.scss";

export const MenuToggle: React.FC<HamburgerProperties> = ({
  isOpen,
  onClick,
}) => {
  const classNamesList = classnames({
    [styles.mobileNavMenuToggle]: true,
    [styles.mobileNavMenuToggleOpen]: isOpen,
  });
  return (
    <button
      type="button"
      className={classNamesList}
      title={isOpen ? "Close navigation" : "Open navigation"}
      onClick={onClick}
    >
      {isOpen ? "Close" : "Menu"}
    </button>
  );
};
