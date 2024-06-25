import React from "react";
import { HamburgerProperties } from "./interfaces";
import classnames from "classnames";

export const MenuToggle: React.FC<HamburgerProperties> = ({
  isOpen,
  onClick,
}) => {
  const classNamesList = classnames({
    "mobile-nav__menu-toggle": true,
    "mobile-nav__menu-toggle--open": isOpen,
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
