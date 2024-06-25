export interface ButtonProperties {
  text: string;
  onClick?: () => void;
  isInverted?: boolean;
  url?: string;
  isScrollButton?: boolean;
  isRevealButton?: boolean;
}
