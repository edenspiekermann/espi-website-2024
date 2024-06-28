import React from "react";
import { DesktopNavigationProperties } from "./interfaces";
import Link from "next/link";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const DesktopNavigation: React.FC<DesktopNavigationProperties> = ({
  links,
}) => {
  const classNameList = classNames({
    [styles.desktop]: true,
  });

  return (
    <div className={classNameList}>
      <nav>
        <ul className={styles.navLinks}>
          {links &&
            links.map((link) => {
              return (
                <li key={link.id}>
                  <Link href={link.slug} className={styles.navLink}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
};
