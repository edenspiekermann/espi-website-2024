import React from "react";

export interface NavigationProperties {
  links: NavLinkProperties[];
  showLogo: boolean;
  alternativeLogoText: string;
  socialLinks: NavSocialLinkProperties[];
  isInverted?: boolean;
}

export interface NavigationWrapperProperties {
  links: NavLinkProperties[];
  showLogo: boolean;
  alternativeLogoText: string;
  socialLinks: NavSocialLinkProperties[];
  children: React.ReactNode;
}

export interface DesktopNavigationProperties {
  links: NavLinkProperties[];
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

export interface MobileNavigationProperties {
  isOpen: boolean;
  links: NavLinkProperties[];
  socialLinks: NavSocialLinkProperties[];
}
