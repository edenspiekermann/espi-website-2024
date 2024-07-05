import {
  LinkRecord,
  PageRecord,
  SocialLinkRecord,
} from "@/graphql/types/generated";

export interface FooterProperties {
  title: string;
  titleCta: {
    id: string;
    text: string;
    url: string;
  };
  pageLinks: PageRecord[];
  socialLinks: SocialLinkRecord[];
  legalLinks: LinkRecord[];
  copyrightText: string;
}
