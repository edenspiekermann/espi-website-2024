import React from "react";
import { NavigationBaseProperties } from "./interfaces";
import Link from "next/link";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { Button } from "../button/button";

export const DesktopNavigation: React.FC<NavigationBaseProperties> = ({
  links,
  cta,
}) => {
  const classNameList = classNames({
    [styles.desktop]: true,
  });

  console.log(links);

  return (
    <div className={classNameList}>
      <nav>
        <ul className={styles.navLinks}>
          {links &&
            links.map((link) => {
              return (
                <li key={link.id}>
                  <Link href={`/${link.slug}`} className={styles.navLink}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          <li>
            <Button text={cta.text} isInverted />
          </li>
        </ul>
      </nav>
    </div>
  );
};
