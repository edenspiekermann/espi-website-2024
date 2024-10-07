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
  isFixed = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const toggle = () => setIsOpen(!isOpen);
  const { scrollY } = useScroll();
  const [isTransparent, setIsTransparent] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  const classNameList = classNames({
    [styles.navigation]: true,
    [styles.hidden]: !show,
    [styles.inverted]: isInverted && !isScrolling,
    [styles.fixed]: isFixed,
    [styles.relative]: !isFixed,
    [styles.transparent]: isTransparent,
    [styles.scrolling]: isScrolling,
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScrollY) {
      setShow(false);
      setIsScrolling(false);
    } else {
      setShow(true);
      setIsTransparent(false);
      setIsScrolling(true);
    }

    if (latest === 0) {
      setIsScrolling(false);
      setIsTransparent(true);
      setShow(true);
    }

    setLastScrollY((prev) => latest);
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
            <Link href="/" title="home" className={styles.logo}>
              <EspiLogo />
            </Link>
          ) : (
            <span className={styles.navAltText}>{alternativeLogoText}</span>
          )}
          <div className={styles.menu}>
            <MenuToggle isOpen={isOpen} onClick={toggle} />
          </div>
          <div className={styles.nav}>
            <DesktopNavigation
              links={links}
              cta={cta}
              isInverted={isInverted && !isScrolling}
            />
          </div>
          <MobileNavigation
            links={links}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            socialLinks={socialLinks}
            cta={cta}
          />
        </div>
      </div>
    </header>
  );
};
