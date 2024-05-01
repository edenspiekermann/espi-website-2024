export interface FooterProperties {
  title: string;
  pageLinks: Link[];
  socialLinks: Link[];
}

type Link = {
  id: string;
  label: string;
  page: {
    slug: string;
  };
};
