import React from "react";
import { DesktopNavigationProperties } from "./interfaces";
import Link from "next/link";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { Button } from "../button/button";
import { usePathname } from "next/navigation";

export const DesktopNavigation: React.FC<DesktopNavigationProperties> = ({
  links,
  cta,
  isInverted,
}) => {
  const pathname = usePathname();
  const classNameList = classNames({
    [styles.desktop]: true,
  });

  return (
    <div className={classNameList}>
      <nav>
        <ul className={styles.navLinks}>
          {links &&
            links.map((link) => {
              const isActive = pathname.includes(link.slug);
              return (
                <li key={link.id}>
                  <Link
                    href={`/${link.slug}`}
                    className={styles.navLink}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          <li>
            <Button
              isInverted={isInverted}
              {...cta}
              text={cta?.text || ""}
              url={cta?.url || ""}
              slug={`/${cta?.pageLink?.slug}`}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};
