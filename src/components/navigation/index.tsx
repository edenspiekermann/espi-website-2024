"use client";

import React, { useEffect, useState } from "react";
import { DesktopNavigation } from "./desktop-navigation";
import { NavigationProperties } from "./interfaces";
import { MobileNavigation } from "./mobile-navigation";
import EspiLogo from "./espi-logo.svg";
import "./styles.scss";
import Link from "next/link";
import classNames from "classnames";
import Image from "next/image";
import { Hamburger } from "./hamburger";
import { useScroll, useMotionValueEvent } from "framer-motion";

export const Navigation: React.FC<NavigationProperties> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const toggle = () => setIsOpen(!isOpen);
  const { scrollY } = useScroll();

  const classNameList = classNames({
    navigation: true,
    "navigation--hidden": !show,
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
          <Link href="/" title="home">
            <Image src={EspiLogo} alt={"edenspiekermann"} />
          </Link>
          <div className="navigation__hamburger">
            <Hamburger isOpen={isOpen} onClick={toggle} />
          </div>
          <div className="navigation__nav">
            <DesktopNavigation links={links} />
          </div>
          <MobileNavigation links={links} isOpen={isOpen} />
        </div>
      </div>
    </header>
  );
};
