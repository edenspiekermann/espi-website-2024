export interface NavigationProperties {
  links: LinkProperties[];
}

export interface LinkProperties {
  id: string;
  label: string;
  slug: string;
}

export interface HamburgerProperties {
  isOpen: boolean;
  onClick: any;
}

export interface MobileNavigationProperties {
  isOpen: boolean;
  links: LinkProperties[];
}
