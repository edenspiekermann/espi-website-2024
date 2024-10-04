import { CallToActionRecord } from "@/graphql/types/generated";

export interface ButtonProperties {
  text: string;
  onClick?: () => void;
  isInverted?: boolean;
  url?: string;
  slug?: string;
  type?: CallToActionRecord["buttonType"];
  replace?: boolean;
}
