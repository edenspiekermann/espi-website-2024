import {
  LinkRecord,
  PageRecord,
  SocialLinkRecord,
  TextRecord,
} from "@/graphql/types/generated";

export interface FooterProperties {
  title: string;
  loopingTitleText: TextRecord[];
  titleCta: LinkRecord;
  pageLinks: PageRecord[];
  socialLinks: SocialLinkRecord[];
  legalLinks: LinkRecord[];
  copyrightText: string;
}
