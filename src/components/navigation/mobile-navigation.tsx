import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { MobileNavigationProperties } from "./interfaces";
import styles from "./styles.module.scss";

export const MobileNavigation: React.FC<MobileNavigationProperties> = ({
  isOpen,
  links,
  socialLinks,
}) => {
  const classNameList = classNames({
    [styles.mobileNav]: true,
    [styles.open]: isOpen,
  });

  return (
    <div className={classNameList}>
      <nav>
        <ul className={`${styles.mobileNavList} ${styles.navLinks}`}>
          {links &&
            links.map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    href={link.slug}
                    className={`${styles.navLinks} ${styles.navLink}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
        </ul>
        <ul
          className={`${styles.mobileNavList} ${styles.navLinks} ${styles.socialLinks}`}
        >
          {socialLinks &&
            socialLinks.map((socialLink) => {
              return (
                <li key={socialLink.id}>
                  <a
                    href={socialLink.url}
                    title={socialLink.title}
                    className={`${styles.navLinks} ${styles.navLink} ${styles.socialLink}`}
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
