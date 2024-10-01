import React from "react";
import { NavigationRecord } from "@/graphql/types/generated";

export interface NavigationBaseProperties {
  links: NavLinkProperties[];
  cta: NavigationRecord["cta"];
}

export interface DesktopNavigationProperties extends NavigationBaseProperties {
  isInverted?: boolean;
}

export interface NavigationProperties extends NavigationBaseProperties {
  showLogo: boolean;
  alternativeLogoText: string;
  socialLinks: NavSocialLinkProperties[];
  isInverted?: boolean;
  isFixed?: boolean;
}

export interface NavigationWrapperProperties extends NavigationBaseProperties {
  showLogo: boolean;
  alternativeLogoText: string;
  socialLinks: NavSocialLinkProperties[];
  children: React.ReactNode;
}

export interface NavLinkProperties {
  id: string;
  label: string;
  slug: string;
}

export interface NavSocialLinkProperties {
  id: string;
  title: string;
  url: string;
}

export interface HamburgerProperties {
  isOpen: boolean;
  onClick: any;
}

export interface MobileNavigationProperties extends NavigationBaseProperties {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  socialLinks: NavSocialLinkProperties[];
}
