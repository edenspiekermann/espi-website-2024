import React from "react";
import { ButtonProperties } from "../button/interfaces";

export interface NavigationBaseProperties {
  links: NavLinkProperties[];
  cta: ButtonProperties;
}

export interface NavigationProperties extends NavigationBaseProperties {
  showLogo: boolean;
  alternativeLogoText: string;
  socialLinks: NavSocialLinkProperties[];
  isInverted?: boolean;
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
  socialLinks: NavSocialLinkProperties[];
}
