import React from "react";
import { HamburgerProperties } from "./interfaces";
import classnames from "classnames";

export const Hamburger: React.FC<HamburgerProperties> = ({
  isOpen,
  onClick,
}) => {
  const classNamesList = classnames({
    hamburger: true,
    "hamburger--open": isOpen,
  });
  return (
    <button
      type="button"
      className={classNamesList}
      title={isOpen ? "Close navigation" : "Open navigation"}
      onClick={onClick}
    >
      <span />
      <span />
      <span />
    </button>
  );
};
