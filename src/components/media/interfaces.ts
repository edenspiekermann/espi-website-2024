export interface MediaProperties {
  responsiveImage?: {
    src: string;
    alt?: string;
  };
  video?: {
    mp4Url: string;
    isHomePageHeader?: boolean;
  };
  priority?: boolean;
  sizes?: string;
}
