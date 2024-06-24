import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { MobileNavigationProperties } from "./interfaces";

export const MobileNavigation: React.FC<MobileNavigationProperties> = ({
  isOpen,
  links,
}) => {
  const classNameList = classNames({
    "mobile-navigation": true,
    "mobile-navigation--open": isOpen,
  });

  return (
    <div className={classNameList}>
      <ul className="mobile-navigation__list navigation__links">
        {links &&
          links.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  href={link.slug}
                  className="mobile-navigation__item navigation__links navigation__link"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
