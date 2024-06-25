"use client";

import React, { useEffect, useState } from "react";
import { DesktopNavigation } from "./desktop-navigation";
import { NavigationProperties } from "./interfaces";
import { MobileNavigation } from "./mobile-navigation";
import { EspiLogo } from "./espi-logo";
import "./styles.scss";
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
    navigation: true,
    "navigation--hidden": !show,
    "navigation--inverted": isInverted,
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
        <div className="navigation__wrapper">
          {showLogo ? (
            <Link href="/" title="home">
              <EspiLogo />
            </Link>
          ) : (
            <span className="navigation__alt-text">{alternativeLogoText}</span>
          )}
          <div className="navigation__menu">
            <MenuToggle isOpen={isOpen} onClick={toggle} />
          </div>
          <div className="navigation__nav">
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
