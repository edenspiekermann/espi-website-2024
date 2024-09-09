"use client";

import React, { useEffect, useState } from "react";
import { DesktopNavigation } from "./desktop-navigation";
import { NavigationProperties } from "./interfaces";
import { MobileNavigation } from "./mobile-navigation";
import { EspiLogo } from "../../assets/icons/espi-logo";
import styles from "./styles.module.scss";
import Link from "next/link";
import classNames from "classnames";
import { MenuToggle } from "./menu-toggle";
import { useScroll, useMotionValueEvent } from "framer-motion";

export const Navigation: React.FC<NavigationProperties> = ({
  links,
  cta,
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
  const [isSticky, setIsSticky] = useState(true);

  const classNameList = classNames({
    [styles.navigation]: true,
    [styles.hidden]: !show,
    [styles.inverted]: isInverted,
    [styles.sticky]: isSticky,
    [styles.relative]: !isSticky,
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }

    if (latest > 300) {
      setIsSticky(false);
    } else {
      setIsSticky(true);
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
            <DesktopNavigation links={links} cta={cta} />
          </div>
          <MobileNavigation
            links={links}
            isOpen={isOpen}
            socialLinks={socialLinks}
            cta={cta}
          />
        </div>
      </div>
    </header>
  );
};
