import {
  LinkRecord,
  PageRecord,
  SocialLinkRecord,
} from "@/graphql/types/generated";

export interface FooterProperties {
  title: string;
  pageLinks: PageRecord[];
  socialLinks: SocialLinkRecord[];
  legalLinks: LinkRecord[];
  copyrightText: string;
}
