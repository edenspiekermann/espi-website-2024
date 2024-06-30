"use client";

import React, { useEffect, useState } from "react";
import { DesktopNavigation } from "./desktop-navigation";
import { NavigationProperties } from "./interfaces";
import { MobileNavigation } from "./mobile-navigation";
import { EspiLogo } from "../../../public/espi-logo";
import styles from "./styles.module.scss";
import Link from "next/link";
import classNames from "classnames";
import { MenuToggle } from "./menu-toggle";
import { useScroll, useMotionValueEvent } from "framer-motion";

export const Navigation: React.FC<NavigationProperties> = ({
  links,
  alternativeLogoText,
  showLogo,
  socialLinks,
  isInverted = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const toggle = () => setIsOpen(!isOpen);
  const { scrollY } = useScroll();

  const classNameList = classNames({
    [styles.navigation]: true,
    [styles.hidden]: !show,
    [styles.inverted]: isInverted,
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(latest);
  });

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [isOpen]);

  return (
    <header className={classNameList}>
      <div className="container">
        <div className={styles.wrapper}>
          {showLogo ? (
            <Link href="/" title="home">
              <EspiLogo />
            </Link>
          ) : (
            <span className={styles.navAltText}>{alternativeLogoText}</span>
          )}
          <div className={styles.menu}>
            <MenuToggle isOpen={isOpen} onClick={toggle} />
          </div>
          <div className={styles.nav}>
            <DesktopNavigation links={links} />
          </div>
          <MobileNavigation
            links={links}
            isOpen={isOpen}
            socialLinks={socialLinks}
          />
        </div>
      </div>
    </header>
  );
};
