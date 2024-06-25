import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { MobileNavigationProperties } from "./interfaces";

export const MobileNavigation: React.FC<MobileNavigationProperties> = ({
  isOpen,
  links,
  socialLinks,
}) => {
  const classNameList = classNames({
    "mobile-navigation": true,
    "mobile-navigation--open": isOpen,
  });

  return (
    <div className={classNameList}>
      <nav>
        <ul className="mobile-navigation__list navigation__links">
          {links &&
            links.map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    href={link.slug}
                    className="navigation__links navigation__link"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
        </ul>
        <ul className="mobile-navigation__list navigation__links navigation__social-links">
          {socialLinks &&
            socialLinks.map((socialLink) => {
              return (
                <li key={socialLink.id}>
                  <a
                    href={socialLink.url}
                    title={socialLink.title}
                    className="navigation__links navigation__link navigation__social-link"
                  >
                    {socialLink.title}
                  </a>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
};
