import React from "react";
import { NavigationProperties } from "./interfaces";
import Link from "next/link";
import classNames from "classnames";

export const DesktopNavigation: React.FC<NavigationProperties> = ({
  links,
}) => {
  const classNameList = classNames({
    "desktop-navigation": true,
  });

  return (
    <div className={classNameList}>
      <ul className="navigation__links">
        {links &&
          links.map((link) => {
            return (
              <li key={link.id}>
                <Link href={link.slug} className="navigation__link">
                  {link.label}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
