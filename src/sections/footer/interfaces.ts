import {
  FooterRecord,
  LinkRecord,
  PageLinkRecord,
  PageRecord,
  SocialLinkRecord,
  TextRecord,
} from "@/graphql/types/generated";

export interface FooterProperties {
  title: string;
  loopingTitleText: TextRecord[];
  titleCta: FooterRecord["titleCta"];
  pageLinks: PageRecord[];
  socialLinks: SocialLinkRecord[];
  legalLinks: LinkRecord[];
  copyrightText: string;
}
