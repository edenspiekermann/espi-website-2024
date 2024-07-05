"use client";

import { NavigationContext } from "@/context/navigation-context";
import React, { useContext } from "react";
import { Navigation } from "./navigation";
import { NavigationWrapperProperties } from "./interfaces";

export const NavigationWrapper = ({
  links,
  showLogo,
  alternativeLogoText,
  socialLinks,
  children,
  cta,
}: NavigationWrapperProperties) => {
  const { navState } = useContext(NavigationContext);

  return (
    <>
      <Navigation
        isInverted={navState.isInverted}
        links={links}
        showLogo={showLogo}
        alternativeLogoText={alternativeLogoText}
        socialLinks={socialLinks}
        cta={cta}
      />
      {children}
    </>
  );
};
