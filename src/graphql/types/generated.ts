import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BooleanType: { input: boolean; output: boolean };
  CustomData: {
    input: Record<string, unknown>;
    output: Record<string, unknown>;
  };
  Date: { input: string; output: string };
  DateTime: { input: string; output: string };
  FloatType: { input: number; output: number };
  IntType: { input: number; output: number };
  ItemId: { input: string; output: string };
  JsonField: { input: unknown; output: unknown };
  MetaTagAttributes: {
    input: Record<string, string>;
    output: Record<string, string>;
  };
  UploadId: { input: string; output: string };
};

export type AltFileField = FileFieldInterface & {
  __typename?: "AltFileField";
  _createdAt: Scalars["DateTime"]["output"];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  alt: Scalars["String"]["output"];
  author?: Maybe<Scalars["String"]["output"]>;
  basename: Scalars["String"]["output"];
  blurUpThumb?: Maybe<Scalars["String"]["output"]>;
  blurhash?: Maybe<Scalars["String"]["output"]>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars["String"]["output"]>;
  customData: Scalars["CustomData"]["output"];
  exifInfo: Scalars["CustomData"]["output"];
  filename: Scalars["String"]["output"];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars["String"]["output"];
  height?: Maybe<Scalars["IntType"]["output"]>;
  id: Scalars["UploadId"]["output"];
  md5: Scalars["String"]["output"];
  mimeType: Scalars["String"]["output"];
  notes?: Maybe<Scalars["String"]["output"]>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars["IntType"]["output"];
  smartTags: Array<Scalars["String"]["output"]>;
  tags: Array<Scalars["String"]["output"]>;
  thumbhash?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  url: Scalars["String"]["output"];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars["IntType"]["output"]>;
};

export type AltFileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type AltFileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars["Float"]["input"];
  quality?: Scalars["Int"]["input"];
  size?: Scalars["Int"]["input"];
};

export type AltFileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type AltFileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type AltFileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars["String"]["input"]>;
};

export type AltFileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type AltFileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

/** Block of type Article Image (article_image) */
export type ArticleImageRecord = RecordInterface & {
  __typename?: "ArticleImageRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  asset: FileField;
  id: Scalars["ItemId"]["output"];
};

/** Block of type Article Image (article_image) */
export type ArticleImageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ArticleModelContentBlocksField =
  | ArticleImageRecord
  | ArticleQuoteRecord;

export type ArticleModelContentField = {
  __typename?: "ArticleModelContentField";
  blocks: Array<ArticleModelContentBlocksField>;
  links: Array<Scalars["String"]["output"]>;
  value: Scalars["JsonField"]["output"];
};

export type ArticleModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ArticleModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ArticleModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  author?: InputMaybe<StringFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  headerImage?: InputMaybe<FileFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum ArticleModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  AuthorAsc = "author_ASC",
  AuthorDesc = "author_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** Block of type Article Quote (article_quote) */
export type ArticleQuoteRecord = RecordInterface & {
  __typename?: "ArticleQuoteRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  author?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ItemId"]["output"];
  quote: Scalars["String"]["output"];
};

/** Block of type Article Quote (article_quote) */
export type ArticleQuoteRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Article (article) */
export type ArticleRecord = RecordInterface & {
  __typename?: "ArticleRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  author: Scalars["String"]["output"];
  content: ArticleModelContentField;
  headerImage?: Maybe<FileField>;
  id: Scalars["ItemId"]["output"];
  slug: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

/** Record of type Article (article) */
export type ArticleRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars["BooleanType"]["input"]>;
};

/** Block of type Call To Action (call_to_action) */
export type CallToActionRecord = RecordInterface & {
  __typename?: "CallToActionRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  buttonType: Scalars["String"]["output"];
  id: Scalars["ItemId"]["output"];
  pageLink?: Maybe<PageRecord>;
  text: Scalars["String"]["output"];
  url?: Maybe<Scalars["String"]["output"]>;
};

/** Block of type Call To Action (call_to_action) */
export type CallToActionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type CaseContentModelContentBlocksField =
  | CaseStudyContentImageRecord
  | ContentQuoteRecord;

export type CaseContentModelContentField = {
  __typename?: "CaseContentModelContentField";
  blocks: Array<CaseContentModelContentBlocksField>;
  links: Array<Scalars["String"]["output"]>;
  value: Scalars["JsonField"]["output"];
};

export type CaseContentModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CaseContentModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CaseContentModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  bodyText?: InputMaybe<TextFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  headlineText?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
};

export enum CaseContentModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  HeadlineTextAsc = "headlineText_ASC",
  HeadlineTextDesc = "headlineText_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
}

/** Record of type Case Content (case_content) */
export type CaseContentRecord = RecordInterface & {
  __typename?: "CaseContentRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  bodyText?: Maybe<Scalars["String"]["output"]>;
  content: CaseContentModelContentField;
  headlineText: Scalars["String"]["output"];
  id: Scalars["ItemId"]["output"];
};

/** Record of type Case Content (case_content) */
export type CaseContentRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Case Content (case_content) */
export type CaseContentRecordBodyTextArgs = {
  markdown?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CaseIntroModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CaseIntroModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CaseIntroModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  problemText?: InputMaybe<StringFilter>;
  solutionText?: InputMaybe<StringFilter>;
  text?: InputMaybe<TextFilter>;
};

export enum CaseIntroModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  ProblemTextAsc = "problemText_ASC",
  ProblemTextDesc = "problemText_DESC",
  SolutionTextAsc = "solutionText_ASC",
  SolutionTextDesc = "solutionText_DESC",
}

/** Record of type Case Intro (case_intro) */
export type CaseIntroRecord = RecordInterface & {
  __typename?: "CaseIntroRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  problemText: Scalars["String"]["output"];
  solutionText: Scalars["String"]["output"];
  text: Scalars["String"]["output"];
};

/** Record of type Case Intro (case_intro) */
export type CaseIntroRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Case Intro (case_intro) */
export type CaseIntroRecordTextArgs = {
  markdown?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Block of type Case Study Content Image (case_study_content_image) */
export type CaseStudyContentImageRecord = RecordInterface & {
  __typename?: "CaseStudyContentImageRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  halfSize: Scalars["BooleanType"]["output"];
  id: Scalars["ItemId"]["output"];
  media: FileField;
};

/** Block of type Case Study Content Image (case_study_content_image) */
export type CaseStudyContentImageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type CaseStudyModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CaseStudyModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CaseStudyModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  backgroundColor?: InputMaybe<ColorFilter>;
  cardMedia1x1?: InputMaybe<FileFilter>;
  cardMedia2x1?: InputMaybe<FileFilter>;
  cardMedia3x2?: InputMaybe<FileFilter>;
  cardMedia3x4?: InputMaybe<FileFilter>;
  cardMedia4x3?: InputMaybe<FileFilter>;
  featuredMedia?: InputMaybe<FileFilter>;
  id?: InputMaybe<ItemIdFilter>;
  invertNav?: InputMaybe<BooleanFilter>;
  relatedIndustries?: InputMaybe<LinksFilter>;
  relatedServices?: InputMaybe<LinksFilter>;
  sections?: InputMaybe<LinksFilter>;
  slug?: InputMaybe<SlugFilter>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum CaseStudyModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  InvertNavAsc = "invertNav_ASC",
  InvertNavDesc = "invertNav_DESC",
  SubtitleAsc = "subtitle_ASC",
  SubtitleDesc = "subtitle_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type CaseStudyModelSectionsField =
  | CaseContentRecord
  | CaseIntroRecord
  | PurposeRecord
  | SpacerRecord
  | StatsSectionRecord
  | TeaserRelatedCaseRecord;

/** Record of type Case Study (case_study) */
export type CaseStudyRecord = RecordInterface & {
  __typename?: "CaseStudyRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  backgroundColor: ColorField;
  cardMedia1x1: FileField;
  cardMedia2x1: FileField;
  cardMedia3x2: FileField;
  cardMedia3x4: FileField;
  cardMedia4x3: FileField;
  featuredMedia: FileField;
  id: Scalars["ItemId"]["output"];
  invertNav: Scalars["BooleanType"]["output"];
  relatedIndustries: Array<IndustryRecord>;
  relatedServices: Array<ServiceRecord>;
  sections: Array<CaseStudyModelSectionsField>;
  slug: Scalars["String"]["output"];
  subtitle: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

/** Record of type Case Study (case_study) */
export type CaseStudyRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type CollectionMetadata = {
  __typename?: "CollectionMetadata";
  count: Scalars["IntType"]["output"];
};

export enum ColorBucketType {
  Black = "black",
  Blue = "blue",
  Brown = "brown",
  Cyan = "cyan",
  Green = "green",
  Grey = "grey",
  Orange = "orange",
  Pink = "pink",
  Purple = "purple",
  Red = "red",
  White = "white",
  Yellow = "yellow",
}

export type ColorField = {
  __typename?: "ColorField";
  alpha: Scalars["IntType"]["output"];
  blue: Scalars["IntType"]["output"];
  cssRgb: Scalars["String"]["output"];
  green: Scalars["IntType"]["output"];
  hex: Scalars["String"]["output"];
  red: Scalars["IntType"]["output"];
};

/** Specifies how to filter Color fields */
export type ColorFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>;
};

/** Block of type Content Quote (content_quote) */
export type ContentQuoteRecord = RecordInterface & {
  __typename?: "ContentQuoteRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  author: Scalars["String"]["output"];
  id: Scalars["ItemId"]["output"];
  quote: Scalars["String"]["output"];
};

/** Block of type Content Quote (content_quote) */
export type ContentQuoteRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ContentTextImageModelContentBlocksField =
  | CaseStudyContentImageRecord
  | ContentQuoteRecord;

export type ContentTextImageModelContentField = {
  __typename?: "ContentTextImageModelContentField";
  blocks: Array<ContentTextImageModelContentBlocksField>;
  links: Array<Scalars["String"]["output"]>;
  value: Scalars["JsonField"]["output"];
};

export type ContentTextImageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentTextImageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentTextImageModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  backgroundColor?: InputMaybe<StringFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  leftContent?: InputMaybe<LinkFilter>;
};

export type ContentTextImageModelLeftContentField =
  | SidebarGenericRecord
  | SidebarNewsRecord;

export enum ContentTextImageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  BackgroundColorAsc = "backgroundColor_ASC",
  BackgroundColorDesc = "backgroundColor_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
}

/** Record of type Content Text Image (content_text_image) */
export type ContentTextImageRecord = RecordInterface & {
  __typename?: "ContentTextImageRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  backgroundColor?: Maybe<Scalars["String"]["output"]>;
  content: ContentTextImageModelContentField;
  id: Scalars["ItemId"]["output"];
  leftContent: ContentTextImageModelLeftContentField;
};

/** Record of type Content Text Image (content_text_image) */
export type ContentTextImageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Cookie Consent Form (cookie_consent_form) */
export type CookieConsentFormRecord = RecordInterface & {
  __typename?: "CookieConsentFormRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  items: Array<CookieConsentItemRecord>;
  text: Scalars["String"]["output"];
};

/** Record of type Cookie Consent Form (cookie_consent_form) */
export type CookieConsentFormRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type CookieConsentItemModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CookieConsentItemModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CookieConsentItemModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  label?: InputMaybe<StringFilter>;
};

export enum CookieConsentItemModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  LabelAsc = "label_ASC",
  LabelDesc = "label_DESC",
}

/** Record of type Cookie Consent Item (cookie_consent_item) */
export type CookieConsentItemRecord = RecordInterface & {
  __typename?: "CookieConsentItemRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  description: Scalars["String"]["output"];
  id: Scalars["ItemId"]["output"];
  label: Scalars["String"]["output"];
};

/** Record of type Cookie Consent Item (cookie_consent_item) */
export type CookieConsentItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** Specifies how to filter Date fields */
export type DateFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars["Date"]["input"]>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars["Date"]["input"]>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars["Date"]["input"]>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars["Date"]["input"]>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars["Date"]["input"]>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars["Date"]["input"]>;
};

/** Block of type Divider (divider) */
export type DividerRecord = RecordInterface & {
  __typename?: "DividerRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  invertColor: Scalars["BooleanType"]["output"];
  text?: Maybe<Scalars["String"]["output"]>;
};

/** Block of type Divider (divider) */
export type DividerRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Drawer Item (drawer_item) */
export type DrawerItemRecord = RecordInterface & {
  __typename?: "DrawerItemRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  body: Scalars["String"]["output"];
  id: Scalars["ItemId"]["output"];
  title: Scalars["String"]["output"];
};

/** Block of type Drawer Item (drawer_item) */
export type DrawerItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Drawer Item (drawer_item) */
export type DrawerItemRecordBodyArgs = {
  markdown?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DrawerModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<DrawerModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DrawerModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  imageOnLeft?: InputMaybe<BooleanFilter>;
  media?: InputMaybe<FileFilter>;
  title?: InputMaybe<StringFilter>;
  whiteBackground?: InputMaybe<BooleanFilter>;
};

export enum DrawerModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  ImageOnLeftAsc = "imageOnLeft_ASC",
  ImageOnLeftDesc = "imageOnLeft_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  WhiteBackgroundAsc = "whiteBackground_ASC",
  WhiteBackgroundDesc = "whiteBackground_DESC",
}

/** Record of type Drawer (drawer) */
export type DrawerRecord = RecordInterface & {
  __typename?: "DrawerRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  imageOnLeft: Scalars["BooleanType"]["output"];
  items: Array<DrawerItemRecord>;
  media: FileField;
  title: Scalars["String"]["output"];
  whiteBackground: Scalars["BooleanType"]["output"];
};

/** Record of type Drawer (drawer) */
export type DrawerRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export enum FaviconType {
  AppleTouchIcon = "appleTouchIcon",
  Icon = "icon",
  MsApplication = "msApplication",
}

export type FileField = FileFieldInterface & {
  __typename?: "FileField";
  _createdAt: Scalars["DateTime"]["output"];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  alt?: Maybe<Scalars["String"]["output"]>;
  author?: Maybe<Scalars["String"]["output"]>;
  basename: Scalars["String"]["output"];
  blurUpThumb?: Maybe<Scalars["String"]["output"]>;
  blurhash?: Maybe<Scalars["String"]["output"]>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars["String"]["output"]>;
  customData: Scalars["CustomData"]["output"];
  exifInfo: Scalars["CustomData"]["output"];
  filename: Scalars["String"]["output"];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars["String"]["output"];
  height?: Maybe<Scalars["IntType"]["output"]>;
  id: Scalars["UploadId"]["output"];
  md5: Scalars["String"]["output"];
  mimeType: Scalars["String"]["output"];
  notes?: Maybe<Scalars["String"]["output"]>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars["IntType"]["output"];
  smartTags: Array<Scalars["String"]["output"]>;
  tags: Array<Scalars["String"]["output"]>;
  thumbhash?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  url: Scalars["String"]["output"];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars["IntType"]["output"]>;
};

export type FileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type FileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars["Float"]["input"];
  quality?: Scalars["Int"]["input"];
  size?: Scalars["Int"]["input"];
};

export type FileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type FileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type FileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars["String"]["input"]>;
};

export type FileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type FileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

export type FileFieldInterface = {
  _createdAt: Scalars["DateTime"]["output"];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  alt?: Maybe<Scalars["String"]["output"]>;
  author?: Maybe<Scalars["String"]["output"]>;
  basename: Scalars["String"]["output"];
  blurUpThumb?: Maybe<Scalars["String"]["output"]>;
  blurhash?: Maybe<Scalars["String"]["output"]>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars["String"]["output"]>;
  customData: Scalars["CustomData"]["output"];
  exifInfo: Scalars["CustomData"]["output"];
  filename: Scalars["String"]["output"];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars["String"]["output"];
  height?: Maybe<Scalars["IntType"]["output"]>;
  id: Scalars["UploadId"]["output"];
  md5: Scalars["String"]["output"];
  mimeType: Scalars["String"]["output"];
  notes?: Maybe<Scalars["String"]["output"]>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars["IntType"]["output"];
  smartTags: Array<Scalars["String"]["output"]>;
  tags: Array<Scalars["String"]["output"]>;
  thumbhash?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  url: Scalars["String"]["output"];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars["IntType"]["output"]>;
};

export type FileFieldInterfaceAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type FileFieldInterfaceBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars["Float"]["input"];
  quality?: Scalars["Int"]["input"];
  size?: Scalars["Int"]["input"];
};

export type FileFieldInterfaceCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type FileFieldInterfaceFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type FileFieldInterfaceResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars["String"]["input"]>;
};

export type FileFieldInterfaceTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type FileFieldInterfaceUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

/** Specifies how to filter Single-file/image fields */
export type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: InputMaybe<Scalars["UploadId"]["input"]>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars["UploadId"]["input"]>>>;
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars["UploadId"]["input"]>;
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["UploadId"]["input"]>>>;
};

export type FooterModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  copyrightText?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  pageLinks?: InputMaybe<LinksFilter>;
  socialLinks?: InputMaybe<LinksFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum FooterModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  CopyrightTextAsc = "copyrightText_ASC",
  CopyrightTextDesc = "copyrightText_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type FooterModelTitleCtaField = LinkRecord | PageLinkRecord;

/** Record of type Footer (footer) */
export type FooterRecord = RecordInterface & {
  __typename?: "FooterRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  copyrightText?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ItemId"]["output"];
  legalLinks: Array<LinkRecord>;
  loopingTitleText: Array<TextRecord>;
  pageLinks: Array<PageRecord>;
  socialLinks: Array<SocialLinkRecord>;
  title: Scalars["String"]["output"];
  titleCta?: Maybe<FooterModelTitleCtaField>;
};

/** Record of type Footer (footer) */
export type FooterRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type FullWidthImageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<FullWidthImageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FullWidthImageModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  media?: InputMaybe<FileFilter>;
};

export enum FullWidthImageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
}

/** Record of type Full Width Image (full_width_image) */
export type FullWidthImageRecord = RecordInterface & {
  __typename?: "FullWidthImageRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  media: FileField;
};

/** Record of type Full Width Image (full_width_image) */
export type FullWidthImageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Multiple files/images field */
export type GalleryFilter = {
  /** Filter records that have all of the specified uploads. The specified values must be Upload IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars["UploadId"]["input"]>>>;
  /** Filter records that have one of the specified uploads. The specified values must be Upload IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars["UploadId"]["input"]>>>;
  /** Search for records with an exact match. The specified values must be Upload IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars["UploadId"]["input"]>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Filter records that do not have any of the specified uploads. The specified values must be Upload IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["UploadId"]["input"]>>>;
};

export type GlobalSeoField = {
  __typename?: "GlobalSeoField";
  facebookPageUrl?: Maybe<Scalars["String"]["output"]>;
  fallbackSeo?: Maybe<SeoField>;
  siteName?: Maybe<Scalars["String"]["output"]>;
  titleSuffix?: Maybe<Scalars["String"]["output"]>;
  twitterAccount?: Maybe<Scalars["String"]["output"]>;
};

export type HeaderNewsModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeaderNewsModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeaderNewsModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
};

export enum HeaderNewsModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
}

/** Record of type Header News (header_news) */
export type HeaderNewsRecord = RecordInterface & {
  __typename?: "HeaderNewsRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
};

/** Record of type Header News (header_news) */
export type HeaderNewsRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type HeaderSimpleModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeaderSimpleModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeaderSimpleModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  featuredText?: InputMaybe<TextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  showCta?: InputMaybe<BooleanFilter>;
  showInquiryInfo?: InputMaybe<BooleanFilter>;
  subtext?: InputMaybe<TextFilter>;
};

export enum HeaderSimpleModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  ShowCtaAsc = "showCta_ASC",
  ShowCtaDesc = "showCta_DESC",
  ShowInquiryInfoAsc = "showInquiryInfo_ASC",
  ShowInquiryInfoDesc = "showInquiryInfo_DESC",
}

/** Record of type Header Simple (header_simple) */
export type HeaderSimpleRecord = RecordInterface & {
  __typename?: "HeaderSimpleRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  cta?: Maybe<CallToActionRecord>;
  featuredText: Scalars["String"]["output"];
  id: Scalars["ItemId"]["output"];
  inquiryInfo?: Maybe<InquiryInfoRecord>;
  showCta: Scalars["BooleanType"]["output"];
  showInquiryInfo: Scalars["BooleanType"]["output"];
  subtext?: Maybe<Scalars["String"]["output"]>;
};

/** Record of type Header Simple (header_simple) */
export type HeaderSimpleRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Header Simple (header_simple) */
export type HeaderSimpleRecordFeaturedTextArgs = {
  markdown?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Record of type Header Simple (header_simple) */
export type HeaderSimpleRecordSubtextArgs = {
  markdown?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type HeaderWithTagModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeaderWithTagModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeaderWithTagModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  industry?: InputMaybe<LinkFilter>;
  subtitle?: InputMaybe<TextFilter>;
  title?: InputMaybe<TextFilter>;
};

export enum HeaderWithTagModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
}

/** Record of type Header With Tag (header_with_tag) */
export type HeaderWithTagRecord = RecordInterface & {
  __typename?: "HeaderWithTagRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  industry: IndustryRecord;
  subtitle?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
};

/** Record of type Header With Tag (header_with_tag) */
export type HeaderWithTagRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Header With Tag (header_with_tag) */
export type HeaderWithTagRecordSubtitleArgs = {
  markdown?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Record of type Header With Tag (header_with_tag) */
export type HeaderWithTagRecordTitleArgs = {
  markdown?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type HomepageHeroModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<HomepageHeroModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HomepageHeroModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  media?: InputMaybe<FileFilter>;
};

export enum HomepageHeroModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
}

/** Record of type Homepage Hero (homepage_hero) */
export type HomepageHeroRecord = RecordInterface & {
  __typename?: "HomepageHeroRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  media: FileField;
};

/** Record of type Homepage Hero (homepage_hero) */
export type HomepageHeroRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ImageWithStatModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ImageWithStatModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ImageWithStatModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  media?: InputMaybe<FileFilter>;
};

export enum ImageWithStatModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
}

/** Record of type Image With Stat (image_with_stat) */
export type ImageWithStatRecord = RecordInterface & {
  __typename?: "ImageWithStatRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  media: FileField;
  stats: Array<StatRecord>;
};

/** Record of type Image With Stat (image_with_stat) */
export type ImageWithStatRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-remove)
   */
  bgRemove?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /**
   * Background Removal Fallback
   *
   * Overrides default fallback behavior for bg-remove failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-remove)
   */
  bgRemoveFallback?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /**
   * Background Replacement
   *
   * Replaces background from image using a string based prompt.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-replace)
   */
  bgReplace?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Background Removal Fallback
   *
   * Overrides default fallback behavior for bg-replace failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-replace)
   */
  bgReplaceFallback?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /**
   * Background Replacement Negative Prompt
   *
   * Provides a negative text suggestion for background replacement.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-replace-neg-prompt)
   */
  bgReplaceNegPrompt?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: InputMaybe<ImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: InputMaybe<ImgixParamsFill>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Fill Generative Fallback
   *
   * Sets the fallback behavior for generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-fallback)
   */
  fillGenFallback?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /**
   * Fill Generative Negative Prompt
   *
   * Provides a negative text suggestion to the generative fill parameter. Used to reduce the probability of a subject, detail, or object appearing in generative output.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-neg-prompt)
   */
  fillGenNegPrompt?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Fill Generative Position
   *
   * Sets the position of the Origin Image in relation to the generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-pos)
   */
  fillGenPos?: InputMaybe<Array<ImgixParamsFillGenPos>>;
  /**
   * Fill Generative Prompt
   *
   * Provides a text suggestion to the generative fill parameter.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-prompt)
   */
  fillGenPrompt?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Fill Generative Seed
   *
   * Sets the generative seed value. Used to generate similar outputs from different prompts.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-seed)
   */
  fillGenSeed?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Fill Gradient Color Space
   *
   * Defines the color space as linear, sRGB, Oklab, HSL, or LCH for gradient color interpolation
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-cs)
   */
  fillGradientCs?: InputMaybe<ImgixParamsFillGradientCs>;
  /**
   * Fill Gradient Linear
   *
   * Blends a gradient between two colors, {color1} and {color2}, along a straight path
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-linear)
   */
  fillGradientLinear?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Fill Gradient Linear Direction
   *
   * The fill-gradient-linear-direction specifies the gradient's direction, flowing towards the bottom, top, right, or left
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-linear-direction)
   */
  fillGradientLinearDirection?: InputMaybe<
    Array<ImgixParamsFillGradientLinearDirection>
  >;
  /**
   * Fill Gradient Radial
   *
   * The fill-gradient-radial parameter creates a circular gradient transitioning from a central color (Color1) to an outer color (Color2)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial)
   */
  fillGradientRadial?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Fill Gradient Radial Radius
   *
   * Parameter defines the radial gradient's radius as pixels or a percentage (0.0-1.0) of the image's smallest dimension
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial-radius)
   */
  fillGradientRadialRadius?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Fill Gradient Radial X
   *
   * Specifies the location of the radial gradient's center along the x-axis, using either a pixel value or a floating point percentage (ranging from 0.0 to 1.0) of the image's width
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial-x)
   */
  fillGradientRadialX?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Fill Gradient Radial Y
   *
   * Parameter sets the radial gradient's center on the y-axis, using pixels or a 0.0 to 1.0 percentage of the image's height
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial-y)
   */
  fillGradientRadialY?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Fill Gradient Type
   *
   * Specifies if a gradient is radial (circular) or linear (straight)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-type)
   */
  fillGradientType?: InputMaybe<ImgixParamsFillGradientType>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: InputMaybe<ImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: InputMaybe<ImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: InputMaybe<ImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   */
  fps?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   */
  frame?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Animated Gif Quality
   *
   * Specifies the quality of the animated gif. The higher the value, the better more compression is applied.
   *
   * Depends on: `fm=gif`
   */
  gifQ?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   */
  interval?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc?: InputMaybe<ImgixParamsIptc>;
  /**
   * Jpg Progressive
   *
   * Specifies whether or not a jpg/jpeg uses progressive (true) or baseline (false)
   */
  jpgProgressive?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   */
  loop?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: InputMaybe<ImgixParamsPalette>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   */
  reverse?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   */
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Bypasses any [DatoCMS Automatic Image Optimization](https://www.datocms.com/docs/cdn-settings/advanced-asset-settings) that might be set up for the project.
   *
   * Exercise caution when using this parameter, as it could significantly increase your bandwidth costs.
   */
  skipDefaultOptimizations?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /**
   * Sanitize Svg
   *
   * Specifies whether to sanitize an SVG.
   */
  svgSanitize?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: InputMaybe<ImgixParamsTrim>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
   */
  txtX?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
   */
  txtY?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Super Resolution
   *
   * Uses generative AI fill to upscale low resolution images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution/upscale)
   */
  upscale?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /**
   * Super Resolution Fallback
   *
   * Overrides default fallback behavior for super resolution failures
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution/upscale-fallback)
   */
  upscaleFallback?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w?: InputMaybe<Scalars["FloatType"]["input"]>;
};

export enum ImgixParamsAuto {
  Compress = "compress",
  Enhance = "enhance",
  Format = "format",
  Redeye = "redeye",
}

export enum ImgixParamsBlendAlign {
  Bottom = "bottom",
  Center = "center",
  Left = "left",
  Middle = "middle",
  Right = "right",
  Top = "top",
}

export enum ImgixParamsBlendCrop {
  Bottom = "bottom",
  Faces = "faces",
  Left = "left",
  Right = "right",
  Top = "top",
}

export enum ImgixParamsBlendFit {
  Clamp = "clamp",
  Clip = "clip",
  Crop = "crop",
  Max = "max",
  Scale = "scale",
}

export enum ImgixParamsBlendMode {
  Burn = "burn",
  Color = "color",
  Darken = "darken",
  Difference = "difference",
  Dodge = "dodge",
  Exclusion = "exclusion",
  Hardlight = "hardlight",
  Hue = "hue",
  Lighten = "lighten",
  Luminosity = "luminosity",
  Multiply = "multiply",
  Normal = "normal",
  Overlay = "overlay",
  Saturation = "saturation",
  Screen = "screen",
  Softlight = "softlight",
}

export enum ImgixParamsBlendSize {
  Inherit = "inherit",
}

export enum ImgixParamsCh {
  Dpr = "dpr",
  SaveData = "saveData",
  Width = "width",
}

export enum ImgixParamsCrop {
  Bottom = "bottom",
  Edges = "edges",
  Entropy = "entropy",
  Faces = "faces",
  Focalpoint = "focalpoint",
  Left = "left",
  Right = "right",
  Top = "top",
}

export enum ImgixParamsCs {
  Adobergb1998 = "adobergb1998",
  Srgb = "srgb",
  Strip = "strip",
  Tinysrgb = "tinysrgb",
}

export enum ImgixParamsFill {
  Blur = "blur",
  Gen = "gen",
  Generative = "generative",
  Gradient = "gradient",
  Solid = "solid",
}

export enum ImgixParamsFillGenPos {
  Bottom = "bottom",
  Center = "center",
  Left = "left",
  Middle = "middle",
  Right = "right",
  Top = "top",
}

export enum ImgixParamsFillGradientCs {
  Hsl = "hsl",
  Lch = "lch",
  Linear = "linear",
  Oklab = "oklab",
  Srgb = "srgb",
}

export enum ImgixParamsFillGradientLinearDirection {
  Bottom = "bottom",
  Left = "left",
  Right = "right",
  Top = "top",
}

export enum ImgixParamsFillGradientType {
  Linear = "linear",
  Radial = "radial",
}

export enum ImgixParamsFit {
  Clamp = "clamp",
  Clip = "clip",
  Crop = "crop",
  Facearea = "facearea",
  Fill = "fill",
  Fillmax = "fillmax",
  Max = "max",
  Min = "min",
  Scale = "scale",
}

export enum ImgixParamsFlip {
  H = "h",
  Hv = "hv",
  V = "v",
}

export enum ImgixParamsFm {
  Avif = "avif",
  Blurhash = "blurhash",
  Gif = "gif",
  Jp2 = "jp2",
  Jpg = "jpg",
  Json = "json",
  Jxr = "jxr",
  Mp4 = "mp4",
  Pjpg = "pjpg",
  Png = "png",
  Png8 = "png8",
  Png32 = "png32",
  Webm = "webm",
  Webp = "webp",
}

export enum ImgixParamsIptc {
  Allow = "allow",
  Block = "block",
}

export enum ImgixParamsMarkAlign {
  Bottom = "bottom",
  Center = "center",
  Left = "left",
  Middle = "middle",
  Right = "right",
  Top = "top",
}

export enum ImgixParamsMarkFit {
  Clip = "clip",
  Crop = "crop",
  Fill = "fill",
  Max = "max",
  Scale = "scale",
}

export enum ImgixParamsMarkTile {
  Grid = "grid",
}

export enum ImgixParamsPalette {
  Css = "css",
  Json = "json",
}

export enum ImgixParamsTransparency {
  Grid = "grid",
}

export enum ImgixParamsTrim {
  Auto = "auto",
  Color = "color",
}

export enum ImgixParamsTxtAlign {
  Bottom = "bottom",
  Center = "center",
  Left = "left",
  Middle = "middle",
  Right = "right",
  Top = "top",
}

export enum ImgixParamsTxtClip {
  Ellipsis = "ellipsis",
  End = "end",
  Middle = "middle",
  Start = "start",
}

export enum ImgixParamsTxtFit {
  Max = "max",
}

/** Specifies how to filter by usage */
export type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars["BooleanType"]["input"]>;
};

export type IndustryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<IndustryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IndustryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  industry?: InputMaybe<StringFilter>;
  sections?: InputMaybe<LinksFilter>;
  slug?: InputMaybe<SlugFilter>;
  teaserMedia?: InputMaybe<FileFilter>;
  teaserText?: InputMaybe<StringFilter>;
  title?: InputMaybe<TextFilter>;
};

export enum IndustryModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IndustryAsc = "industry_ASC",
  IndustryDesc = "industry_DESC",
  TeaserTextAsc = "teaserText_ASC",
  TeaserTextDesc = "teaserText_DESC",
}

export type IndustryModelSectionsField = HeaderWithTagRecord | StaggeredRecord;

/** Record of type Industry (industry) */
export type IndustryRecord = RecordInterface & {
  __typename?: "IndustryRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  industry: Scalars["String"]["output"];
  sections: Array<IndustryModelSectionsField>;
  slug: Scalars["String"]["output"];
  teaserMedia?: Maybe<FileField>;
  teaserText?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
};

/** Record of type Industry (industry) */
export type IndustryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Industry (industry) */
export type IndustryRecordTitleArgs = {
  markdown?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Block of type Inquiry Info (inquiry_info) */
export type InquiryInfoRecord = RecordInterface & {
  __typename?: "InquiryInfoRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  subtext?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
};

/** Block of type Inquiry Info (inquiry_info) */
export type InquiryInfoRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Inquiry Info (inquiry_info) */
export type InquiryInfoRecordSubtextArgs = {
  markdown?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Specifies how to filter Integer fields */
export type IntegerFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** Specifies how to filter by ID */
export type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars["ItemId"]["input"]>;
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars["ItemId"]["input"]>>>;
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars["ItemId"]["input"]>;
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["ItemId"]["input"]>>>;
};

export enum ItemStatus {
  Draft = "draft",
  Published = "published",
  Updated = "updated",
}

export type LeadershipCardsModelModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<LeadershipCardsModelModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LeadershipCardsModelModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  people?: InputMaybe<LinksFilter>;
};

export enum LeadershipCardsModelModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
}

/** Record of type Leadership Cards (leadership_cards_model) */
export type LeadershipCardsModelRecord = RecordInterface & {
  __typename?: "LeadershipCardsModelRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  people: Array<PersonRecord>;
};

/** Record of type Leadership Cards (leadership_cards_model) */
export type LeadershipCardsModelRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Single-link fields */
export type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars["ItemId"]["input"]>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars["ItemId"]["input"]>>>;
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars["ItemId"]["input"]>;
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["ItemId"]["input"]>>>;
};

/** Block of type Link (link) */
export type LinkRecord = RecordInterface & {
  __typename?: "LinkRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  text: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

/** Block of type Link (link) */
export type LinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Multiple-links fields */
export type LinksFilter = {
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars["ItemId"]["input"]>>>;
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars["ItemId"]["input"]>>>;
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars["ItemId"]["input"]>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["ItemId"]["input"]>>>;
};

export type LocationModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<LocationModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LocationModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  address?: InputMaybe<TextFilter>;
  city?: InputMaybe<StringFilter>;
  contactPerson?: InputMaybe<LinkFilter>;
  decorativeImage?: InputMaybe<FileFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  media?: InputMaybe<FileFilter>;
  phoneNumber?: InputMaybe<StringFilter>;
  timeZone?: InputMaybe<StringFilter>;
};

export enum LocationModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  CityAsc = "city_ASC",
  CityDesc = "city_DESC",
  EmailAsc = "email_ASC",
  EmailDesc = "email_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PhoneNumberAsc = "phoneNumber_ASC",
  PhoneNumberDesc = "phoneNumber_DESC",
  TimeZoneAsc = "timeZone_ASC",
  TimeZoneDesc = "timeZone_DESC",
}

/** Record of type Location (location) */
export type LocationRecord = RecordInterface & {
  __typename?: "LocationRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  address: Scalars["String"]["output"];
  city: Scalars["String"]["output"];
  contactPerson?: Maybe<PersonRecord>;
  decorativeImage?: Maybe<FileField>;
  email: Scalars["String"]["output"];
  id: Scalars["ItemId"]["output"];
  media: FileField;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  timeZone: Scalars["String"]["output"];
};

/** Record of type Location (location) */
export type LocationRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Location (location) */
export type LocationRecordAddressArgs = {
  markdown?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type LocationTeaserModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<LocationTeaserModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LocationTeaserModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  locations?: InputMaybe<LinksFilter>;
  showDivider?: InputMaybe<BooleanFilter>;
  subtext?: InputMaybe<TextFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum LocationTeaserModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  ShowDividerAsc = "showDivider_ASC",
  ShowDividerDesc = "showDivider_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** Record of type Location Teaser (location_teaser) */
export type LocationTeaserRecord = RecordInterface & {
  __typename?: "LocationTeaserRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  divider?: Maybe<DividerRecord>;
  id: Scalars["ItemId"]["output"];
  locations: Array<LocationRecord>;
  showDivider: Scalars["BooleanType"]["output"];
  subtext?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
};

/** Record of type Location Teaser (location_teaser) */
export type LocationTeaserRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Location Teaser (location_teaser) */
export type LocationTeaserRecordSubtextArgs = {
  markdown?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Record of type Locations (locations_section) */
export type LocationsSectionRecord = RecordInterface & {
  __typename?: "LocationsSectionRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  locations: Array<LocationRecord>;
};

/** Record of type Locations (locations_section) */
export type LocationsSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type LogoGridModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<LogoGridModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LogoGridModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  invertColor?: InputMaybe<BooleanFilter>;
};

export enum LogoGridModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  InvertColorAsc = "invertColor_ASC",
  InvertColorDesc = "invertColor_DESC",
}

/** Record of type Logo Grid (logo_grid) */
export type LogoGridRecord = RecordInterface & {
  __typename?: "LogoGridRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  divider?: Maybe<DividerRecord>;
  id: Scalars["ItemId"]["output"];
  invertColor: Scalars["BooleanType"]["output"];
  logos: Array<LogoRecord>;
};

/** Record of type Logo Grid (logo_grid) */
export type LogoGridRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Logo (logo) */
export type LogoRecord = RecordInterface & {
  __typename?: "LogoRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  logoImage: FileField;
};

/** Block of type Logo (logo) */
export type LogoRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ManifestoCardModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ManifestoCardModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ManifestoCardModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  subtext?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum ManifestoCardModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  SubtextAsc = "subtext_ASC",
  SubtextDesc = "subtext_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** Record of type Manifesto Card (manifesto_card) */
export type ManifestoCardRecord = RecordInterface & {
  __typename?: "ManifestoCardRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  image: AltFileField;
  subtext: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

/** Record of type Manifesto Card (manifesto_card) */
export type ManifestoCardRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ManifestoModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ManifestoModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ManifestoModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  cards?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  invertColor?: InputMaybe<BooleanFilter>;
  showDivider?: InputMaybe<BooleanFilter>;
  statement?: InputMaybe<LinkFilter>;
};

export enum ManifestoModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  InvertColorAsc = "invertColor_ASC",
  InvertColorDesc = "invertColor_DESC",
  ShowDividerAsc = "showDivider_ASC",
  ShowDividerDesc = "showDivider_DESC",
}

/** Record of type Manifesto (manifesto) */
export type ManifestoRecord = RecordInterface & {
  __typename?: "ManifestoRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  cards: Array<ManifestoCardRecord>;
  divider?: Maybe<DividerRecord>;
  id: Scalars["ItemId"]["output"];
  invertColor: Scalars["BooleanType"]["output"];
  showDivider: Scalars["BooleanType"]["output"];
  statement?: Maybe<StatementSimpleRecord>;
};

/** Record of type Manifesto (manifesto) */
export type ManifestoRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export enum MuxThumbnailFormatType {
  Gif = "gif",
  Jpg = "jpg",
  Png = "png",
}

/** Block of type Nav Link (nav_link) */
export type NavLinkRecord = RecordInterface & {
  __typename?: "NavLinkRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  label: Scalars["String"]["output"];
  slug: Scalars["String"]["output"];
};

/** Block of type Nav Link (nav_link) */
export type NavLinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Navigation (navigation) */
export type NavigationRecord = RecordInterface & {
  __typename?: "NavigationRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  alternativeLogoText?: Maybe<Scalars["String"]["output"]>;
  cta?: Maybe<CallToActionRecord>;
  id: Scalars["ItemId"]["output"];
  links: Array<NavLinkRecord>;
  showLogo: Scalars["BooleanType"]["output"];
  socialLinks: Array<SocialLinkRecord>;
};

/** Record of type Navigation (navigation) */
export type NavigationRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type NewsArticleModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<NewsArticleModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsArticleModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  cardImage?: InputMaybe<FileFilter>;
  featuredMedia?: InputMaybe<FileFilter>;
  id?: InputMaybe<ItemIdFilter>;
  publishedDate?: InputMaybe<DateFilter>;
  sections?: InputMaybe<LinksFilter>;
  shortDescription?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  typeOfArticle?: InputMaybe<StringFilter>;
};

export enum NewsArticleModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedDateAsc = "publishedDate_ASC",
  PublishedDateDesc = "publishedDate_DESC",
  ShortDescriptionAsc = "shortDescription_ASC",
  ShortDescriptionDesc = "shortDescription_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  TypeOfArticleAsc = "typeOfArticle_ASC",
  TypeOfArticleDesc = "typeOfArticle_DESC",
}

export type NewsArticleModelSectionsField =
  | ContentTextImageRecord
  | TeaserNewsGridRecord
  | TeaserRelatedNewsRecord;

/** Record of type News Article (news_article) */
export type NewsArticleRecord = RecordInterface & {
  __typename?: "NewsArticleRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  cardImage: FileField;
  featuredMedia: FileField;
  id: Scalars["ItemId"]["output"];
  publishedDate?: Maybe<Scalars["Date"]["output"]>;
  sections: Array<NewsArticleModelSectionsField>;
  shortDescription?: Maybe<Scalars["String"]["output"]>;
  slug: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  typeOfArticle: Scalars["String"]["output"];
};

/** Record of type News Article (news_article) */
export type NewsArticleRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type News Type (news_type) */
export type NewsTypeRecord = RecordInterface & {
  __typename?: "NewsTypeRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  typeOfNews?: Maybe<Scalars["String"]["output"]>;
};

/** Block of type News Type (news_type) */
export type NewsTypeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Open Positions (open_position) */
export type OpenPositionRecord = RecordInterface & {
  __typename?: "OpenPositionRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  title: Scalars["String"]["output"];
};

/** Record of type Open Positions (open_position) */
export type OpenPositionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>;
};

/** Block of type Page Link (page_link) */
export type PageLinkRecord = RecordInterface & {
  __typename?: "PageLinkRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  slug: Scalars["String"]["output"];
  text: Scalars["String"]["output"];
};

/** Block of type Page Link (page_link) */
export type PageLinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type PageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  invertNavColor?: InputMaybe<BooleanFilter>;
  sections?: InputMaybe<LinksFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum PageModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  InvertNavColorAsc = "invertNavColor_ASC",
  InvertNavColorDesc = "invertNavColor_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type PageModelSectionsField =
  | ContentTextImageRecord
  | DrawerRecord
  | FullWidthImageRecord
  | HeaderSimpleRecord
  | HeaderWithTagRecord
  | HomepageHeroRecord
  | ImageWithStatRecord
  | LocationTeaserRecord
  | LocationsSectionRecord
  | LogoGridRecord
  | ManifestoRecord
  | OpenPositionRecord
  | PurposeRecord
  | QuoteRecord
  | ServiceCardsSectionRecord
  | SliderGalleryRecord
  | SliderNewsRecord
  | SpacerRecord
  | StaggeredRecord
  | StatementCtaRecord
  | StatementLargeRecord
  | StatementSimpleRecord
  | StatsSectionRecord
  | TeaserCaseGridRecord
  | TeaserCaseStaggeredRecord
  | TeaserCtaRecord
  | TeaserLeadershipRecord
  | TeaserNewsGridRecord
  | TeaserRelatedCaseRecord
  | TeaserRelatedNewsRecord;

/** Record of type Page (page) */
export type PageRecord = RecordInterface & {
  __typename?: "PageRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  invertNavColor: Scalars["BooleanType"]["output"];
  sections: Array<PageModelSectionsField>;
  slug: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

/** Record of type Page (page) */
export type PageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type PersonModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PersonModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PersonModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  cardImage?: InputMaybe<FileFilter>;
  email?: InputMaybe<StringFilter>;
  headerImage?: InputMaybe<FileFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  role?: InputMaybe<StringFilter>;
  sections?: InputMaybe<LinksFilter>;
  slug?: InputMaybe<SlugFilter>;
  smallImage?: InputMaybe<FileFilter>;
};

export enum PersonModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  EmailAsc = "email_ASC",
  EmailDesc = "email_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  RoleAsc = "role_ASC",
  RoleDesc = "role_DESC",
}

export type PersonModelSectionsField =
  | ContentTextImageRecord
  | SpacerRecord
  | StatementCtaRecord;

/** Record of type Person (person) */
export type PersonRecord = RecordInterface & {
  __typename?: "PersonRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  cardImage?: Maybe<FileField>;
  email?: Maybe<Scalars["String"]["output"]>;
  headerImage?: Maybe<FileField>;
  id: Scalars["ItemId"]["output"];
  name: Scalars["String"]["output"];
  role: Scalars["String"]["output"];
  sections: Array<PersonModelSectionsField>;
  slug: Scalars["String"]["output"];
  smallImage?: Maybe<FileField>;
};

/** Record of type Person (person) */
export type PersonRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type PhotoCarouselModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PhotoCarouselModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PhotoCarouselModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  photos?: InputMaybe<GalleryFilter>;
};

export enum PhotoCarouselModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
}

/** Record of type Photo Carousel (photo_carousel) */
export type PhotoCarouselRecord = RecordInterface & {
  __typename?: "PhotoCarouselRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  photos: Array<FileField>;
};

/** Record of type Photo Carousel (photo_carousel) */
export type PhotoCarouselRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type PurposeModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PurposeModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PurposeModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  cmsTitle?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  invertColor?: InputMaybe<BooleanFilter>;
  media?: InputMaybe<FileFilter>;
  showDivider?: InputMaybe<BooleanFilter>;
  statement?: InputMaybe<LinkFilter>;
  text?: InputMaybe<TextFilter>;
};

export enum PurposeModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  CmsTitleAsc = "cmsTitle_ASC",
  CmsTitleDesc = "cmsTitle_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  InvertColorAsc = "invertColor_ASC",
  InvertColorDesc = "invertColor_DESC",
  ShowDividerAsc = "showDivider_ASC",
  ShowDividerDesc = "showDivider_DESC",
}

/** Record of type Purpose (purpose) */
export type PurposeRecord = RecordInterface & {
  __typename?: "PurposeRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  button?: Maybe<PageLinkRecord>;
  cmsTitle?: Maybe<Scalars["String"]["output"]>;
  divider?: Maybe<DividerRecord>;
  id: Scalars["ItemId"]["output"];
  invertColor: Scalars["BooleanType"]["output"];
  media: FileField;
  showDivider: Scalars["BooleanType"]["output"];
  statement?: Maybe<StatementSimpleRecord>;
  stats: Array<StatRecord>;
  text: Scalars["String"]["output"];
};

/** Record of type Purpose (purpose) */
export type PurposeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Purpose (purpose) */
export type PurposeRecordTextArgs = {
  markdown?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** The query root for this schema */
export type Query = {
  __typename?: "Query";
  /** Returns meta information regarding a record collection */
  _allArticlesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCaseContentsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCaseIntrosMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCaseStudiesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allContentTextImagesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCookieConsentItemsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allDrawersMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allFootersMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allFullWidthImagesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allHeaderNewsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allHeaderSimplesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allHeaderWithTagsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allHomepageHerosMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allImageWithStatsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allIndustriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allLeadershipCardsModelsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allLocationTeasersMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allLocationsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allLogoGridsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allManifestoCardsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allManifestosMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allNewsArticlesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPagesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPeopleMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPhotoCarouselsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPurposesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allQuotesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allServiceCardsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allServiceCardsSectionsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allServicesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allSidebarGenericsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allSidebarNewsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allSliderGalleriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allSliderNewsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allSocialLinksMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allSpacersMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allStaggeredsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allStatementCtasMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allStatementLargesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allStatementSimplesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allStatsSectionsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTeaserCaseGridsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTeaserCaseStaggeredsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTeaserCtasMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTeaserLeadershipsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTeaserNewsGridsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTeaserRelatedCasesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTeaserRelatedNewsMeta: CollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: CollectionMetadata;
  /** Returns the single instance record */
  _site: Site;
  /** Returns a collection of records */
  allArticles: Array<ArticleRecord>;
  /** Returns a collection of records */
  allCaseContents: Array<CaseContentRecord>;
  /** Returns a collection of records */
  allCaseIntros: Array<CaseIntroRecord>;
  /** Returns a collection of records */
  allCaseStudies: Array<CaseStudyRecord>;
  /** Returns a collection of records */
  allContentTextImages: Array<ContentTextImageRecord>;
  /** Returns a collection of records */
  allCookieConsentItems: Array<CookieConsentItemRecord>;
  /** Returns a collection of records */
  allDrawers: Array<DrawerRecord>;
  /** Returns a collection of records */
  allFooters: Array<FooterRecord>;
  /** Returns a collection of records */
  allFullWidthImages: Array<FullWidthImageRecord>;
  /** Returns a collection of records */
  allHeaderNews: Array<HeaderNewsRecord>;
  /** Returns a collection of records */
  allHeaderSimples: Array<HeaderSimpleRecord>;
  /** Returns a collection of records */
  allHeaderWithTags: Array<HeaderWithTagRecord>;
  /** Returns a collection of records */
  allHomepageHeros: Array<HomepageHeroRecord>;
  /** Returns a collection of records */
  allImageWithStats: Array<ImageWithStatRecord>;
  /** Returns a collection of records */
  allIndustries: Array<IndustryRecord>;
  /** Returns a collection of records */
  allLeadershipCardsModels: Array<LeadershipCardsModelRecord>;
  /** Returns a collection of records */
  allLocationTeasers: Array<LocationTeaserRecord>;
  /** Returns a collection of records */
  allLocations: Array<LocationRecord>;
  /** Returns a collection of records */
  allLogoGrids: Array<LogoGridRecord>;
  /** Returns a collection of records */
  allManifestoCards: Array<ManifestoCardRecord>;
  /** Returns a collection of records */
  allManifestos: Array<ManifestoRecord>;
  /** Returns a collection of records */
  allNewsArticles: Array<NewsArticleRecord>;
  /** Returns a collection of records */
  allPages: Array<PageRecord>;
  /** Returns a collection of records */
  allPeople: Array<PersonRecord>;
  /** Returns a collection of records */
  allPhotoCarousels: Array<PhotoCarouselRecord>;
  /** Returns a collection of records */
  allPurposes: Array<PurposeRecord>;
  /** Returns a collection of records */
  allQuotes: Array<QuoteRecord>;
  /** Returns a collection of records */
  allServiceCards: Array<ServiceCardRecord>;
  /** Returns a collection of records */
  allServiceCardsSections: Array<ServiceCardsSectionRecord>;
  /** Returns a collection of records */
  allServices: Array<ServiceRecord>;
  /** Returns a collection of records */
  allSidebarGenerics: Array<SidebarGenericRecord>;
  /** Returns a collection of records */
  allSidebarNews: Array<SidebarNewsRecord>;
  /** Returns a collection of records */
  allSliderGalleries: Array<SliderGalleryRecord>;
  /** Returns a collection of records */
  allSliderNews: Array<SliderNewsRecord>;
  /** Returns a collection of records */
  allSocialLinks: Array<SocialLinkRecord>;
  /** Returns a collection of records */
  allSpacers: Array<SpacerRecord>;
  /** Returns a collection of records */
  allStaggereds: Array<StaggeredRecord>;
  /** Returns a collection of records */
  allStatementCtas: Array<StatementCtaRecord>;
  /** Returns a collection of records */
  allStatementLarges: Array<StatementLargeRecord>;
  /** Returns a collection of records */
  allStatementSimples: Array<StatementSimpleRecord>;
  /** Returns a collection of records */
  allStatsSections: Array<StatsSectionRecord>;
  /** Returns a collection of records */
  allTeaserCaseGrids: Array<TeaserCaseGridRecord>;
  /** Returns a collection of records */
  allTeaserCaseStaggereds: Array<TeaserCaseStaggeredRecord>;
  /** Returns a collection of records */
  allTeaserCtas: Array<TeaserCtaRecord>;
  /** Returns a collection of records */
  allTeaserLeaderships: Array<TeaserLeadershipRecord>;
  /** Returns a collection of records */
  allTeaserNewsGrids: Array<TeaserNewsGridRecord>;
  /** Returns a collection of records */
  allTeaserRelatedCases: Array<TeaserRelatedCaseRecord>;
  /** Returns a collection of records */
  allTeaserRelatedNews: Array<TeaserRelatedNewsRecord>;
  /** Returns a collection of assets */
  allUploads: Array<FileField>;
  /** Returns a specific record */
  article?: Maybe<ArticleRecord>;
  /** Returns a specific record */
  caseContent?: Maybe<CaseContentRecord>;
  /** Returns a specific record */
  caseIntro?: Maybe<CaseIntroRecord>;
  /** Returns a specific record */
  caseStudy?: Maybe<CaseStudyRecord>;
  /** Returns a specific record */
  contentTextImage?: Maybe<ContentTextImageRecord>;
  /** Returns the single instance record */
  cookieConsentForm?: Maybe<CookieConsentFormRecord>;
  /** Returns a specific record */
  cookieConsentItem?: Maybe<CookieConsentItemRecord>;
  /** Returns a specific record */
  drawer?: Maybe<DrawerRecord>;
  /** Returns a specific record */
  footer?: Maybe<FooterRecord>;
  /** Returns a specific record */
  fullWidthImage?: Maybe<FullWidthImageRecord>;
  /** Returns a specific record */
  headerNews?: Maybe<HeaderNewsRecord>;
  /** Returns a specific record */
  headerSimple?: Maybe<HeaderSimpleRecord>;
  /** Returns a specific record */
  headerWithTag?: Maybe<HeaderWithTagRecord>;
  /** Returns a specific record */
  homepageHero?: Maybe<HomepageHeroRecord>;
  /** Returns a specific record */
  imageWithStat?: Maybe<ImageWithStatRecord>;
  /** Returns a specific record */
  industry?: Maybe<IndustryRecord>;
  /** Returns a specific record */
  leadershipCardsModel?: Maybe<LeadershipCardsModelRecord>;
  /** Returns a specific record */
  location?: Maybe<LocationRecord>;
  /** Returns a specific record */
  locationTeaser?: Maybe<LocationTeaserRecord>;
  /** Returns the single instance record */
  locationsSection?: Maybe<LocationsSectionRecord>;
  /** Returns a specific record */
  logoGrid?: Maybe<LogoGridRecord>;
  /** Returns a specific record */
  manifesto?: Maybe<ManifestoRecord>;
  /** Returns a specific record */
  manifestoCard?: Maybe<ManifestoCardRecord>;
  /** Returns the single instance record */
  navigation?: Maybe<NavigationRecord>;
  /** Returns a specific record */
  newsArticle?: Maybe<NewsArticleRecord>;
  /** Returns the single instance record */
  openPosition?: Maybe<OpenPositionRecord>;
  /** Returns a specific record */
  page?: Maybe<PageRecord>;
  /** Returns a specific record */
  person?: Maybe<PersonRecord>;
  /** Returns a specific record */
  photoCarousel?: Maybe<PhotoCarouselRecord>;
  /** Returns a specific record */
  purpose?: Maybe<PurposeRecord>;
  /** Returns a specific record */
  quote?: Maybe<QuoteRecord>;
  /** Returns a specific record */
  service?: Maybe<ServiceRecord>;
  /** Returns a specific record */
  serviceCard?: Maybe<ServiceCardRecord>;
  /** Returns a specific record */
  serviceCardsSection?: Maybe<ServiceCardsSectionRecord>;
  /** Returns a specific record */
  sidebarGeneric?: Maybe<SidebarGenericRecord>;
  /** Returns a specific record */
  sidebarNews?: Maybe<SidebarNewsRecord>;
  /** Returns a specific record */
  sliderGallery?: Maybe<SliderGalleryRecord>;
  /** Returns a specific record */
  sliderNews?: Maybe<SliderNewsRecord>;
  /** Returns a specific record */
  socialLink?: Maybe<SocialLinkRecord>;
  /** Returns a specific record */
  spacer?: Maybe<SpacerRecord>;
  /** Returns a specific record */
  staggered?: Maybe<StaggeredRecord>;
  /** Returns a specific record */
  statementCta?: Maybe<StatementCtaRecord>;
  /** Returns a specific record */
  statementLarge?: Maybe<StatementLargeRecord>;
  /** Returns a specific record */
  statementSimple?: Maybe<StatementSimpleRecord>;
  /** Returns a specific record */
  statsSection?: Maybe<StatsSectionRecord>;
  /** Returns a specific record */
  teaserCaseGrid?: Maybe<TeaserCaseGridRecord>;
  /** Returns a specific record */
  teaserCaseStaggered?: Maybe<TeaserCaseStaggeredRecord>;
  /** Returns a specific record */
  teaserCta?: Maybe<TeaserCtaRecord>;
  /** Returns a specific record */
  teaserLeadership?: Maybe<TeaserLeadershipRecord>;
  /** Returns a specific record */
  teaserNewsGrid?: Maybe<TeaserNewsGridRecord>;
  /** Returns a specific record */
  teaserRelatedCase?: Maybe<TeaserRelatedCaseRecord>;
  /** Returns a specific record */
  teaserRelatedNews?: Maybe<TeaserRelatedNewsRecord>;
  /** Returns a specific asset */
  upload?: Maybe<FileField>;
};

/** The query root for this schema */
export type Query_AllArticlesMetaArgs = {
  filter?: InputMaybe<ArticleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllCaseContentsMetaArgs = {
  filter?: InputMaybe<CaseContentModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllCaseIntrosMetaArgs = {
  filter?: InputMaybe<CaseIntroModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllCaseStudiesMetaArgs = {
  filter?: InputMaybe<CaseStudyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllContentTextImagesMetaArgs = {
  filter?: InputMaybe<ContentTextImageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllCookieConsentItemsMetaArgs = {
  filter?: InputMaybe<CookieConsentItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllDrawersMetaArgs = {
  filter?: InputMaybe<DrawerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllFootersMetaArgs = {
  filter?: InputMaybe<FooterModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllFullWidthImagesMetaArgs = {
  filter?: InputMaybe<FullWidthImageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllHeaderNewsMetaArgs = {
  filter?: InputMaybe<HeaderNewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllHeaderSimplesMetaArgs = {
  filter?: InputMaybe<HeaderSimpleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllHeaderWithTagsMetaArgs = {
  filter?: InputMaybe<HeaderWithTagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllHomepageHerosMetaArgs = {
  filter?: InputMaybe<HomepageHeroModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllImageWithStatsMetaArgs = {
  filter?: InputMaybe<ImageWithStatModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllIndustriesMetaArgs = {
  filter?: InputMaybe<IndustryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllLeadershipCardsModelsMetaArgs = {
  filter?: InputMaybe<LeadershipCardsModelModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllLocationTeasersMetaArgs = {
  filter?: InputMaybe<LocationTeaserModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllLocationsMetaArgs = {
  filter?: InputMaybe<LocationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllLogoGridsMetaArgs = {
  filter?: InputMaybe<LogoGridModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllManifestoCardsMetaArgs = {
  filter?: InputMaybe<ManifestoCardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllManifestosMetaArgs = {
  filter?: InputMaybe<ManifestoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllNewsArticlesMetaArgs = {
  filter?: InputMaybe<NewsArticleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllPagesMetaArgs = {
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllPeopleMetaArgs = {
  filter?: InputMaybe<PersonModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllPhotoCarouselsMetaArgs = {
  filter?: InputMaybe<PhotoCarouselModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllPurposesMetaArgs = {
  filter?: InputMaybe<PurposeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllQuotesMetaArgs = {
  filter?: InputMaybe<QuoteModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllServiceCardsMetaArgs = {
  filter?: InputMaybe<ServiceCardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllServiceCardsSectionsMetaArgs = {
  filter?: InputMaybe<ServiceCardsSectionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllServicesMetaArgs = {
  filter?: InputMaybe<ServiceModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllSidebarGenericsMetaArgs = {
  filter?: InputMaybe<SidebarGenericModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllSidebarNewsMetaArgs = {
  filter?: InputMaybe<SidebarNewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllSliderGalleriesMetaArgs = {
  filter?: InputMaybe<SliderGalleryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllSliderNewsMetaArgs = {
  filter?: InputMaybe<SliderNewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllSocialLinksMetaArgs = {
  filter?: InputMaybe<SocialLinkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllSpacersMetaArgs = {
  filter?: InputMaybe<SpacerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllStaggeredsMetaArgs = {
  filter?: InputMaybe<StaggeredModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllStatementCtasMetaArgs = {
  filter?: InputMaybe<StatementCtaModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllStatementLargesMetaArgs = {
  filter?: InputMaybe<StatementLargeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllStatementSimplesMetaArgs = {
  filter?: InputMaybe<StatementSimpleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllStatsSectionsMetaArgs = {
  filter?: InputMaybe<StatsSectionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllTeaserCaseGridsMetaArgs = {
  filter?: InputMaybe<TeaserCaseGridModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllTeaserCaseStaggeredsMetaArgs = {
  filter?: InputMaybe<TeaserCaseStaggeredModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllTeaserCtasMetaArgs = {
  filter?: InputMaybe<TeaserCtaModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllTeaserLeadershipsMetaArgs = {
  filter?: InputMaybe<TeaserLeadershipModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllTeaserNewsGridsMetaArgs = {
  filter?: InputMaybe<TeaserNewsGridModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllTeaserRelatedCasesMetaArgs = {
  filter?: InputMaybe<TeaserRelatedCaseModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllTeaserRelatedNewsMetaArgs = {
  filter?: InputMaybe<TeaserRelatedNewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_SiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryAllArticlesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArticleModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArticleModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllCaseContentsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CaseContentModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CaseContentModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllCaseIntrosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CaseIntroModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CaseIntroModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllCaseStudiesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CaseStudyModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CaseStudyModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllContentTextImagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ContentTextImageModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentTextImageModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllCookieConsentItemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CookieConsentItemModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CookieConsentItemModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllDrawersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DrawerModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DrawerModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllFootersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FooterModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FooterModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllFullWidthImagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FullWidthImageModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FullWidthImageModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllHeaderNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HeaderNewsModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HeaderNewsModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllHeaderSimplesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HeaderSimpleModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HeaderSimpleModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllHeaderWithTagsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HeaderWithTagModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HeaderWithTagModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllHomepageHerosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HomepageHeroModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HomepageHeroModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllImageWithStatsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ImageWithStatModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ImageWithStatModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllIndustriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<IndustryModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IndustryModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllLeadershipCardsModelsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LeadershipCardsModelModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LeadershipCardsModelModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllLocationTeasersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LocationTeaserModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LocationTeaserModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllLocationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LocationModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LocationModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllLogoGridsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LogoGridModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LogoGridModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllManifestoCardsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ManifestoCardModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ManifestoCardModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllManifestosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ManifestoModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ManifestoModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllNewsArticlesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsArticleModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsArticleModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllPeopleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PersonModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PersonModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllPhotoCarouselsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PhotoCarouselModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PhotoCarouselModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllPurposesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PurposeModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PurposeModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllQuotesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<QuoteModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<QuoteModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllServiceCardsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ServiceCardModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ServiceCardModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllServiceCardsSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ServiceCardsSectionModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ServiceCardsSectionModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllServicesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ServiceModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ServiceModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllSidebarGenericsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SidebarGenericModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SidebarGenericModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllSidebarNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SidebarNewsModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SidebarNewsModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllSliderGalleriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SliderGalleryModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SliderGalleryModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllSliderNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SliderNewsModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SliderNewsModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllSocialLinksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SocialLinkModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SocialLinkModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllSpacersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SpacerModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SpacerModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllStaggeredsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StaggeredModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StaggeredModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllStatementCtasArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StatementCtaModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StatementCtaModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllStatementLargesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StatementLargeModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StatementLargeModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllStatementSimplesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StatementSimpleModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StatementSimpleModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllStatsSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StatsSectionModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StatsSectionModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllTeaserCaseGridsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TeaserCaseGridModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TeaserCaseGridModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllTeaserCaseStaggeredsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TeaserCaseStaggeredModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TeaserCaseStaggeredModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllTeaserCtasArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TeaserCtaModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TeaserCtaModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllTeaserLeadershipsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TeaserLeadershipModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TeaserLeadershipModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllTeaserNewsGridsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TeaserNewsGridModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TeaserNewsGridModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllTeaserRelatedCasesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TeaserRelatedCaseModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TeaserRelatedCaseModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllTeaserRelatedNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TeaserRelatedNewsModelFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TeaserRelatedNewsModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryAllUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type QueryArticleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArticleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArticleModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryCaseContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CaseContentModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CaseContentModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryCaseIntroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CaseIntroModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CaseIntroModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryCaseStudyArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CaseStudyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CaseStudyModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryContentTextImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ContentTextImageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentTextImageModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryCookieConsentFormArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryCookieConsentItemArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CookieConsentItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CookieConsentItemModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryDrawerArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DrawerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DrawerModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryFooterArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FooterModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FooterModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryFullWidthImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FullWidthImageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FullWidthImageModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryHeaderNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HeaderNewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HeaderNewsModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryHeaderSimpleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HeaderSimpleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HeaderSimpleModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryHeaderWithTagArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HeaderWithTagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HeaderWithTagModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryHomepageHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HomepageHeroModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HomepageHeroModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryImageWithStatArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ImageWithStatModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ImageWithStatModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryIndustryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<IndustryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IndustryModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryLeadershipCardsModelArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LeadershipCardsModelModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LeadershipCardsModelModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryLocationArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LocationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LocationModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryLocationTeaserArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LocationTeaserModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LocationTeaserModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryLocationsSectionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryLogoGridArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LogoGridModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LogoGridModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryManifestoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ManifestoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ManifestoModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryManifestoCardArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ManifestoCardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ManifestoCardModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryNavigationArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryNewsArticleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsArticleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsArticleModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryOpenPositionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryPersonArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PersonModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PersonModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryPhotoCarouselArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PhotoCarouselModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PhotoCarouselModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryPurposeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PurposeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PurposeModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryQuoteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<QuoteModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<QuoteModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryServiceArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ServiceModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ServiceModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryServiceCardArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ServiceCardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ServiceCardModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryServiceCardsSectionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ServiceCardsSectionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ServiceCardsSectionModelOrderBy>>>;
};

/** The query root for this schema */
export type QuerySidebarGenericArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SidebarGenericModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SidebarGenericModelOrderBy>>>;
};

/** The query root for this schema */
export type QuerySidebarNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SidebarNewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SidebarNewsModelOrderBy>>>;
};

/** The query root for this schema */
export type QuerySliderGalleryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SliderGalleryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SliderGalleryModelOrderBy>>>;
};

/** The query root for this schema */
export type QuerySliderNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SliderNewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SliderNewsModelOrderBy>>>;
};

/** The query root for this schema */
export type QuerySocialLinkArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SocialLinkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SocialLinkModelOrderBy>>>;
};

/** The query root for this schema */
export type QuerySpacerArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SpacerModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SpacerModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryStaggeredArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StaggeredModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StaggeredModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryStatementCtaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StatementCtaModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StatementCtaModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryStatementLargeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StatementLargeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StatementLargeModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryStatementSimpleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StatementSimpleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StatementSimpleModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryStatsSectionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StatsSectionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StatsSectionModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryTeaserCaseGridArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TeaserCaseGridModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TeaserCaseGridModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryTeaserCaseStaggeredArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TeaserCaseStaggeredModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TeaserCaseStaggeredModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryTeaserCtaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TeaserCtaModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TeaserCtaModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryTeaserLeadershipArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TeaserLeadershipModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TeaserLeadershipModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryTeaserNewsGridArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TeaserNewsGridModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TeaserNewsGridModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryTeaserRelatedCaseArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TeaserRelatedCaseModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TeaserRelatedCaseModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryTeaserRelatedNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TeaserRelatedNewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TeaserRelatedNewsModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryUploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
};

export type QuoteModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<QuoteModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<QuoteModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  author?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  quoteText?: InputMaybe<StringFilter>;
};

export enum QuoteModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  AuthorAsc = "author_ASC",
  AuthorDesc = "author_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  QuoteTextAsc = "quoteText_ASC",
  QuoteTextDesc = "quoteText_DESC",
}

/** Record of type Quote (quote) */
export type QuoteRecord = RecordInterface & {
  __typename?: "QuoteRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  author: Scalars["String"]["output"];
  id: Scalars["ItemId"]["output"];
  image?: Maybe<FileField>;
  quoteText: Scalars["String"]["output"];
};

/** Record of type Quote (quote) */
export type QuoteRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type RecordInterface = {
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
};

export type RecordInterface_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>;
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>;
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
};

export enum ResolutionType {
  Icon = "icon",
  Large = "large",
  Medium = "medium",
  Small = "small",
}

export type ResponsiveImage = {
  __typename?: "ResponsiveImage";
  alt?: Maybe<Scalars["String"]["output"]>;
  aspectRatio: Scalars["FloatType"]["output"];
  base64?: Maybe<Scalars["String"]["output"]>;
  bgColor?: Maybe<Scalars["String"]["output"]>;
  height: Scalars["IntType"]["output"];
  sizes: Scalars["String"]["output"];
  src: Scalars["String"]["output"];
  srcSet: Scalars["String"]["output"];
  title?: Maybe<Scalars["String"]["output"]>;
  webpSrcSet: Scalars["String"]["output"];
  width: Scalars["IntType"]["output"];
};

export type SeoField = {
  __typename?: "SeoField";
  description?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<FileField>;
  noIndex?: Maybe<Scalars["BooleanType"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  twitterCard?: Maybe<Scalars["String"]["output"]>;
};

export type ServiceCardModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ServiceCardModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ServiceCardModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  bodyText?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  listItems?: InputMaybe<TextFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum ServiceCardModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  BodyTextAsc = "bodyText_ASC",
  BodyTextDesc = "bodyText_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** Record of type Service Card (service_card) */
export type ServiceCardRecord = RecordInterface & {
  __typename?: "ServiceCardRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  bodyText: Scalars["String"]["output"];
  id: Scalars["ItemId"]["output"];
  image: FileField;
  listItems: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

/** Record of type Service Card (service_card) */
export type ServiceCardRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Service Card (service_card) */
export type ServiceCardRecordListItemsArgs = {
  markdown?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ServiceCardsSectionModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ServiceCardsSectionModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ServiceCardsSectionModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  invertColor?: InputMaybe<BooleanFilter>;
  serviceCards?: InputMaybe<LinksFilter>;
  showDivider?: InputMaybe<BooleanFilter>;
  statement?: InputMaybe<LinkFilter>;
};

export enum ServiceCardsSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  InvertColorAsc = "invertColor_ASC",
  InvertColorDesc = "invertColor_DESC",
  ShowDividerAsc = "showDivider_ASC",
  ShowDividerDesc = "showDivider_DESC",
}

/** Record of type Service Cards (service_cards_section) */
export type ServiceCardsSectionRecord = RecordInterface & {
  __typename?: "ServiceCardsSectionRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  divider?: Maybe<DividerRecord>;
  id: Scalars["ItemId"]["output"];
  invertColor: Scalars["BooleanType"]["output"];
  serviceCards: Array<ServiceCardRecord>;
  showDivider: Scalars["BooleanType"]["output"];
  statement?: Maybe<StatementSimpleRecord>;
};

/** Record of type Service Cards (service_cards_section) */
export type ServiceCardsSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ServiceModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ServiceModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ServiceModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  service?: InputMaybe<StringFilter>;
};

export enum ServiceModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  ServiceAsc = "service_ASC",
  ServiceDesc = "service_DESC",
}

/** Record of type Service (service) */
export type ServiceRecord = RecordInterface & {
  __typename?: "ServiceRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  service: Scalars["String"]["output"];
};

/** Record of type Service (service) */
export type ServiceRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type SidebarGenericModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<SidebarGenericModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SidebarGenericModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  text?: InputMaybe<TextFilter>;
  textStyle?: InputMaybe<StringFilter>;
};

export enum SidebarGenericModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  TextStyleAsc = "textStyle_ASC",
  TextStyleDesc = "textStyle_DESC",
}

/** Record of type Sidebar Generic (sidebar_generic) */
export type SidebarGenericRecord = RecordInterface & {
  __typename?: "SidebarGenericRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  callToAction?: Maybe<CallToActionRecord>;
  id: Scalars["ItemId"]["output"];
  text: Scalars["String"]["output"];
  textStyle?: Maybe<Scalars["String"]["output"]>;
};

/** Record of type Sidebar Generic (sidebar_generic) */
export type SidebarGenericRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Sidebar Generic (sidebar_generic) */
export type SidebarGenericRecordTextArgs = {
  markdown?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SidebarNewsModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<SidebarNewsModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SidebarNewsModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  author?: InputMaybe<LinkFilter>;
  date?: InputMaybe<DateFilter>;
  greyBackground?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<ItemIdFilter>;
  text?: InputMaybe<StringFilter>;
};

export enum SidebarNewsModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  GreyBackgroundAsc = "greyBackground_ASC",
  GreyBackgroundDesc = "greyBackground_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  TextAsc = "text_ASC",
  TextDesc = "text_DESC",
}

/** Record of type Sidebar News (sidebar_news) */
export type SidebarNewsRecord = RecordInterface & {
  __typename?: "SidebarNewsRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  author: PersonRecord;
  date: Scalars["Date"]["output"];
  greyBackground: Scalars["BooleanType"]["output"];
  id: Scalars["ItemId"]["output"];
  text: Scalars["String"]["output"];
};

/** Record of type Sidebar News (sidebar_news) */
export type SidebarNewsRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type Site = {
  __typename?: "Site";
  favicon?: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo?: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
  noIndex?: Maybe<Scalars["BooleanType"]["output"]>;
};

export type SiteFaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
};

export type SiteGlobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export enum SiteLocale {
  En = "en",
}

export type SliderGalleryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<SliderGalleryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SliderGalleryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  assets?: InputMaybe<GalleryFilter>;
  id?: InputMaybe<ItemIdFilter>;
};

export enum SliderGalleryModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
}

/** Record of type Slider Gallery (slider_gallery) */
export type SliderGalleryRecord = RecordInterface & {
  __typename?: "SliderGalleryRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  assets: Array<FileField>;
  id: Scalars["ItemId"]["output"];
};

/** Record of type Slider Gallery (slider_gallery) */
export type SliderGalleryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type SliderNewsModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<SliderNewsModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SliderNewsModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  articles?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  showDivider?: InputMaybe<BooleanFilter>;
};

export enum SliderNewsModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  ShowDividerAsc = "showDivider_ASC",
  ShowDividerDesc = "showDivider_DESC",
}

/** Record of type Slider News (slider_news) */
export type SliderNewsRecord = RecordInterface & {
  __typename?: "SliderNewsRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  articles: Array<NewsArticleRecord>;
  divider?: Maybe<DividerRecord>;
  id: Scalars["ItemId"]["output"];
  showDivider: Scalars["BooleanType"]["output"];
};

/** Record of type Slider News (slider_news) */
export type SliderNewsRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Slug fields */
export type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type SocialLinkModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<SocialLinkModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SocialLinkModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export enum SocialLinkModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
}

/** Record of type Social Link (social_link) */
export type SocialLinkRecord = RecordInterface & {
  __typename?: "SocialLinkRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  image?: Maybe<FileField>;
  title: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

/** Record of type Social Link (social_link) */
export type SocialLinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type SpacerModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<SpacerModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SpacerModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  backgroundColor?: InputMaybe<StringFilter>;
  desktopSpaceAmount?: InputMaybe<IntegerFilter>;
  id?: InputMaybe<ItemIdFilter>;
  mobileSpaceAmount?: InputMaybe<IntegerFilter>;
  tabletSpaceAmount?: InputMaybe<IntegerFilter>;
};

export enum SpacerModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  BackgroundColorAsc = "backgroundColor_ASC",
  BackgroundColorDesc = "backgroundColor_DESC",
  DesktopSpaceAmountAsc = "desktopSpaceAmount_ASC",
  DesktopSpaceAmountDesc = "desktopSpaceAmount_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  MobileSpaceAmountAsc = "mobileSpaceAmount_ASC",
  MobileSpaceAmountDesc = "mobileSpaceAmount_DESC",
  TabletSpaceAmountAsc = "tabletSpaceAmount_ASC",
  TabletSpaceAmountDesc = "tabletSpaceAmount_DESC",
}

/** Record of type Spacer (spacer) */
export type SpacerRecord = RecordInterface & {
  __typename?: "SpacerRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  backgroundColor?: Maybe<Scalars["String"]["output"]>;
  desktopSpaceAmount: Scalars["IntType"]["output"];
  id: Scalars["ItemId"]["output"];
  mobileSpaceAmount?: Maybe<Scalars["IntType"]["output"]>;
  tabletSpaceAmount?: Maybe<Scalars["IntType"]["output"]>;
};

/** Record of type Spacer (spacer) */
export type SpacerRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Staggered Item (staggered_item) */
export type StaggeredItemRecord = RecordInterface & {
  __typename?: "StaggeredItemRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  media: FileField;
  subtext: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

/** Block of type Staggered Item (staggered_item) */
export type StaggeredItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Staggered Item (staggered_item) */
export type StaggeredItemRecordSubtextArgs = {
  markdown?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type StaggeredModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<StaggeredModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StaggeredModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  showDivider?: InputMaybe<BooleanFilter>;
  title?: InputMaybe<TextFilter>;
};

export enum StaggeredModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  ShowDividerAsc = "showDivider_ASC",
  ShowDividerDesc = "showDivider_DESC",
}

/** Record of type Staggered (staggered) */
export type StaggeredRecord = RecordInterface & {
  __typename?: "StaggeredRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  divider?: Maybe<DividerRecord>;
  id: Scalars["ItemId"]["output"];
  items: Array<StaggeredItemRecord>;
  showDivider: Scalars["BooleanType"]["output"];
  title: Scalars["String"]["output"];
};

/** Record of type Staggered (staggered) */
export type StaggeredRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Staggered (staggered) */
export type StaggeredRecordTitleArgs = {
  markdown?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Block of type Stat (stat) */
export type StatRecord = RecordInterface & {
  __typename?: "StatRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  context: Scalars["String"]["output"];
  id: Scalars["ItemId"]["output"];
  statistic: Scalars["String"]["output"];
};

/** Block of type Stat (stat) */
export type StatRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type StatementCtaModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<StatementCtaModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StatementCtaModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  showDivider?: InputMaybe<BooleanFilter>;
  text?: InputMaybe<StringFilter>;
};

export enum StatementCtaModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  ShowDividerAsc = "showDivider_ASC",
  ShowDividerDesc = "showDivider_DESC",
  TextAsc = "text_ASC",
  TextDesc = "text_DESC",
}

/** Record of type Statement CTA (statement_cta) */
export type StatementCtaRecord = RecordInterface & {
  __typename?: "StatementCtaRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  callToAction: PageLinkRecord;
  divider?: Maybe<DividerRecord>;
  id: Scalars["ItemId"]["output"];
  showDivider: Scalars["BooleanType"]["output"];
  text: Scalars["String"]["output"];
};

/** Record of type Statement CTA (statement_cta) */
export type StatementCtaRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type StatementLargeModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<StatementLargeModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StatementLargeModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  addCallToAction?: InputMaybe<BooleanFilter>;
  backgroundColor?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  text?: InputMaybe<TextFilter>;
};

export enum StatementLargeModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  AddCallToActionAsc = "addCallToAction_ASC",
  AddCallToActionDesc = "addCallToAction_DESC",
  BackgroundColorAsc = "backgroundColor_ASC",
  BackgroundColorDesc = "backgroundColor_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
}

/** Record of type Statement Large (statement_large) */
export type StatementLargeRecord = RecordInterface & {
  __typename?: "StatementLargeRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  addCallToAction: Scalars["BooleanType"]["output"];
  backgroundColor?: Maybe<Scalars["String"]["output"]>;
  cta?: Maybe<PageLinkRecord>;
  id: Scalars["ItemId"]["output"];
  text: Scalars["String"]["output"];
};

/** Record of type Statement Large (statement_large) */
export type StatementLargeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Statement Large (statement_large) */
export type StatementLargeRecordTextArgs = {
  markdown?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Block of type Statement Numbered (statement_numbered) */
export type StatementNumberedRecord = RecordInterface & {
  __typename?: "StatementNumberedRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  numberImage: AltFileField;
  subtitle?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
};

/** Block of type Statement Numbered (statement_numbered) */
export type StatementNumberedRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type StatementSimpleModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<StatementSimpleModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StatementSimpleModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  invertColor?: InputMaybe<BooleanFilter>;
  showDivider?: InputMaybe<BooleanFilter>;
  text?: InputMaybe<TextFilter>;
  textSize?: InputMaybe<StringFilter>;
};

export enum StatementSimpleModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  InvertColorAsc = "invertColor_ASC",
  InvertColorDesc = "invertColor_DESC",
  ShowDividerAsc = "showDivider_ASC",
  ShowDividerDesc = "showDivider_DESC",
  TextSizeAsc = "textSize_ASC",
  TextSizeDesc = "textSize_DESC",
}

/** Record of type Statement Simple (statement_simple) */
export type StatementSimpleRecord = RecordInterface & {
  __typename?: "StatementSimpleRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  divider?: Maybe<DividerRecord>;
  id: Scalars["ItemId"]["output"];
  invertColor: Scalars["BooleanType"]["output"];
  showDivider: Scalars["BooleanType"]["output"];
  text: Scalars["String"]["output"];
  textSize?: Maybe<Scalars["String"]["output"]>;
};

/** Record of type Statement Simple (statement_simple) */
export type StatementSimpleRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Statement Simple (statement_simple) */
export type StatementSimpleRecordTextArgs = {
  markdown?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type StatsSectionModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<StatsSectionModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StatsSectionModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  showDivider?: InputMaybe<BooleanFilter>;
};

export enum StatsSectionModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  ShowDividerAsc = "showDivider_ASC",
  ShowDividerDesc = "showDivider_DESC",
}

/** Record of type Stats (stats_section) */
export type StatsSectionRecord = RecordInterface & {
  __typename?: "StatsSectionRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  divider?: Maybe<DividerRecord>;
  id: Scalars["ItemId"]["output"];
  showDivider: Scalars["BooleanType"]["output"];
  stats: Array<StatRecord>;
};

/** Record of type Stats (stats_section) */
export type StatsSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by status */
export type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>;
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>;
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
};

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars["BooleanType"]["input"]>;
  pattern: Scalars["String"]["input"];
  regexp?: InputMaybe<Scalars["BooleanType"]["input"]>;
};

/** Specifies how to filter Structured Text fields values */
export type StructuredTextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Filter records with the specified field set as blank (null or single empty paragraph) */
  isBlank?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type Tag = {
  __typename?: "Tag";
  attributes?: Maybe<Scalars["MetaTagAttributes"]["output"]>;
  content?: Maybe<Scalars["String"]["output"]>;
  tag: Scalars["String"]["output"];
};

export type TeaserCaseGridModelCaseStudiesField =
  | CaseStudyRecord
  | IndustryRecord;

export type TeaserCaseGridModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TeaserCaseGridModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TeaserCaseGridModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  caseStudies?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  showFilter?: InputMaybe<BooleanFilter>;
};

export enum TeaserCaseGridModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  ShowFilterAsc = "showFilter_ASC",
  ShowFilterDesc = "showFilter_DESC",
}

/** Record of type Teaser Case Grid (teaser_case_grid) */
export type TeaserCaseGridRecord = RecordInterface & {
  __typename?: "TeaserCaseGridRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  caseStudies: Array<TeaserCaseGridModelCaseStudiesField>;
  id: Scalars["ItemId"]["output"];
  showFilter: Scalars["BooleanType"]["output"];
};

/** Record of type Teaser Case Grid (teaser_case_grid) */
export type TeaserCaseGridRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type TeaserCaseStaggeredModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TeaserCaseStaggeredModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TeaserCaseStaggeredModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  caseStudies?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
};

export enum TeaserCaseStaggeredModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
}

/** Record of type Teaser Case Staggered (teaser_case_staggered) */
export type TeaserCaseStaggeredRecord = RecordInterface & {
  __typename?: "TeaserCaseStaggeredRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  caseStudies: Array<CaseStudyRecord>;
  divider?: Maybe<DividerRecord>;
  id: Scalars["ItemId"]["output"];
  numberedStatement?: Maybe<StatementNumberedRecord>;
};

/** Record of type Teaser Case Staggered (teaser_case_staggered) */
export type TeaserCaseStaggeredRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type TeaserCtaModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TeaserCtaModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TeaserCtaModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  industryInsight?: InputMaybe<LinkFilter>;
  text?: InputMaybe<StringFilter>;
};

export enum TeaserCtaModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  TextAsc = "text_ASC",
  TextDesc = "text_DESC",
}

/** Record of type Teaser Cta (teaser_cta) */
export type TeaserCtaRecord = RecordInterface & {
  __typename?: "TeaserCtaRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  cta?: Maybe<CallToActionRecord>;
  id: Scalars["ItemId"]["output"];
  industryInsight: IndustryRecord;
  text: Scalars["String"]["output"];
};

/** Record of type Teaser Cta (teaser_cta) */
export type TeaserCtaRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type TeaserLeadershipModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TeaserLeadershipModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TeaserLeadershipModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  people?: InputMaybe<LinksFilter>;
  showDivider?: InputMaybe<BooleanFilter>;
};

export enum TeaserLeadershipModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  ShowDividerAsc = "showDivider_ASC",
  ShowDividerDesc = "showDivider_DESC",
}

/** Record of type Teaser Leadership (teaser_leadership) */
export type TeaserLeadershipRecord = RecordInterface & {
  __typename?: "TeaserLeadershipRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  divider?: Maybe<DividerRecord>;
  id: Scalars["ItemId"]["output"];
  people: Array<PersonRecord>;
  showDivider: Scalars["BooleanType"]["output"];
};

/** Record of type Teaser Leadership (teaser_leadership) */
export type TeaserLeadershipRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type TeaserNewsGridModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TeaserNewsGridModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TeaserNewsGridModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  newsCards?: InputMaybe<LinksFilter>;
  showFilter?: InputMaybe<BooleanFilter>;
};

export enum TeaserNewsGridModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  ShowFilterAsc = "showFilter_ASC",
  ShowFilterDesc = "showFilter_DESC",
}

/** Record of type Teaser News Grid (teaser_news_grid) */
export type TeaserNewsGridRecord = RecordInterface & {
  __typename?: "TeaserNewsGridRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  newsCards: Array<NewsArticleRecord>;
  showFilter: Scalars["BooleanType"]["output"];
};

/** Record of type Teaser News Grid (teaser_news_grid) */
export type TeaserNewsGridRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type TeaserRelatedCaseModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TeaserRelatedCaseModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TeaserRelatedCaseModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  caseStudies?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  showDivider?: InputMaybe<BooleanFilter>;
};

export enum TeaserRelatedCaseModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  ShowDividerAsc = "showDivider_ASC",
  ShowDividerDesc = "showDivider_DESC",
}

/** Record of type Teaser Related Case (teaser_related_case) */
export type TeaserRelatedCaseRecord = RecordInterface & {
  __typename?: "TeaserRelatedCaseRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  caseStudies: Array<CaseStudyRecord>;
  divider?: Maybe<DividerRecord>;
  id: Scalars["ItemId"]["output"];
  showDivider: Scalars["BooleanType"]["output"];
};

/** Record of type Teaser Related Case (teaser_related_case) */
export type TeaserRelatedCaseRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type TeaserRelatedNewsModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TeaserRelatedNewsModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TeaserRelatedNewsModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  newsArticles?: InputMaybe<LinksFilter>;
  showDivider?: InputMaybe<BooleanFilter>;
};

export enum TeaserRelatedNewsModelOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  FirstPublishedAtAsc = "_firstPublishedAt_ASC",
  FirstPublishedAtDesc = "_firstPublishedAt_DESC",
  IsValidAsc = "_isValid_ASC",
  IsValidDesc = "_isValid_DESC",
  PublicationScheduledAtAsc = "_publicationScheduledAt_ASC",
  PublicationScheduledAtDesc = "_publicationScheduledAt_DESC",
  PublishedAtAsc = "_publishedAt_ASC",
  PublishedAtDesc = "_publishedAt_DESC",
  StatusAsc = "_status_ASC",
  StatusDesc = "_status_DESC",
  UnpublishingScheduledAtAsc = "_unpublishingScheduledAt_ASC",
  UnpublishingScheduledAtDesc = "_unpublishingScheduledAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  ShowDividerAsc = "showDivider_ASC",
  ShowDividerDesc = "showDivider_DESC",
}

/** Record of type Teaser Related News (teaser_related_news) */
export type TeaserRelatedNewsRecord = RecordInterface & {
  __typename?: "TeaserRelatedNewsRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  divider?: Maybe<DividerRecord>;
  id: Scalars["ItemId"]["output"];
  newsArticles: Array<NewsArticleRecord>;
  showDivider: Scalars["BooleanType"]["output"];
};

/** Record of type Teaser Related News (teaser_related_news) */
export type TeaserRelatedNewsRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter text fields */
export type TextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Block of type Text (text) */
export type TextRecord = RecordInterface & {
  __typename?: "TextRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  text: Scalars["String"]["output"];
};

/** Block of type Text (text) */
export type TextRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
export type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>;
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>;
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>;
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>;
};

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars["String"]["input"]>;
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
};

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type UploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  _createdAt?: InputMaybe<UploadCreatedAtFilter>;
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>;
  alt?: InputMaybe<UploadAltFilter>;
  author?: InputMaybe<UploadAuthorFilter>;
  basename?: InputMaybe<UploadBasenameFilter>;
  colors?: InputMaybe<UploadColorsFilter>;
  copyright?: InputMaybe<UploadCopyrightFilter>;
  filename?: InputMaybe<UploadFilenameFilter>;
  format?: InputMaybe<UploadFormatFilter>;
  height?: InputMaybe<UploadHeightFilter>;
  id?: InputMaybe<UploadIdFilter>;
  inUse?: InputMaybe<InUseFilter>;
  md5?: InputMaybe<UploadMd5Filter>;
  mimeType?: InputMaybe<UploadMimeTypeFilter>;
  notes?: InputMaybe<UploadNotesFilter>;
  orientation?: InputMaybe<OrientationFilter>;
  resolution?: InputMaybe<ResolutionFilter>;
  size?: InputMaybe<UploadSizeFilter>;
  smartTags?: InputMaybe<UploadTagsFilter>;
  tags?: InputMaybe<UploadTagsFilter>;
  title?: InputMaybe<UploadTitleFilter>;
  type?: InputMaybe<TypeFilter>;
  width?: InputMaybe<UploadWidthFilter>;
};

/** Specifies how to filter by format */
export type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars["String"]["input"]>;
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars["String"]["input"]>;
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** Specifies how to filter by height */
export type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** Specifies how to filter by ID */
export type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars["UploadId"]["input"]>;
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars["UploadId"]["input"]>>>;
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars["UploadId"]["input"]>;
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["UploadId"]["input"]>>>;
};

/** Specifies how to filter by MD5 */
export type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars["String"]["input"]>;
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars["String"]["input"]>;
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars["String"]["input"]>;
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars["String"]["input"]>;
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadOrderBy {
  CreatedAtAsc = "_createdAt_ASC",
  CreatedAtDesc = "_createdAt_DESC",
  UpdatedAtAsc = "_updatedAt_ASC",
  UpdatedAtDesc = "_updatedAt_DESC",
  BasenameAsc = "basename_ASC",
  BasenameDesc = "basename_DESC",
  FilenameAsc = "filename_ASC",
  FilenameDesc = "filename_DESC",
  FormatAsc = "format_ASC",
  FormatDesc = "format_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  MimeTypeAsc = "mimeType_ASC",
  MimeTypeDesc = "mimeType_DESC",
  ResolutionAsc = "resolution_ASC",
  ResolutionDesc = "resolution_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
}

export enum UploadOrientation {
  Landscape = "landscape",
  Portrait = "portrait",
  Square = "square",
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars["String"]["input"]>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars["String"]["input"]>;
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadType {
  Archive = "archive",
  Audio = "audio",
  Image = "image",
  Pdfdocument = "pdfdocument",
  Presentation = "presentation",
  Richtext = "richtext",
  Spreadsheet = "spreadsheet",
  Video = "video",
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UploadVideoField = {
  __typename?: "UploadVideoField";
  alt?: Maybe<Scalars["String"]["output"]>;
  blurUpThumb?: Maybe<Scalars["String"]["output"]>;
  blurhash?: Maybe<Scalars["String"]["output"]>;
  duration?: Maybe<Scalars["Int"]["output"]>;
  framerate?: Maybe<Scalars["Int"]["output"]>;
  height: Scalars["IntType"]["output"];
  mp4Url?: Maybe<Scalars["String"]["output"]>;
  muxAssetId: Scalars["String"]["output"];
  muxPlaybackId: Scalars["String"]["output"];
  streamingUrl: Scalars["String"]["output"];
  thumbhash?: Maybe<Scalars["String"]["output"]>;
  thumbnailUrl: Scalars["String"]["output"];
  title?: Maybe<Scalars["String"]["output"]>;
  width: Scalars["IntType"]["output"];
};

export type UploadVideoFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type UploadVideoFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars["Float"]["input"];
  quality?: Scalars["Int"]["input"];
  size?: Scalars["Int"]["input"];
};

export type UploadVideoFieldMp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>;
  res?: InputMaybe<VideoMp4Res>;
};

export type UploadVideoFieldThumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>;
};

export type UploadVideoFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by width */
export type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars["IntType"]["input"]>;
};

export enum VideoMp4Res {
  High = "high",
  Low = "low",
  Medium = "medium",
}

export type FocalPoint = {
  __typename?: "focalPoint";
  x: Scalars["FloatType"]["output"];
  y: Scalars["FloatType"]["output"];
};

export type ContentQuoteFragment = {
  __typename: "ContentQuoteRecord";
  id: string;
  quote: string;
  author: string;
};

export type CookieConsentQueryVariables = Exact<{ [key: string]: never }>;

export type CookieConsentQuery = {
  __typename?: "Query";
  cookieConsentForm?: {
    __typename: "CookieConsentFormRecord";
    id: string;
    text: string;
    items: Array<{
      __typename?: "CookieConsentItemRecord";
      id: string;
      label: string;
      description: string;
    }>;
  } | null;
};

export type CookieConsentFormFragment = {
  __typename: "CookieConsentFormRecord";
  id: string;
  text: string;
  items: Array<{
    __typename?: "CookieConsentItemRecord";
    id: string;
    label: string;
    description: string;
  }>;
};

export type DividerFragment = {
  __typename?: "DividerRecord";
  text?: string | null;
  invertColor: boolean;
};

export type IndustryFragment = {
  __typename?: "IndustryRecord";
  id: string;
  industry: string;
};

export type ServiceFragment = {
  __typename?: "ServiceRecord";
  id: string;
  service: string;
};

export type ManifestoCardFragment = {
  __typename?: "ManifestoCardRecord";
  title: string;
  subtext: string;
  image: {
    __typename?: "AltFileField";
    responsiveImage?: {
      __typename?: "ResponsiveImage";
      src: string;
      alt?: string | null;
    } | null;
  };
};

export type NavigationQueryVariables = Exact<{ [key: string]: never }>;

export type NavigationQuery = {
  __typename?: "Query";
  navigation?: {
    __typename: "NavigationRecord";
    alternativeLogoText?: string | null;
    showLogo: boolean;
    links: Array<{
      __typename?: "NavLinkRecord";
      id: string;
      label: string;
      slug: string;
    }>;
    socialLinks: Array<{
      __typename?: "SocialLinkRecord";
      id: string;
      title: string;
      url: string;
    }>;
    cta?: {
      __typename?: "CallToActionRecord";
      text: string;
      url?: string | null;
      pageLink?: { __typename?: "PageRecord"; slug: string } | null;
    } | null;
  } | null;
};

export type ServiceCardFragment = {
  __typename?: "ServiceCardRecord";
  id: string;
  title: string;
  bodyText: string;
  listItems: string;
  image: {
    __typename?: "FileField";
    responsiveImage?: { __typename?: "ResponsiveImage"; src: string } | null;
  };
};

export type SidebarGenericFragment = {
  __typename: "SidebarGenericRecord";
  id: string;
  text: string;
  textStyle?: string | null;
  callToAction?: {
    __typename?: "CallToActionRecord";
    text: string;
    url?: string | null;
  } | null;
};

export type SidebarNewsFragment = {
  __typename: "SidebarNewsRecord";
  id: string;
  date: string;
  text: string;
  greyBackground: boolean;
  author: {
    __typename?: "PersonRecord";
    name: string;
    role: string;
    smallImage?: {
      __typename?: "FileField";
      responsiveImage?: { __typename?: "ResponsiveImage"; src: string } | null;
    } | null;
  };
};

export type SpacerFragment = {
  __typename: "SpacerRecord";
  id: string;
  desktopSpaceAmount: number;
  tabletSpaceAmount?: number | null;
  mobileSpaceAmount?: number | null;
  backgroundColor?: string | null;
};

export type StatementNumberedFragment = {
  __typename?: "StatementNumberedRecord";
  id: string;
  title: string;
  subtitle?: string | null;
  numberImage: {
    __typename?: "AltFileField";
    responsiveImage?: {
      __typename?: "ResponsiveImage";
      src: string;
      alt?: string | null;
      width: number;
      height: number;
    } | null;
  };
};

export type AllPagesQueryVariables = Exact<{ [key: string]: never }>;

export type AllPagesQuery = {
  __typename?: "Query";
  allPages: Array<{ __typename?: "PageRecord"; slug: string }>;
};

export type CaseStudyQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type CaseStudyQuery = {
  __typename?: "Query";
  caseStudy?: {
    __typename: "CaseStudyRecord";
    id: string;
    invertNav: boolean;
    slug: string;
    title: string;
    subtitle: string;
    seo: Array<{
      __typename?: "Tag";
      attributes?: Record<string, string> | null;
      content?: string | null;
      tag: string;
    }>;
    featuredMedia: {
      __typename?: "FileField";
      responsiveImage?: {
        __typename?: "ResponsiveImage";
        src: string;
        alt?: string | null;
      } | null;
      video?: {
        __typename?: "UploadVideoField";
        mp4Url?: string | null;
      } | null;
    };
    backgroundColor: { __typename?: "ColorField"; hex: string };
    sections: Array<
      | {
          __typename: "CaseContentRecord";
          id: string;
          headlineText: string;
          bodyText?: string | null;
          content: {
            __typename?: "CaseContentModelContentField";
            value: unknown;
            blocks: Array<
              | {
                  __typename: "CaseStudyContentImageRecord";
                  id: string;
                  halfSize: boolean;
                  media: {
                    __typename?: "FileField";
                    responsiveImage?: {
                      __typename?: "ResponsiveImage";
                      src: string;
                      alt?: string | null;
                    } | null;
                    video?: {
                      __typename?: "UploadVideoField";
                      mp4Url?: string | null;
                    } | null;
                  };
                }
              | {
                  __typename: "ContentQuoteRecord";
                  id: string;
                  quote: string;
                  author: string;
                }
            >;
          };
        }
      | {
          __typename: "CaseIntroRecord";
          id: string;
          text: string;
          problemText: string;
          solutionText: string;
        }
      | {
          __typename: "PurposeRecord";
          id: string;
          showDivider: boolean;
          text: string;
          invertColor: boolean;
          divider?: {
            __typename?: "DividerRecord";
            text?: string | null;
            invertColor: boolean;
          } | null;
          statement?: {
            __typename: "StatementSimpleRecord";
            id: string;
            showDivider: boolean;
            text: string;
            invertColor: boolean;
            textSize?: string | null;
            divider?: {
              __typename?: "DividerRecord";
              text?: string | null;
              invertColor: boolean;
            } | null;
          } | null;
          button?: {
            __typename?: "PageLinkRecord";
            text: string;
            slug: string;
          } | null;
          media: {
            __typename?: "FileField";
            responsiveImage?: {
              __typename?: "ResponsiveImage";
              src: string;
              alt?: string | null;
            } | null;
            video?: {
              __typename?: "UploadVideoField";
              mp4Url?: string | null;
            } | null;
          };
          stats: Array<{
            __typename?: "StatRecord";
            statistic: string;
            context: string;
          }>;
        }
      | { __typename: "SpacerRecord" }
      | {
          __typename: "StatsSectionRecord";
          id: string;
          showDivider: boolean;
          divider?: {
            __typename?: "DividerRecord";
            text?: string | null;
            invertColor: boolean;
          } | null;
          stats: Array<{
            __typename?: "StatRecord";
            id: string;
            statistic: string;
            context: string;
          }>;
        }
      | {
          __typename: "TeaserRelatedCaseRecord";
          id: string;
          showDivider: boolean;
          divider?: {
            __typename?: "DividerRecord";
            text?: string | null;
            invertColor: boolean;
          } | null;
          caseStudies: Array<{
            __typename: "CaseStudyRecord";
            id: string;
            title: string;
            subtitle: string;
            slug: string;
            invertNav: boolean;
            backgroundColor: { __typename?: "ColorField"; hex: string };
            cardMedia3x2: {
              __typename?: "FileField";
              responsiveImage?: {
                __typename?: "ResponsiveImage";
                src: string;
                alt?: string | null;
              } | null;
              video?: {
                __typename?: "UploadVideoField";
                mp4Url?: string | null;
              } | null;
            };
            relatedIndustries: Array<{
              __typename?: "IndustryRecord";
              id: string;
              industry: string;
            }>;
            relatedServices: Array<{
              __typename?: "ServiceRecord";
              id: string;
              service: string;
            }>;
          }>;
        }
    >;
    relatedServices: Array<{ __typename?: "ServiceRecord"; service: string }>;
    relatedIndustries: Array<{
      __typename?: "IndustryRecord";
      industry: string;
    }>;
  } | null;
};

export type FavIconQueryVariables = Exact<{ [key: string]: never }>;

export type FavIconQuery = {
  __typename?: "Query";
  _site: {
    __typename?: "Site";
    favicon?: { __typename?: "FileField"; url: string } | null;
  };
};

export type IndustryQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type IndustryQuery = {
  __typename?: "Query";
  industry?: {
    __typename: "IndustryRecord";
    id: string;
    industry: string;
    slug: string;
    title: string;
    seo: Array<{
      __typename?: "Tag";
      attributes?: Record<string, string> | null;
      content?: string | null;
      tag: string;
    }>;
    sections: Array<
      | {
          __typename: "HeaderWithTagRecord";
          id: string;
          title: string;
          subtitle?: string | null;
          industry: { __typename?: "IndustryRecord"; industry: string };
        }
      | { __typename: "StaggeredRecord" }
    >;
  } | null;
};

export type NewsArticleQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type NewsArticleQuery = {
  __typename?: "Query";
  newsArticle?: {
    __typename: "NewsArticleRecord";
    id: string;
    slug: string;
    title: string;
    typeOfArticle: string;
    seo: Array<{
      __typename?: "Tag";
      attributes?: Record<string, string> | null;
      content?: string | null;
      tag: string;
    }>;
    featuredMedia: {
      __typename?: "FileField";
      responsiveImage?: {
        __typename?: "ResponsiveImage";
        src: string;
        alt?: string | null;
      } | null;
      video?: {
        __typename?: "UploadVideoField";
        mp4Url?: string | null;
      } | null;
    };
    sections: Array<
      | {
          __typename: "ContentTextImageRecord";
          id: string;
          backgroundColor?: string | null;
          content: {
            __typename?: "ContentTextImageModelContentField";
            value: unknown;
            blocks: Array<
              | {
                  __typename: "CaseStudyContentImageRecord";
                  id: string;
                  halfSize: boolean;
                  media: {
                    __typename?: "FileField";
                    responsiveImage?: {
                      __typename?: "ResponsiveImage";
                      src: string;
                      alt?: string | null;
                    } | null;
                    video?: {
                      __typename?: "UploadVideoField";
                      mp4Url?: string | null;
                    } | null;
                  };
                }
              | {
                  __typename: "ContentQuoteRecord";
                  id: string;
                  quote: string;
                  author: string;
                }
            >;
          };
          leftContent:
            | {
                __typename: "SidebarGenericRecord";
                id: string;
                text: string;
                textStyle?: string | null;
                callToAction?: {
                  __typename?: "CallToActionRecord";
                  text: string;
                  url?: string | null;
                } | null;
              }
            | {
                __typename: "SidebarNewsRecord";
                id: string;
                date: string;
                text: string;
                greyBackground: boolean;
                author: {
                  __typename?: "PersonRecord";
                  name: string;
                  role: string;
                  smallImage?: {
                    __typename?: "FileField";
                    responsiveImage?: {
                      __typename?: "ResponsiveImage";
                      src: string;
                    } | null;
                  } | null;
                };
              };
        }
      | {
          __typename: "TeaserNewsGridRecord";
          id: string;
          showFilter: boolean;
          newsCards: Array<{
            __typename?: "NewsArticleRecord";
            id: string;
            typeOfArticle: string;
            title: string;
            slug: string;
            cardImage: {
              __typename?: "FileField";
              responsiveImage?: {
                __typename?: "ResponsiveImage";
                src: string;
                alt?: string | null;
              } | null;
            };
          }>;
        }
      | {
          __typename: "TeaserRelatedNewsRecord";
          id: string;
          showDivider: boolean;
          divider?: {
            __typename?: "DividerRecord";
            text?: string | null;
            invertColor: boolean;
          } | null;
          newsArticles: Array<{
            __typename?: "NewsArticleRecord";
            id: string;
            typeOfArticle: string;
            title: string;
            slug: string;
            cardImage: {
              __typename?: "FileField";
              responsiveImage?: {
                __typename?: "ResponsiveImage";
                src: string;
                alt?: string | null;
              } | null;
            };
          }>;
        }
    >;
  } | null;
};

export type PageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type PageQuery = {
  __typename?: "Query";
  page?: {
    __typename?: "PageRecord";
    title: string;
    invertNavColor: boolean;
    seo: Array<{
      __typename?: "Tag";
      attributes?: Record<string, string> | null;
      content?: string | null;
      tag: string;
    }>;
    sections: Array<
      | {
          __typename: "ContentTextImageRecord";
          id: string;
          backgroundColor?: string | null;
          content: {
            __typename?: "ContentTextImageModelContentField";
            value: unknown;
            blocks: Array<
              | {
                  __typename: "CaseStudyContentImageRecord";
                  id: string;
                  halfSize: boolean;
                  media: {
                    __typename?: "FileField";
                    responsiveImage?: {
                      __typename?: "ResponsiveImage";
                      src: string;
                      alt?: string | null;
                    } | null;
                    video?: {
                      __typename?: "UploadVideoField";
                      mp4Url?: string | null;
                    } | null;
                  };
                }
              | {
                  __typename: "ContentQuoteRecord";
                  id: string;
                  quote: string;
                  author: string;
                }
            >;
          };
          leftContent:
            | {
                __typename: "SidebarGenericRecord";
                id: string;
                text: string;
                textStyle?: string | null;
                callToAction?: {
                  __typename?: "CallToActionRecord";
                  text: string;
                  url?: string | null;
                } | null;
              }
            | {
                __typename: "SidebarNewsRecord";
                id: string;
                date: string;
                text: string;
                greyBackground: boolean;
                author: {
                  __typename?: "PersonRecord";
                  name: string;
                  role: string;
                  smallImage?: {
                    __typename?: "FileField";
                    responsiveImage?: {
                      __typename?: "ResponsiveImage";
                      src: string;
                    } | null;
                  } | null;
                };
              };
        }
      | {
          __typename: "DrawerRecord";
          id: string;
          title: string;
          imageOnLeft: boolean;
          whiteBackground: boolean;
          items: Array<{
            __typename?: "DrawerItemRecord";
            id: string;
            title: string;
            body: string;
          }>;
          media: {
            __typename?: "FileField";
            responsiveImage?: {
              __typename?: "ResponsiveImage";
              src: string;
              alt?: string | null;
            } | null;
            video?: {
              __typename?: "UploadVideoField";
              mp4Url?: string | null;
            } | null;
          };
        }
      | {
          __typename: "FullWidthImageRecord";
          id: string;
          media: {
            __typename?: "FileField";
            responsiveImage?: {
              __typename?: "ResponsiveImage";
              src: string;
              alt?: string | null;
            } | null;
            video?: {
              __typename?: "UploadVideoField";
              mp4Url?: string | null;
            } | null;
          };
        }
      | {
          __typename: "HeaderSimpleRecord";
          id: string;
          featuredText: string;
          subtext?: string | null;
          showInquiryInfo: boolean;
          showCta: boolean;
          cta?: {
            __typename?: "CallToActionRecord";
            text: string;
            url?: string | null;
            buttonType: string;
            pageLink?: { __typename?: "PageRecord"; slug: string } | null;
          } | null;
          inquiryInfo?: {
            __typename?: "InquiryInfoRecord";
            title: string;
            subtext?: string | null;
          } | null;
        }
      | {
          __typename: "HeaderWithTagRecord";
          id: string;
          title: string;
          subtitle?: string | null;
          industry: { __typename?: "IndustryRecord"; industry: string };
        }
      | {
          __typename: "HomepageHeroRecord";
          id: string;
          media: {
            __typename?: "FileField";
            video?: {
              __typename?: "UploadVideoField";
              streamingUrl: string;
              mp4Url?: string | null;
            } | null;
            responsiveImage?: {
              __typename?: "ResponsiveImage";
              src: string;
              height: number;
              width: number;
              alt?: string | null;
              title?: string | null;
            } | null;
          };
        }
      | {
          __typename: "ImageWithStatRecord";
          id: string;
          media: {
            __typename?: "FileField";
            responsiveImage?: {
              __typename?: "ResponsiveImage";
              src: string;
              alt?: string | null;
            } | null;
            video?: {
              __typename?: "UploadVideoField";
              mp4Url?: string | null;
            } | null;
          };
          stats: Array<{
            __typename?: "StatRecord";
            id: string;
            statistic: string;
            context: string;
          }>;
        }
      | {
          __typename: "LocationTeaserRecord";
          id: string;
          showDivider: boolean;
          title: string;
          subtext?: string | null;
          divider?: {
            __typename?: "DividerRecord";
            text?: string | null;
            invertColor: boolean;
          } | null;
          locations: Array<{
            __typename?: "LocationRecord";
            id: string;
            city: string;
            timeZone: string;
          }>;
        }
      | {
          __typename: "LocationsSectionRecord";
          id: string;
          locations: Array<{
            __typename?: "LocationRecord";
            id: string;
            city: string;
            timeZone: string;
            address: string;
            email: string;
            phoneNumber?: string | null;
            decorativeImage?: {
              __typename?: "FileField";
              responsiveImage?: {
                __typename?: "ResponsiveImage";
                src: string;
                alt?: string | null;
              } | null;
            } | null;
            contactPerson?: {
              __typename?: "PersonRecord";
              name: string;
              role: string;
              email?: string | null;
            } | null;
            media: {
              __typename?: "FileField";
              responsiveImage?: {
                __typename?: "ResponsiveImage";
                src: string;
                alt?: string | null;
              } | null;
              video?: {
                __typename?: "UploadVideoField";
                mp4Url?: string | null;
              } | null;
            };
          }>;
        }
      | {
          __typename: "LogoGridRecord";
          id: string;
          invertColor: boolean;
          divider?: {
            __typename?: "DividerRecord";
            text?: string | null;
          } | null;
          logos: Array<{
            __typename?: "LogoRecord";
            id: string;
            logoImage: { __typename?: "FileField"; url: string };
          }>;
        }
      | {
          __typename: "ManifestoRecord";
          id: string;
          showDivider: boolean;
          invertColor: boolean;
          divider?: {
            __typename?: "DividerRecord";
            text?: string | null;
            invertColor: boolean;
          } | null;
          statement?: {
            __typename: "StatementSimpleRecord";
            id: string;
            showDivider: boolean;
            text: string;
            invertColor: boolean;
            textSize?: string | null;
            divider?: {
              __typename?: "DividerRecord";
              text?: string | null;
              invertColor: boolean;
            } | null;
          } | null;
          cards: Array<{
            __typename?: "ManifestoCardRecord";
            title: string;
            subtext: string;
            image: {
              __typename?: "AltFileField";
              responsiveImage?: {
                __typename?: "ResponsiveImage";
                src: string;
                alt?: string | null;
              } | null;
            };
          }>;
        }
      | { __typename: "OpenPositionRecord"; id: string; title: string }
      | {
          __typename: "PurposeRecord";
          id: string;
          showDivider: boolean;
          text: string;
          invertColor: boolean;
          divider?: {
            __typename?: "DividerRecord";
            text?: string | null;
            invertColor: boolean;
          } | null;
          statement?: {
            __typename: "StatementSimpleRecord";
            id: string;
            showDivider: boolean;
            text: string;
            invertColor: boolean;
            textSize?: string | null;
            divider?: {
              __typename?: "DividerRecord";
              text?: string | null;
              invertColor: boolean;
            } | null;
          } | null;
          button?: {
            __typename?: "PageLinkRecord";
            text: string;
            slug: string;
          } | null;
          media: {
            __typename?: "FileField";
            responsiveImage?: {
              __typename?: "ResponsiveImage";
              src: string;
              alt?: string | null;
            } | null;
            video?: {
              __typename?: "UploadVideoField";
              mp4Url?: string | null;
            } | null;
          };
          stats: Array<{
            __typename?: "StatRecord";
            statistic: string;
            context: string;
          }>;
        }
      | {
          __typename: "QuoteRecord";
          id: string;
          quoteText: string;
          author: string;
          image?: {
            __typename?: "FileField";
            responsiveImage?: {
              __typename?: "ResponsiveImage";
              src: string;
              alt?: string | null;
              height: number;
              width: number;
            } | null;
          } | null;
        }
      | {
          __typename: "ServiceCardsSectionRecord";
          id: string;
          showDivider: boolean;
          invertColor: boolean;
          divider?: {
            __typename?: "DividerRecord";
            text?: string | null;
            invertColor: boolean;
          } | null;
          statement?: {
            __typename: "StatementSimpleRecord";
            id: string;
            showDivider: boolean;
            text: string;
            invertColor: boolean;
            textSize?: string | null;
            divider?: {
              __typename?: "DividerRecord";
              text?: string | null;
              invertColor: boolean;
            } | null;
          } | null;
          serviceCards: Array<{
            __typename?: "ServiceCardRecord";
            id: string;
            title: string;
            bodyText: string;
            listItems: string;
            image: {
              __typename?: "FileField";
              responsiveImage?: {
                __typename?: "ResponsiveImage";
                src: string;
              } | null;
            };
          }>;
        }
      | {
          __typename: "SliderGalleryRecord";
          id: string;
          assets: Array<{
            __typename?: "FileField";
            id: string;
            responsiveImage?: {
              __typename?: "ResponsiveImage";
              src: string;
              alt?: string | null;
            } | null;
            video?: {
              __typename?: "UploadVideoField";
              mp4Url?: string | null;
            } | null;
          }>;
        }
      | {
          __typename: "SliderNewsRecord";
          id: string;
          showDivider: boolean;
          divider?: {
            __typename?: "DividerRecord";
            text?: string | null;
            invertColor: boolean;
          } | null;
          articles: Array<{
            __typename?: "NewsArticleRecord";
            id: string;
            title: string;
            shortDescription?: string | null;
            slug: string;
            publishedDate?: string | null;
            cardImage: {
              __typename?: "FileField";
              responsiveImage?: {
                __typename?: "ResponsiveImage";
                src: string;
                alt?: string | null;
              } | null;
            };
          }>;
        }
      | {
          __typename: "SpacerRecord";
          id: string;
          desktopSpaceAmount: number;
          tabletSpaceAmount?: number | null;
          mobileSpaceAmount?: number | null;
          backgroundColor?: string | null;
        }
      | {
          __typename: "StaggeredRecord";
          id: string;
          showDivider: boolean;
          title: string;
          divider?: {
            __typename?: "DividerRecord";
            text?: string | null;
            invertColor: boolean;
          } | null;
          items: Array<{
            __typename: "StaggeredItemRecord";
            id: string;
            title: string;
            subtext: string;
            media: {
              __typename?: "FileField";
              responsiveImage?: {
                __typename?: "ResponsiveImage";
                src: string;
                alt?: string | null;
              } | null;
            };
          }>;
        }
      | {
          __typename: "StatementCtaRecord";
          id: string;
          showDivider: boolean;
          text: string;
          divider?: {
            __typename?: "DividerRecord";
            text?: string | null;
            invertColor: boolean;
          } | null;
          callToAction: {
            __typename: "PageLinkRecord";
            text: string;
            slug: string;
          };
        }
      | {
          __typename: "StatementLargeRecord";
          id: string;
          text: string;
          backgroundColor?: string | null;
          addCallToAction: boolean;
          cta?: {
            __typename: "PageLinkRecord";
            text: string;
            slug: string;
          } | null;
        }
      | {
          __typename: "StatementSimpleRecord";
          id: string;
          showDivider: boolean;
          text: string;
          invertColor: boolean;
          textSize?: string | null;
          divider?: {
            __typename?: "DividerRecord";
            text?: string | null;
            invertColor: boolean;
          } | null;
        }
      | {
          __typename: "StatsSectionRecord";
          id: string;
          showDivider: boolean;
          divider?: {
            __typename?: "DividerRecord";
            text?: string | null;
            invertColor: boolean;
          } | null;
          stats: Array<{
            __typename?: "StatRecord";
            id: string;
            statistic: string;
            context: string;
          }>;
        }
      | {
          __typename: "TeaserCaseGridRecord";
          id: string;
          showFilter: boolean;
          caseStudies: Array<
            | {
                __typename: "CaseStudyRecord";
                id: string;
                title: string;
                subtitle: string;
                slug: string;
                invertNav: boolean;
                backgroundColor: { __typename?: "ColorField"; hex: string };
                cardMedia2x1: {
                  __typename?: "FileField";
                  responsiveImage?: {
                    __typename?: "ResponsiveImage";
                    src: string;
                    alt?: string | null;
                  } | null;
                  video?: {
                    __typename?: "UploadVideoField";
                    mp4Url?: string | null;
                  } | null;
                };
                cardMedia3x2: {
                  __typename?: "FileField";
                  responsiveImage?: {
                    __typename?: "ResponsiveImage";
                    src: string;
                    alt?: string | null;
                  } | null;
                  video?: {
                    __typename?: "UploadVideoField";
                    mp4Url?: string | null;
                  } | null;
                };
                relatedIndustries: Array<{
                  __typename?: "IndustryRecord";
                  id: string;
                  industry: string;
                }>;
                relatedServices: Array<{
                  __typename?: "ServiceRecord";
                  id: string;
                  service: string;
                }>;
              }
            | {
                __typename: "IndustryRecord";
                id: string;
                industry: string;
                teaserText?: string | null;
                slug: string;
                teaserMedia?: {
                  __typename?: "FileField";
                  responsiveImage?: {
                    __typename?: "ResponsiveImage";
                    src: string;
                    alt?: string | null;
                  } | null;
                } | null;
              }
          >;
        }
      | {
          __typename: "TeaserCaseStaggeredRecord";
          id: string;
          divider?: {
            __typename?: "DividerRecord";
            text?: string | null;
            invertColor: boolean;
          } | null;
          numberedStatement?: {
            __typename?: "StatementNumberedRecord";
            id: string;
            title: string;
            subtitle?: string | null;
            numberImage: {
              __typename?: "AltFileField";
              responsiveImage?: {
                __typename?: "ResponsiveImage";
                src: string;
                alt?: string | null;
                width: number;
                height: number;
              } | null;
            };
          } | null;
          caseStudies: Array<{
            __typename?: "CaseStudyRecord";
            id: string;
            title: string;
            subtitle: string;
            invertNav: boolean;
            slug: string;
            backgroundColor: { __typename?: "ColorField"; hex: string };
            cardMedia3x4: {
              __typename?: "FileField";
              responsiveImage?: {
                __typename?: "ResponsiveImage";
                src: string;
                alt?: string | null;
              } | null;
              video?: {
                __typename?: "UploadVideoField";
                mp4Url?: string | null;
              } | null;
            };
            cardMedia1x1: {
              __typename?: "FileField";
              responsiveImage?: {
                __typename?: "ResponsiveImage";
                src: string;
                alt?: string | null;
              } | null;
              video?: {
                __typename?: "UploadVideoField";
                mp4Url?: string | null;
              } | null;
            };
            cardMedia4x3: {
              __typename?: "FileField";
              responsiveImage?: {
                __typename?: "ResponsiveImage";
                src: string;
                alt?: string | null;
              } | null;
              video?: {
                __typename?: "UploadVideoField";
                mp4Url?: string | null;
              } | null;
            };
          }>;
        }
      | {
          __typename: "TeaserCtaRecord";
          id: string;
          text: string;
          cta?: {
            __typename?: "CallToActionRecord";
            text: string;
            url?: string | null;
            buttonType: string;
            pageLink?: { __typename?: "PageRecord"; slug: string } | null;
          } | null;
          industryInsight: {
            __typename?: "IndustryRecord";
            teaserText?: string | null;
            slug: string;
            teaserMedia?: {
              __typename?: "FileField";
              responsiveImage?: {
                __typename?: "ResponsiveImage";
                src: string;
                alt?: string | null;
              } | null;
            } | null;
          };
        }
      | {
          __typename: "TeaserLeadershipRecord";
          id: string;
          showDivider: boolean;
          divider?: {
            __typename?: "DividerRecord";
            text?: string | null;
            invertColor: boolean;
          } | null;
          people: Array<{
            __typename?: "PersonRecord";
            id: string;
            name: string;
            role: string;
            slug: string;
            email?: string | null;
            cardImage?: {
              __typename?: "FileField";
              responsiveImage?: {
                __typename?: "ResponsiveImage";
                src: string;
              } | null;
            } | null;
          }>;
        }
      | {
          __typename: "TeaserNewsGridRecord";
          id: string;
          showFilter: boolean;
          newsCards: Array<{
            __typename?: "NewsArticleRecord";
            id: string;
            typeOfArticle: string;
            title: string;
            slug: string;
            cardImage: {
              __typename?: "FileField";
              responsiveImage?: {
                __typename?: "ResponsiveImage";
                src: string;
                alt?: string | null;
              } | null;
            };
          }>;
        }
      | {
          __typename: "TeaserRelatedCaseRecord";
          id: string;
          showDivider: boolean;
          divider?: {
            __typename?: "DividerRecord";
            text?: string | null;
            invertColor: boolean;
          } | null;
          caseStudies: Array<{
            __typename: "CaseStudyRecord";
            id: string;
            title: string;
            subtitle: string;
            slug: string;
            invertNav: boolean;
            backgroundColor: { __typename?: "ColorField"; hex: string };
            cardMedia3x2: {
              __typename?: "FileField";
              responsiveImage?: {
                __typename?: "ResponsiveImage";
                src: string;
                alt?: string | null;
              } | null;
              video?: {
                __typename?: "UploadVideoField";
                mp4Url?: string | null;
              } | null;
            };
            relatedIndustries: Array<{
              __typename?: "IndustryRecord";
              id: string;
              industry: string;
            }>;
            relatedServices: Array<{
              __typename?: "ServiceRecord";
              id: string;
              service: string;
            }>;
          }>;
        }
      | {
          __typename: "TeaserRelatedNewsRecord";
          id: string;
          showDivider: boolean;
          divider?: {
            __typename?: "DividerRecord";
            text?: string | null;
            invertColor: boolean;
          } | null;
          newsArticles: Array<{
            __typename?: "NewsArticleRecord";
            id: string;
            typeOfArticle: string;
            title: string;
            slug: string;
            cardImage: {
              __typename?: "FileField";
              responsiveImage?: {
                __typename?: "ResponsiveImage";
                src: string;
                alt?: string | null;
              } | null;
            };
          }>;
        }
    >;
  } | null;
};

export type PersonQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type PersonQuery = {
  __typename?: "Query";
  person?: {
    __typename: "PersonRecord";
    id: string;
    name: string;
    role: string;
    slug: string;
    seo: Array<{
      __typename?: "Tag";
      attributes?: Record<string, string> | null;
      content?: string | null;
      tag: string;
    }>;
    cardImage?: {
      __typename?: "FileField";
      responsiveImage?: { __typename?: "ResponsiveImage"; src: string } | null;
    } | null;
    headerImage?: {
      __typename?: "FileField";
      responsiveImage?: { __typename?: "ResponsiveImage"; src: string } | null;
    } | null;
    sections: Array<
      | {
          __typename: "ContentTextImageRecord";
          id: string;
          backgroundColor?: string | null;
          content: {
            __typename?: "ContentTextImageModelContentField";
            value: unknown;
            blocks: Array<
              | {
                  __typename: "CaseStudyContentImageRecord";
                  id: string;
                  halfSize: boolean;
                  media: {
                    __typename?: "FileField";
                    responsiveImage?: {
                      __typename?: "ResponsiveImage";
                      src: string;
                      alt?: string | null;
                    } | null;
                    video?: {
                      __typename?: "UploadVideoField";
                      mp4Url?: string | null;
                    } | null;
                  };
                }
              | {
                  __typename: "ContentQuoteRecord";
                  id: string;
                  quote: string;
                  author: string;
                }
            >;
          };
          leftContent:
            | {
                __typename: "SidebarGenericRecord";
                id: string;
                text: string;
                textStyle?: string | null;
                callToAction?: {
                  __typename?: "CallToActionRecord";
                  text: string;
                  url?: string | null;
                } | null;
              }
            | {
                __typename: "SidebarNewsRecord";
                id: string;
                date: string;
                text: string;
                greyBackground: boolean;
                author: {
                  __typename?: "PersonRecord";
                  name: string;
                  role: string;
                  smallImage?: {
                    __typename?: "FileField";
                    responsiveImage?: {
                      __typename?: "ResponsiveImage";
                      src: string;
                    } | null;
                  } | null;
                };
              };
        }
      | { __typename: "SpacerRecord" }
      | {
          __typename: "StatementCtaRecord";
          id: string;
          showDivider: boolean;
          text: string;
          divider?: {
            __typename?: "DividerRecord";
            text?: string | null;
            invertColor: boolean;
          } | null;
          callToAction: {
            __typename: "PageLinkRecord";
            text: string;
            slug: string;
          };
        }
    >;
  } | null;
};

export type CaseContentFragment = {
  __typename: "CaseContentRecord";
  id: string;
  headlineText: string;
  bodyText?: string | null;
  content: {
    __typename?: "CaseContentModelContentField";
    value: unknown;
    blocks: Array<
      | {
          __typename: "CaseStudyContentImageRecord";
          id: string;
          halfSize: boolean;
          media: {
            __typename?: "FileField";
            responsiveImage?: {
              __typename?: "ResponsiveImage";
              src: string;
              alt?: string | null;
            } | null;
            video?: {
              __typename?: "UploadVideoField";
              mp4Url?: string | null;
            } | null;
          };
        }
      | {
          __typename: "ContentQuoteRecord";
          id: string;
          quote: string;
          author: string;
        }
    >;
  };
};

export type CaseStudyContentImageFragment = {
  __typename: "CaseStudyContentImageRecord";
  id: string;
  halfSize: boolean;
  media: {
    __typename?: "FileField";
    responsiveImage?: {
      __typename?: "ResponsiveImage";
      src: string;
      alt?: string | null;
    } | null;
    video?: { __typename?: "UploadVideoField"; mp4Url?: string | null } | null;
  };
};

export type CaseIntroFragment = {
  __typename: "CaseIntroRecord";
  id: string;
  text: string;
  problemText: string;
  solutionText: string;
};

export type ContentTextImageFragment = {
  __typename: "ContentTextImageRecord";
  id: string;
  backgroundColor?: string | null;
  content: {
    __typename?: "ContentTextImageModelContentField";
    value: unknown;
    blocks: Array<
      | {
          __typename: "CaseStudyContentImageRecord";
          id: string;
          halfSize: boolean;
          media: {
            __typename?: "FileField";
            responsiveImage?: {
              __typename?: "ResponsiveImage";
              src: string;
              alt?: string | null;
            } | null;
            video?: {
              __typename?: "UploadVideoField";
              mp4Url?: string | null;
            } | null;
          };
        }
      | {
          __typename: "ContentQuoteRecord";
          id: string;
          quote: string;
          author: string;
        }
    >;
  };
  leftContent:
    | {
        __typename: "SidebarGenericRecord";
        id: string;
        text: string;
        textStyle?: string | null;
        callToAction?: {
          __typename?: "CallToActionRecord";
          text: string;
          url?: string | null;
        } | null;
      }
    | {
        __typename: "SidebarNewsRecord";
        id: string;
        date: string;
        text: string;
        greyBackground: boolean;
        author: {
          __typename?: "PersonRecord";
          name: string;
          role: string;
          smallImage?: {
            __typename?: "FileField";
            responsiveImage?: {
              __typename?: "ResponsiveImage";
              src: string;
            } | null;
          } | null;
        };
      };
};

export type DrawersFragment = {
  __typename: "DrawerRecord";
  id: string;
  title: string;
  imageOnLeft: boolean;
  whiteBackground: boolean;
  items: Array<{
    __typename?: "DrawerItemRecord";
    id: string;
    title: string;
    body: string;
  }>;
  media: {
    __typename?: "FileField";
    responsiveImage?: {
      __typename?: "ResponsiveImage";
      src: string;
      alt?: string | null;
    } | null;
    video?: { __typename?: "UploadVideoField"; mp4Url?: string | null } | null;
  };
};

export type FooterQueryVariables = Exact<{ [key: string]: never }>;

export type FooterQuery = {
  __typename?: "Query";
  footer?: {
    __typename?: "FooterRecord";
    id: string;
    title: string;
    copyrightText?: string | null;
    loopingTitleText: Array<{
      __typename?: "TextRecord";
      id: string;
      text: string;
    }>;
    titleCta?:
      | { __typename: "LinkRecord"; text: string; url: string }
      | { __typename: "PageLinkRecord"; slug: string; text: string }
      | null;
    pageLinks: Array<{
      __typename?: "PageRecord";
      id: string;
      title: string;
      slug: string;
    }>;
    socialLinks: Array<{
      __typename?: "SocialLinkRecord";
      id: string;
      title: string;
      url: string;
      image?: {
        __typename?: "FileField";
        responsiveImage?: {
          __typename?: "ResponsiveImage";
          src: string;
          width: number;
          height: number;
        } | null;
      } | null;
    }>;
    legalLinks: Array<{
      __typename?: "LinkRecord";
      id: string;
      text: string;
      url: string;
    }>;
  } | null;
};

export type FullImageFragment = {
  __typename: "FullWidthImageRecord";
  id: string;
  media: {
    __typename?: "FileField";
    responsiveImage?: {
      __typename?: "ResponsiveImage";
      src: string;
      alt?: string | null;
    } | null;
    video?: { __typename?: "UploadVideoField"; mp4Url?: string | null } | null;
  };
};

export type HeaderSimpleFragment = {
  __typename: "HeaderSimpleRecord";
  id: string;
  featuredText: string;
  subtext?: string | null;
  showInquiryInfo: boolean;
  showCta: boolean;
  cta?: {
    __typename?: "CallToActionRecord";
    text: string;
    url?: string | null;
    buttonType: string;
    pageLink?: { __typename?: "PageRecord"; slug: string } | null;
  } | null;
  inquiryInfo?: {
    __typename?: "InquiryInfoRecord";
    title: string;
    subtext?: string | null;
  } | null;
};

export type HeaderWithTagFragment = {
  __typename: "HeaderWithTagRecord";
  id: string;
  title: string;
  subtitle?: string | null;
  industry: { __typename?: "IndustryRecord"; industry: string };
};

export type HomepageHeroFragment = {
  __typename: "HomepageHeroRecord";
  id: string;
  media: {
    __typename?: "FileField";
    video?: {
      __typename?: "UploadVideoField";
      streamingUrl: string;
      mp4Url?: string | null;
    } | null;
    responsiveImage?: {
      __typename?: "ResponsiveImage";
      src: string;
      height: number;
      width: number;
      alt?: string | null;
      title?: string | null;
    } | null;
  };
};

export type ImageWithStatFragment = {
  __typename: "ImageWithStatRecord";
  id: string;
  media: {
    __typename?: "FileField";
    responsiveImage?: {
      __typename?: "ResponsiveImage";
      src: string;
      alt?: string | null;
    } | null;
    video?: { __typename?: "UploadVideoField"; mp4Url?: string | null } | null;
  };
  stats: Array<{
    __typename?: "StatRecord";
    id: string;
    statistic: string;
    context: string;
  }>;
};

export type LocationTeaserFragment = {
  __typename: "LocationTeaserRecord";
  id: string;
  showDivider: boolean;
  title: string;
  subtext?: string | null;
  divider?: {
    __typename?: "DividerRecord";
    text?: string | null;
    invertColor: boolean;
  } | null;
  locations: Array<{
    __typename?: "LocationRecord";
    id: string;
    city: string;
    timeZone: string;
  }>;
};

export type LocationsFragment = {
  __typename: "LocationsSectionRecord";
  id: string;
  locations: Array<{
    __typename?: "LocationRecord";
    id: string;
    city: string;
    timeZone: string;
    address: string;
    email: string;
    phoneNumber?: string | null;
    decorativeImage?: {
      __typename?: "FileField";
      responsiveImage?: {
        __typename?: "ResponsiveImage";
        src: string;
        alt?: string | null;
      } | null;
    } | null;
    contactPerson?: {
      __typename?: "PersonRecord";
      name: string;
      role: string;
      email?: string | null;
    } | null;
    media: {
      __typename?: "FileField";
      responsiveImage?: {
        __typename?: "ResponsiveImage";
        src: string;
        alt?: string | null;
      } | null;
      video?: {
        __typename?: "UploadVideoField";
        mp4Url?: string | null;
      } | null;
    };
  }>;
};

export type LocationFragment = {
  __typename?: "LocationRecord";
  id: string;
  city: string;
  timeZone: string;
  address: string;
  email: string;
  phoneNumber?: string | null;
  decorativeImage?: {
    __typename?: "FileField";
    responsiveImage?: {
      __typename?: "ResponsiveImage";
      src: string;
      alt?: string | null;
    } | null;
  } | null;
  contactPerson?: {
    __typename?: "PersonRecord";
    name: string;
    role: string;
    email?: string | null;
  } | null;
  media: {
    __typename?: "FileField";
    responsiveImage?: {
      __typename?: "ResponsiveImage";
      src: string;
      alt?: string | null;
    } | null;
    video?: { __typename?: "UploadVideoField"; mp4Url?: string | null } | null;
  };
};

export type LogoGridFragment = {
  __typename: "LogoGridRecord";
  id: string;
  invertColor: boolean;
  divider?: { __typename?: "DividerRecord"; text?: string | null } | null;
  logos: Array<{
    __typename?: "LogoRecord";
    id: string;
    logoImage: { __typename?: "FileField"; url: string };
  }>;
};

export type ManifestoFragment = {
  __typename: "ManifestoRecord";
  id: string;
  showDivider: boolean;
  invertColor: boolean;
  divider?: {
    __typename?: "DividerRecord";
    text?: string | null;
    invertColor: boolean;
  } | null;
  statement?: {
    __typename: "StatementSimpleRecord";
    id: string;
    showDivider: boolean;
    text: string;
    invertColor: boolean;
    textSize?: string | null;
    divider?: {
      __typename?: "DividerRecord";
      text?: string | null;
      invertColor: boolean;
    } | null;
  } | null;
  cards: Array<{
    __typename?: "ManifestoCardRecord";
    title: string;
    subtext: string;
    image: {
      __typename?: "AltFileField";
      responsiveImage?: {
        __typename?: "ResponsiveImage";
        src: string;
        alt?: string | null;
      } | null;
    };
  }>;
};

export type OpenPositionFragment = {
  __typename: "OpenPositionRecord";
  id: string;
  title: string;
};

export type PurposeFragment = {
  __typename: "PurposeRecord";
  id: string;
  showDivider: boolean;
  text: string;
  invertColor: boolean;
  divider?: {
    __typename?: "DividerRecord";
    text?: string | null;
    invertColor: boolean;
  } | null;
  statement?: {
    __typename: "StatementSimpleRecord";
    id: string;
    showDivider: boolean;
    text: string;
    invertColor: boolean;
    textSize?: string | null;
    divider?: {
      __typename?: "DividerRecord";
      text?: string | null;
      invertColor: boolean;
    } | null;
  } | null;
  button?: { __typename?: "PageLinkRecord"; text: string; slug: string } | null;
  media: {
    __typename?: "FileField";
    responsiveImage?: {
      __typename?: "ResponsiveImage";
      src: string;
      alt?: string | null;
    } | null;
    video?: { __typename?: "UploadVideoField"; mp4Url?: string | null } | null;
  };
  stats: Array<{
    __typename?: "StatRecord";
    statistic: string;
    context: string;
  }>;
};

export type StatFragment = {
  __typename?: "StatRecord";
  statistic: string;
  context: string;
};

export type QuoteFragment = {
  __typename: "QuoteRecord";
  id: string;
  quoteText: string;
  author: string;
  image?: {
    __typename?: "FileField";
    responsiveImage?: {
      __typename?: "ResponsiveImage";
      src: string;
      alt?: string | null;
      height: number;
      width: number;
    } | null;
  } | null;
};

export type ServiceCardsFragment = {
  __typename: "ServiceCardsSectionRecord";
  id: string;
  showDivider: boolean;
  invertColor: boolean;
  divider?: {
    __typename?: "DividerRecord";
    text?: string | null;
    invertColor: boolean;
  } | null;
  statement?: {
    __typename: "StatementSimpleRecord";
    id: string;
    showDivider: boolean;
    text: string;
    invertColor: boolean;
    textSize?: string | null;
    divider?: {
      __typename?: "DividerRecord";
      text?: string | null;
      invertColor: boolean;
    } | null;
  } | null;
  serviceCards: Array<{
    __typename?: "ServiceCardRecord";
    id: string;
    title: string;
    bodyText: string;
    listItems: string;
    image: {
      __typename?: "FileField";
      responsiveImage?: { __typename?: "ResponsiveImage"; src: string } | null;
    };
  }>;
};

export type SliderGalleryFragment = {
  __typename: "SliderGalleryRecord";
  id: string;
  assets: Array<{
    __typename?: "FileField";
    id: string;
    responsiveImage?: {
      __typename?: "ResponsiveImage";
      src: string;
      alt?: string | null;
    } | null;
    video?: { __typename?: "UploadVideoField"; mp4Url?: string | null } | null;
  }>;
};

export type SliderNewsFragment = {
  __typename: "SliderNewsRecord";
  id: string;
  showDivider: boolean;
  divider?: {
    __typename?: "DividerRecord";
    text?: string | null;
    invertColor: boolean;
  } | null;
  articles: Array<{
    __typename?: "NewsArticleRecord";
    id: string;
    title: string;
    shortDescription?: string | null;
    slug: string;
    publishedDate?: string | null;
    cardImage: {
      __typename?: "FileField";
      responsiveImage?: {
        __typename?: "ResponsiveImage";
        src: string;
        alt?: string | null;
      } | null;
    };
  }>;
};

export type SliderNewsCardFragment = {
  __typename?: "NewsArticleRecord";
  id: string;
  title: string;
  shortDescription?: string | null;
  slug: string;
  publishedDate?: string | null;
  cardImage: {
    __typename?: "FileField";
    responsiveImage?: {
      __typename?: "ResponsiveImage";
      src: string;
      alt?: string | null;
    } | null;
  };
};

export type StaggeredFragment = {
  __typename: "StaggeredRecord";
  id: string;
  showDivider: boolean;
  title: string;
  divider?: {
    __typename?: "DividerRecord";
    text?: string | null;
    invertColor: boolean;
  } | null;
  items: Array<{
    __typename: "StaggeredItemRecord";
    id: string;
    title: string;
    subtext: string;
    media: {
      __typename?: "FileField";
      responsiveImage?: {
        __typename?: "ResponsiveImage";
        src: string;
        alt?: string | null;
      } | null;
    };
  }>;
};

export type StatementCtaFragment = {
  __typename: "StatementCtaRecord";
  id: string;
  showDivider: boolean;
  text: string;
  divider?: {
    __typename?: "DividerRecord";
    text?: string | null;
    invertColor: boolean;
  } | null;
  callToAction: { __typename: "PageLinkRecord"; text: string; slug: string };
};

export type StatementLargeFragment = {
  __typename: "StatementLargeRecord";
  id: string;
  text: string;
  backgroundColor?: string | null;
  addCallToAction: boolean;
  cta?: { __typename: "PageLinkRecord"; text: string; slug: string } | null;
};

export type StatementSimpleFragment = {
  __typename: "StatementSimpleRecord";
  id: string;
  showDivider: boolean;
  text: string;
  invertColor: boolean;
  textSize?: string | null;
  divider?: {
    __typename?: "DividerRecord";
    text?: string | null;
    invertColor: boolean;
  } | null;
};

export type StatsFragment = {
  __typename: "StatsSectionRecord";
  id: string;
  showDivider: boolean;
  divider?: {
    __typename?: "DividerRecord";
    text?: string | null;
    invertColor: boolean;
  } | null;
  stats: Array<{
    __typename?: "StatRecord";
    id: string;
    statistic: string;
    context: string;
  }>;
};

export type TeaserCaseGridFragment = {
  __typename: "TeaserCaseGridRecord";
  id: string;
  showFilter: boolean;
  caseStudies: Array<
    | {
        __typename: "CaseStudyRecord";
        id: string;
        title: string;
        subtitle: string;
        slug: string;
        invertNav: boolean;
        backgroundColor: { __typename?: "ColorField"; hex: string };
        cardMedia2x1: {
          __typename?: "FileField";
          responsiveImage?: {
            __typename?: "ResponsiveImage";
            src: string;
            alt?: string | null;
          } | null;
          video?: {
            __typename?: "UploadVideoField";
            mp4Url?: string | null;
          } | null;
        };
        cardMedia3x2: {
          __typename?: "FileField";
          responsiveImage?: {
            __typename?: "ResponsiveImage";
            src: string;
            alt?: string | null;
          } | null;
          video?: {
            __typename?: "UploadVideoField";
            mp4Url?: string | null;
          } | null;
        };
        relatedIndustries: Array<{
          __typename?: "IndustryRecord";
          id: string;
          industry: string;
        }>;
        relatedServices: Array<{
          __typename?: "ServiceRecord";
          id: string;
          service: string;
        }>;
      }
    | {
        __typename: "IndustryRecord";
        id: string;
        industry: string;
        teaserText?: string | null;
        slug: string;
        teaserMedia?: {
          __typename?: "FileField";
          responsiveImage?: {
            __typename?: "ResponsiveImage";
            src: string;
            alt?: string | null;
          } | null;
        } | null;
      }
  >;
};

export type IndustryGridCardFragment = {
  __typename: "IndustryRecord";
  id: string;
  industry: string;
  teaserText?: string | null;
  slug: string;
  teaserMedia?: {
    __typename?: "FileField";
    responsiveImage?: {
      __typename?: "ResponsiveImage";
      src: string;
      alt?: string | null;
    } | null;
  } | null;
};

export type CaseStudyGridCardFragment = {
  __typename: "CaseStudyRecord";
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  invertNav: boolean;
  backgroundColor: { __typename?: "ColorField"; hex: string };
  cardMedia2x1: {
    __typename?: "FileField";
    responsiveImage?: {
      __typename?: "ResponsiveImage";
      src: string;
      alt?: string | null;
    } | null;
    video?: { __typename?: "UploadVideoField"; mp4Url?: string | null } | null;
  };
  cardMedia3x2: {
    __typename?: "FileField";
    responsiveImage?: {
      __typename?: "ResponsiveImage";
      src: string;
      alt?: string | null;
    } | null;
    video?: { __typename?: "UploadVideoField"; mp4Url?: string | null } | null;
  };
  relatedIndustries: Array<{
    __typename?: "IndustryRecord";
    id: string;
    industry: string;
  }>;
  relatedServices: Array<{
    __typename?: "ServiceRecord";
    id: string;
    service: string;
  }>;
};

export type TeaserCaseStaggeredFragment = {
  __typename: "TeaserCaseStaggeredRecord";
  id: string;
  divider?: {
    __typename?: "DividerRecord";
    text?: string | null;
    invertColor: boolean;
  } | null;
  numberedStatement?: {
    __typename?: "StatementNumberedRecord";
    id: string;
    title: string;
    subtitle?: string | null;
    numberImage: {
      __typename?: "AltFileField";
      responsiveImage?: {
        __typename?: "ResponsiveImage";
        src: string;
        alt?: string | null;
        width: number;
        height: number;
      } | null;
    };
  } | null;
  caseStudies: Array<{
    __typename?: "CaseStudyRecord";
    id: string;
    title: string;
    subtitle: string;
    invertNav: boolean;
    slug: string;
    backgroundColor: { __typename?: "ColorField"; hex: string };
    cardMedia3x4: {
      __typename?: "FileField";
      responsiveImage?: {
        __typename?: "ResponsiveImage";
        src: string;
        alt?: string | null;
      } | null;
      video?: {
        __typename?: "UploadVideoField";
        mp4Url?: string | null;
      } | null;
    };
    cardMedia1x1: {
      __typename?: "FileField";
      responsiveImage?: {
        __typename?: "ResponsiveImage";
        src: string;
        alt?: string | null;
      } | null;
      video?: {
        __typename?: "UploadVideoField";
        mp4Url?: string | null;
      } | null;
    };
    cardMedia4x3: {
      __typename?: "FileField";
      responsiveImage?: {
        __typename?: "ResponsiveImage";
        src: string;
        alt?: string | null;
      } | null;
      video?: {
        __typename?: "UploadVideoField";
        mp4Url?: string | null;
      } | null;
    };
  }>;
};

export type CaseStudyCardFragment = {
  __typename?: "CaseStudyRecord";
  id: string;
  title: string;
  subtitle: string;
  invertNav: boolean;
  slug: string;
  backgroundColor: { __typename?: "ColorField"; hex: string };
  cardMedia3x4: {
    __typename?: "FileField";
    responsiveImage?: {
      __typename?: "ResponsiveImage";
      src: string;
      alt?: string | null;
    } | null;
    video?: { __typename?: "UploadVideoField"; mp4Url?: string | null } | null;
  };
  cardMedia1x1: {
    __typename?: "FileField";
    responsiveImage?: {
      __typename?: "ResponsiveImage";
      src: string;
      alt?: string | null;
    } | null;
    video?: { __typename?: "UploadVideoField"; mp4Url?: string | null } | null;
  };
  cardMedia4x3: {
    __typename?: "FileField";
    responsiveImage?: {
      __typename?: "ResponsiveImage";
      src: string;
      alt?: string | null;
    } | null;
    video?: { __typename?: "UploadVideoField"; mp4Url?: string | null } | null;
  };
};

export type TeaserCtaFragment = {
  __typename: "TeaserCtaRecord";
  id: string;
  text: string;
  cta?: {
    __typename?: "CallToActionRecord";
    text: string;
    url?: string | null;
    buttonType: string;
    pageLink?: { __typename?: "PageRecord"; slug: string } | null;
  } | null;
  industryInsight: {
    __typename?: "IndustryRecord";
    teaserText?: string | null;
    slug: string;
    teaserMedia?: {
      __typename?: "FileField";
      responsiveImage?: {
        __typename?: "ResponsiveImage";
        src: string;
        alt?: string | null;
      } | null;
    } | null;
  };
};

export type TeaserLeadershipFragment = {
  __typename: "TeaserLeadershipRecord";
  id: string;
  showDivider: boolean;
  divider?: {
    __typename?: "DividerRecord";
    text?: string | null;
    invertColor: boolean;
  } | null;
  people: Array<{
    __typename?: "PersonRecord";
    id: string;
    name: string;
    role: string;
    slug: string;
    email?: string | null;
    cardImage?: {
      __typename?: "FileField";
      responsiveImage?: { __typename?: "ResponsiveImage"; src: string } | null;
    } | null;
  }>;
};

export type PersonFragment = {
  __typename?: "PersonRecord";
  id: string;
  name: string;
  role: string;
  slug: string;
  email?: string | null;
  cardImage?: {
    __typename?: "FileField";
    responsiveImage?: { __typename?: "ResponsiveImage"; src: string } | null;
  } | null;
};

export type TeaserNewsGridFragment = {
  __typename: "TeaserNewsGridRecord";
  id: string;
  showFilter: boolean;
  newsCards: Array<{
    __typename?: "NewsArticleRecord";
    id: string;
    typeOfArticle: string;
    title: string;
    slug: string;
    cardImage: {
      __typename?: "FileField";
      responsiveImage?: {
        __typename?: "ResponsiveImage";
        src: string;
        alt?: string | null;
      } | null;
    };
  }>;
};

export type NewsArticleFragment = {
  __typename?: "NewsArticleRecord";
  id: string;
  typeOfArticle: string;
  title: string;
  slug: string;
  cardImage: {
    __typename?: "FileField";
    responsiveImage?: {
      __typename?: "ResponsiveImage";
      src: string;
      alt?: string | null;
    } | null;
  };
};

export type TeaserRelatedCaseFragment = {
  __typename: "TeaserRelatedCaseRecord";
  id: string;
  showDivider: boolean;
  divider?: {
    __typename?: "DividerRecord";
    text?: string | null;
    invertColor: boolean;
  } | null;
  caseStudies: Array<{
    __typename: "CaseStudyRecord";
    id: string;
    title: string;
    subtitle: string;
    slug: string;
    invertNav: boolean;
    backgroundColor: { __typename?: "ColorField"; hex: string };
    cardMedia3x2: {
      __typename?: "FileField";
      responsiveImage?: {
        __typename?: "ResponsiveImage";
        src: string;
        alt?: string | null;
      } | null;
      video?: {
        __typename?: "UploadVideoField";
        mp4Url?: string | null;
      } | null;
    };
    relatedIndustries: Array<{
      __typename?: "IndustryRecord";
      id: string;
      industry: string;
    }>;
    relatedServices: Array<{
      __typename?: "ServiceRecord";
      id: string;
      service: string;
    }>;
  }>;
};

export type CaseStudyGridCardRelatedCaseFragment = {
  __typename: "CaseStudyRecord";
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  invertNav: boolean;
  backgroundColor: { __typename?: "ColorField"; hex: string };
  cardMedia3x2: {
    __typename?: "FileField";
    responsiveImage?: {
      __typename?: "ResponsiveImage";
      src: string;
      alt?: string | null;
    } | null;
    video?: { __typename?: "UploadVideoField"; mp4Url?: string | null } | null;
  };
  relatedIndustries: Array<{
    __typename?: "IndustryRecord";
    id: string;
    industry: string;
  }>;
  relatedServices: Array<{
    __typename?: "ServiceRecord";
    id: string;
    service: string;
  }>;
};

export type TeaserRelatedNewsFragment = {
  __typename: "TeaserRelatedNewsRecord";
  id: string;
  showDivider: boolean;
  divider?: {
    __typename?: "DividerRecord";
    text?: string | null;
    invertColor: boolean;
  } | null;
  newsArticles: Array<{
    __typename?: "NewsArticleRecord";
    id: string;
    typeOfArticle: string;
    title: string;
    slug: string;
    cardImage: {
      __typename?: "FileField";
      responsiveImage?: {
        __typename?: "ResponsiveImage";
        src: string;
        alt?: string | null;
      } | null;
    };
  }>;
};

export const CookieConsentFormFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CookieConsentForm" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CookieConsentFormRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "items" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CookieConsentFormFragment, unknown>;
export const SpacerFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Spacer" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SpacerRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "desktopSpaceAmount" },
          },
          { kind: "Field", name: { kind: "Name", value: "tabletSpaceAmount" } },
          { kind: "Field", name: { kind: "Name", value: "mobileSpaceAmount" } },
          { kind: "Field", name: { kind: "Name", value: "backgroundColor" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SpacerFragment, unknown>;
export const CaseStudyContentImageFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CaseStudyContentImage" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CaseStudyContentImageRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "halfSize" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CaseStudyContentImageFragment, unknown>;
export const ContentQuoteFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentQuote" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ContentQuoteRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "quote" } },
          { kind: "Field", name: { kind: "Name", value: "author" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ContentQuoteFragment, unknown>;
export const CaseContentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CaseContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CaseContentRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "headlineText" } },
          { kind: "Field", name: { kind: "Name", value: "bodyText" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "content" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "blocks" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "CaseStudyContentImage" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "ContentQuote" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CaseStudyContentImage" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CaseStudyContentImageRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "halfSize" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentQuote" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ContentQuoteRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "quote" } },
          { kind: "Field", name: { kind: "Name", value: "author" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CaseContentFragment, unknown>;
export const CaseIntroFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CaseIntro" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CaseIntroRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "problemText" } },
          { kind: "Field", name: { kind: "Name", value: "solutionText" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CaseIntroFragment, unknown>;
export const SidebarNewsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SidebarNews" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SidebarNewsRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "author" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "smallImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "responsiveImage" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "src" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "greyBackground" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SidebarNewsFragment, unknown>;
export const SidebarGenericFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SidebarGeneric" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SidebarGenericRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "text" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          { kind: "Field", name: { kind: "Name", value: "textStyle" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "callToAction" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "text" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SidebarGenericFragment, unknown>;
export const ContentTextImageFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentTextImage" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ContentTextImageRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "content" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "blocks" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "CaseStudyContentImage" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "ContentQuote" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "leftContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SidebarNews" },
                },
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SidebarGeneric" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "backgroundColor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CaseStudyContentImage" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CaseStudyContentImageRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "halfSize" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentQuote" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ContentQuoteRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "quote" } },
          { kind: "Field", name: { kind: "Name", value: "author" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SidebarNews" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SidebarNewsRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "author" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "smallImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "responsiveImage" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "src" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "greyBackground" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SidebarGeneric" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SidebarGenericRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "text" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          { kind: "Field", name: { kind: "Name", value: "textStyle" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "callToAction" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "text" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ContentTextImageFragment, unknown>;
export const DrawersFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Drawers" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "DrawerRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "items" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DrawerItemRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "body" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "markdown" },
                            value: { kind: "BooleanValue", value: true },
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "imageOnLeft" } },
          { kind: "Field", name: { kind: "Name", value: "whiteBackground" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DrawersFragment, unknown>;
export const FullImageFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FullImage" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "FullWidthImageRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FullImageFragment, unknown>;
export const HeaderSimpleFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HeaderSimple" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HeaderSimpleRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "featuredText" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          { kind: "Field", name: { kind: "Name", value: "subtext" } },
          { kind: "Field", name: { kind: "Name", value: "showInquiryInfo" } },
          { kind: "Field", name: { kind: "Name", value: "showCta" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "cta" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "text" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pageLink" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "buttonType" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "inquiryInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "title" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "subtext" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "markdown" },
                      value: { kind: "BooleanValue", value: true },
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeaderSimpleFragment, unknown>;
export const HeaderWithTagFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HeaderWithTag" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HeaderWithTagRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "title" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          { kind: "Field", name: { kind: "Name", value: "subtitle" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "industry" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "industry" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeaderWithTagFragment, unknown>;
export const HomepageHeroFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HomepageHero" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HomepageHeroRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "streamingUrl" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "height" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HomepageHeroFragment, unknown>;
export const ImageWithStatFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageWithStat" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ImageWithStatRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "stats" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "StatRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "statistic" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "context" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ImageWithStatFragment, unknown>;
export const DividerFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Divider" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "DividerRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DividerFragment, unknown>;
export const LocationTeaserFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "LocationTeaser" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "LocationTeaserRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subtext" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "locations" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "timeZone" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Divider" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "DividerRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LocationTeaserFragment, unknown>;
export const LocationFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Location" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "LocationRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "city" } },
          { kind: "Field", name: { kind: "Name", value: "timeZone" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "decorativeImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "address" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "phoneNumber" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "contactPerson" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LocationFragment, unknown>;
export const LocationsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Locations" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "LocationsSectionRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "locations" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Location" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Location" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "LocationRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "city" } },
          { kind: "Field", name: { kind: "Name", value: "timeZone" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "decorativeImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "address" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "phoneNumber" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "contactPerson" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LocationsFragment, unknown>;
export const LogoGridFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "LogoGrid" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "LogoGridRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "text" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "logos" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "logoImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LogoGridFragment, unknown>;
export const StatementSimpleFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "StatementSimple" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StatementSimpleRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "text" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
          { kind: "Field", name: { kind: "Name", value: "textSize" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Divider" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "DividerRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<StatementSimpleFragment, unknown>;
export const ManifestoCardFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ManifestoCard" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ManifestoCardRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subtext" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ManifestoCardFragment, unknown>;
export const ManifestoFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Manifesto" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ManifestoRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "statement" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "StatementSimple" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cards" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ManifestoCard" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Divider" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "DividerRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "StatementSimple" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StatementSimpleRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "text" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
          { kind: "Field", name: { kind: "Name", value: "textSize" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ManifestoCard" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ManifestoCardRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subtext" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ManifestoFragment, unknown>;
export const OpenPositionFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OpenPosition" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "OpenPositionRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<OpenPositionFragment, unknown>;
export const StatFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Stat" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StatRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "statistic" } },
          { kind: "Field", name: { kind: "Name", value: "context" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<StatFragment, unknown>;
export const PurposeFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Purpose" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PurposeRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "statement" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "StatementSimple" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "button" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "text" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "stats" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Stat" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Divider" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "DividerRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "StatementSimple" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StatementSimpleRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "text" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
          { kind: "Field", name: { kind: "Name", value: "textSize" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Stat" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StatRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "statistic" } },
          { kind: "Field", name: { kind: "Name", value: "context" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PurposeFragment, unknown>;
export const QuoteFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Quote" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "QuoteRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "quoteText" } },
          { kind: "Field", name: { kind: "Name", value: "author" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "height" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QuoteFragment, unknown>;
export const ServiceCardFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ServiceCard" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ServiceCardRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "bodyText" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "listItems" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ServiceCardFragment, unknown>;
export const ServiceCardsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ServiceCards" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ServiceCardsSectionRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "statement" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "StatementSimple" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "serviceCards" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ServiceCard" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Divider" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "DividerRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "StatementSimple" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StatementSimpleRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "text" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
          { kind: "Field", name: { kind: "Name", value: "textSize" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ServiceCard" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ServiceCardRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "bodyText" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "listItems" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ServiceCardsFragment, unknown>;
export const SliderGalleryFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SliderGallery" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SliderGalleryRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "assets" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SliderGalleryFragment, unknown>;
export const SliderNewsCardFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SliderNewsCard" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "NewsArticleRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "shortDescription" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "publishedDate" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SliderNewsCardFragment, unknown>;
export const SliderNewsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SliderNews" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SliderNewsRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "articles" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SliderNewsCard" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Divider" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "DividerRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SliderNewsCard" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "NewsArticleRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "shortDescription" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "publishedDate" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SliderNewsFragment, unknown>;
export const StaggeredFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Staggered" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StaggeredRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "text" } },
                { kind: "Field", name: { kind: "Name", value: "invertColor" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "title" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "items" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "subtext" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "media" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "responsiveImage" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "src" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "alt" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<StaggeredFragment, unknown>;
export const StatementCtaFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "StatementCta" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StatementCtaRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "callToAction" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "PageLinkRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "text" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Divider" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "DividerRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<StatementCtaFragment, unknown>;
export const StatementLargeFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "StatementLarge" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StatementLargeRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "text" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          { kind: "Field", name: { kind: "Name", value: "backgroundColor" } },
          { kind: "Field", name: { kind: "Name", value: "addCallToAction" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "cta" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "PageLinkRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "text" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<StatementLargeFragment, unknown>;
export const StatsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Stats" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StatsSectionRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "stats" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "statistic" } },
                { kind: "Field", name: { kind: "Name", value: "context" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Divider" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "DividerRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<StatsFragment, unknown>;
export const IndustryFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Industry" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "IndustryRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "industry" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<IndustryFragment, unknown>;
export const ServiceFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Service" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ServiceRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "service" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ServiceFragment, unknown>;
export const CaseStudyGridCardFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CaseStudyGridCard" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CaseStudyRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subtitle" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "invertNav" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "backgroundColor" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "hex" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardMedia2x1" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardMedia3x2" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "relatedIndustries" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Industry" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "relatedServices" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Service" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Industry" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "IndustryRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "industry" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Service" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ServiceRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "service" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CaseStudyGridCardFragment, unknown>;
export const IndustryGridCardFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IndustryGridCard" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "IndustryRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "industry" } },
          { kind: "Field", name: { kind: "Name", value: "teaserText" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "teaserMedia" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<IndustryGridCardFragment, unknown>;
export const TeaserCaseGridFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeaserCaseGrid" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TeaserCaseGridRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showFilter" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "caseStudies" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "CaseStudyGridCard" },
                },
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "IndustryGridCard" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Industry" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "IndustryRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "industry" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Service" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ServiceRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "service" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CaseStudyGridCard" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CaseStudyRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subtitle" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "invertNav" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "backgroundColor" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "hex" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardMedia2x1" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardMedia3x2" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "relatedIndustries" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Industry" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "relatedServices" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Service" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IndustryGridCard" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "IndustryRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "industry" } },
          { kind: "Field", name: { kind: "Name", value: "teaserText" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "teaserMedia" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TeaserCaseGridFragment, unknown>;
export const StatementNumberedFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "StatementNumbered" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StatementNumberedRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "numberImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "height" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subtitle" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<StatementNumberedFragment, unknown>;
export const CaseStudyCardFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CaseStudyCard" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CaseStudyRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subtitle" } },
          { kind: "Field", name: { kind: "Name", value: "invertNav" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "backgroundColor" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "hex" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardMedia3x4" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardMedia1x1" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardMedia4x3" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CaseStudyCardFragment, unknown>;
export const TeaserCaseStaggeredFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeaserCaseStaggered" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TeaserCaseStaggeredRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "numberedStatement" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "StatementNumbered" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "caseStudies" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "CaseStudyCard" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Divider" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "DividerRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "StatementNumbered" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StatementNumberedRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "numberImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "height" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subtitle" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CaseStudyCard" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CaseStudyRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subtitle" } },
          { kind: "Field", name: { kind: "Name", value: "invertNav" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "backgroundColor" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "hex" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardMedia3x4" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardMedia1x1" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardMedia4x3" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TeaserCaseStaggeredFragment, unknown>;
export const TeaserCtaFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeaserCta" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TeaserCtaRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "cta" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "text" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pageLink" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "buttonType" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "industryInsight" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "teaserText" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "teaserMedia" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "responsiveImage" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "src" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "alt" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TeaserCtaFragment, unknown>;
export const PersonFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Person" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PersonRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "role" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PersonFragment, unknown>;
export const TeaserLeadershipFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeaserLeadership" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TeaserLeadershipRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "people" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Person" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Divider" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "DividerRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Person" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PersonRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "role" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TeaserLeadershipFragment, unknown>;
export const NewsArticleFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NewsArticle" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "NewsArticleRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "typeOfArticle" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NewsArticleFragment, unknown>;
export const TeaserNewsGridFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeaserNewsGrid" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TeaserNewsGridRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showFilter" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "newsCards" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "NewsArticle" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NewsArticle" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "NewsArticleRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "typeOfArticle" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TeaserNewsGridFragment, unknown>;
export const CaseStudyGridCardRelatedCaseFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CaseStudyGridCardRelatedCase" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CaseStudyRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subtitle" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "invertNav" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "backgroundColor" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "hex" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardMedia3x2" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "relatedIndustries" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Industry" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "relatedServices" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Service" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Industry" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "IndustryRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "industry" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Service" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ServiceRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "service" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CaseStudyGridCardRelatedCaseFragment, unknown>;
export const TeaserRelatedCaseFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeaserRelatedCase" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TeaserRelatedCaseRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "caseStudies" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "CaseStudyGridCardRelatedCase" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Industry" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "IndustryRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "industry" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Service" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ServiceRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "service" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Divider" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "DividerRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CaseStudyGridCardRelatedCase" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CaseStudyRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subtitle" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "invertNav" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "backgroundColor" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "hex" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardMedia3x2" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "relatedIndustries" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Industry" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "relatedServices" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Service" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TeaserRelatedCaseFragment, unknown>;
export const TeaserRelatedNewsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeaserRelatedNews" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TeaserRelatedNewsRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "newsArticles" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "NewsArticle" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Divider" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "DividerRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NewsArticle" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "NewsArticleRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "typeOfArticle" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TeaserRelatedNewsFragment, unknown>;
export const CookieConsentDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "CookieConsent" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "cookieConsentForm" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "CookieConsentForm" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CookieConsentForm" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CookieConsentFormRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "items" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CookieConsentQuery, CookieConsentQueryVariables>;
export const NavigationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Navigation" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "navigation" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "links" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "alternativeLogoText" },
                },
                { kind: "Field", name: { kind: "Name", value: "showLogo" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "socialLinks" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "cta" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "text" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pageLink" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NavigationQuery, NavigationQueryVariables>;
export const AllPagesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AllPages" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "allPages" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "100" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "slug" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AllPagesQuery, AllPagesQueryVariables>;
export const CaseStudyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "CaseStudy" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "caseStudy" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "slug" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "seo" },
                  name: { kind: "Name", value: "_seoMetaTags" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "content" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "tag" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "invertNav" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "subtitle" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "featuredMedia" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "responsiveImage" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "src" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "alt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "video" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "mp4Url" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "backgroundColor" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "hex" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "sections" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "CaseContent" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Purpose" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "CaseIntro" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Stats" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TeaserRelatedCase" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "relatedServices" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "service" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "relatedIndustries" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "industry" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CaseStudyContentImage" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CaseStudyContentImageRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "halfSize" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentQuote" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ContentQuoteRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "quote" } },
          { kind: "Field", name: { kind: "Name", value: "author" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Divider" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "DividerRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "StatementSimple" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StatementSimpleRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "text" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
          { kind: "Field", name: { kind: "Name", value: "textSize" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Stat" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StatRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "statistic" } },
          { kind: "Field", name: { kind: "Name", value: "context" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Industry" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "IndustryRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "industry" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Service" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ServiceRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "service" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CaseStudyGridCardRelatedCase" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CaseStudyRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subtitle" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "invertNav" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "backgroundColor" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "hex" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardMedia3x2" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "relatedIndustries" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Industry" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "relatedServices" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Service" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CaseContent" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CaseContentRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "headlineText" } },
          { kind: "Field", name: { kind: "Name", value: "bodyText" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "content" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "blocks" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "CaseStudyContentImage" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "ContentQuote" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Purpose" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PurposeRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "statement" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "StatementSimple" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "button" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "text" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "stats" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Stat" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CaseIntro" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CaseIntroRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "problemText" } },
          { kind: "Field", name: { kind: "Name", value: "solutionText" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Stats" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StatsSectionRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "stats" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "statistic" } },
                { kind: "Field", name: { kind: "Name", value: "context" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeaserRelatedCase" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TeaserRelatedCaseRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "caseStudies" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "CaseStudyGridCardRelatedCase" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CaseStudyQuery, CaseStudyQueryVariables>;
export const FavIconDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "FavIcon" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "_site" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "favicon" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FavIconQuery, FavIconQueryVariables>;
export const IndustryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Industry" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "industry" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "slug" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "seo" },
                  name: { kind: "Name", value: "_seoMetaTags" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "content" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "tag" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "industry" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "title" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "markdown" },
                      value: { kind: "BooleanValue", value: true },
                    },
                  ],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "sections" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "HeaderWithTag" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HeaderWithTag" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HeaderWithTagRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "title" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          { kind: "Field", name: { kind: "Name", value: "subtitle" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "industry" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "industry" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<IndustryQuery, IndustryQueryVariables>;
export const NewsArticleDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "NewsArticle" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "newsArticle" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "slug" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "seo" },
                  name: { kind: "Name", value: "_seoMetaTags" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "content" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "tag" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "typeOfArticle" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "featuredMedia" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "responsiveImage" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "src" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "alt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "video" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "mp4Url" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "sections" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TeaserRelatedNews" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TeaserNewsGrid" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "ContentTextImage" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Divider" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "DividerRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NewsArticle" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "NewsArticleRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "typeOfArticle" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CaseStudyContentImage" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CaseStudyContentImageRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "halfSize" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentQuote" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ContentQuoteRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "quote" } },
          { kind: "Field", name: { kind: "Name", value: "author" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SidebarNews" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SidebarNewsRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "author" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "smallImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "responsiveImage" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "src" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "greyBackground" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SidebarGeneric" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SidebarGenericRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "text" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          { kind: "Field", name: { kind: "Name", value: "textStyle" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "callToAction" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "text" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeaserRelatedNews" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TeaserRelatedNewsRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "newsArticles" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "NewsArticle" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeaserNewsGrid" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TeaserNewsGridRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showFilter" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "newsCards" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "NewsArticle" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentTextImage" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ContentTextImageRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "content" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "blocks" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "CaseStudyContentImage" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "ContentQuote" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "leftContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SidebarNews" },
                },
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SidebarGeneric" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "backgroundColor" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NewsArticleQuery, NewsArticleQueryVariables>;
export const PageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Page" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "page" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "slug" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "seo" },
                  name: { kind: "Name", value: "_seoMetaTags" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "content" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "tag" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "sections" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "HomepageHero" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "StatementSimple" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "StatementLarge" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "HeaderSimple" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "LogoGrid" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Locations" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "FullImage" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "ImageWithStat" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Stats" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Drawers" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "StatementCta" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Quote" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "OpenPosition" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "LocationTeaser" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Purpose" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Manifesto" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "ServiceCards" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TeaserRelatedNews" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TeaserNewsGrid" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TeaserRelatedCase" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TeaserCaseGrid" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TeaserCaseStaggered" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "SliderGallery" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "SliderNews" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TeaserLeadership" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TeaserCta" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Staggered" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "HeaderWithTag" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Spacer" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "ContentTextImage" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "invertNavColor" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Divider" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "DividerRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Location" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "LocationRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "city" } },
          { kind: "Field", name: { kind: "Name", value: "timeZone" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "decorativeImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "address" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "phoneNumber" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "contactPerson" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "StatementSimple" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StatementSimpleRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "text" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
          { kind: "Field", name: { kind: "Name", value: "textSize" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Stat" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StatRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "statistic" } },
          { kind: "Field", name: { kind: "Name", value: "context" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ManifestoCard" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ManifestoCardRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subtext" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ServiceCard" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ServiceCardRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "bodyText" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "listItems" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NewsArticle" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "NewsArticleRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "typeOfArticle" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Industry" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "IndustryRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "industry" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Service" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ServiceRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "service" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CaseStudyGridCardRelatedCase" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CaseStudyRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subtitle" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "invertNav" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "backgroundColor" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "hex" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardMedia3x2" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "relatedIndustries" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Industry" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "relatedServices" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Service" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CaseStudyGridCard" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CaseStudyRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subtitle" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "invertNav" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "backgroundColor" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "hex" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardMedia2x1" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardMedia3x2" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "relatedIndustries" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Industry" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "relatedServices" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Service" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IndustryGridCard" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "IndustryRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "industry" } },
          { kind: "Field", name: { kind: "Name", value: "teaserText" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "teaserMedia" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "StatementNumbered" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StatementNumberedRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "numberImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "height" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subtitle" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CaseStudyCard" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CaseStudyRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subtitle" } },
          { kind: "Field", name: { kind: "Name", value: "invertNav" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "backgroundColor" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "hex" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardMedia3x4" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardMedia1x1" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardMedia4x3" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SliderNewsCard" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "NewsArticleRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "shortDescription" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "publishedDate" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Person" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PersonRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "role" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "cardImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CaseStudyContentImage" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CaseStudyContentImageRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "halfSize" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentQuote" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ContentQuoteRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "quote" } },
          { kind: "Field", name: { kind: "Name", value: "author" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SidebarNews" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SidebarNewsRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "author" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "smallImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "responsiveImage" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "src" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "greyBackground" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SidebarGeneric" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SidebarGenericRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "text" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          { kind: "Field", name: { kind: "Name", value: "textStyle" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "callToAction" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "text" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HomepageHero" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HomepageHeroRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "streamingUrl" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "height" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "StatementLarge" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StatementLargeRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "text" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          { kind: "Field", name: { kind: "Name", value: "backgroundColor" } },
          { kind: "Field", name: { kind: "Name", value: "addCallToAction" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "cta" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "PageLinkRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "text" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HeaderSimple" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HeaderSimpleRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "featuredText" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          { kind: "Field", name: { kind: "Name", value: "subtext" } },
          { kind: "Field", name: { kind: "Name", value: "showInquiryInfo" } },
          { kind: "Field", name: { kind: "Name", value: "showCta" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "cta" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "text" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pageLink" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "buttonType" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "inquiryInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "title" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "subtext" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "markdown" },
                      value: { kind: "BooleanValue", value: true },
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "LogoGrid" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "LogoGridRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "text" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "logos" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "logoImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Locations" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "LocationsSectionRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "locations" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Location" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FullImage" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "FullWidthImageRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageWithStat" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ImageWithStatRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "stats" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "StatRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "statistic" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "context" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Stats" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StatsSectionRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "stats" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "statistic" } },
                { kind: "Field", name: { kind: "Name", value: "context" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Drawers" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "DrawerRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "items" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "DrawerItemRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "body" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "markdown" },
                            value: { kind: "BooleanValue", value: true },
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "imageOnLeft" } },
          { kind: "Field", name: { kind: "Name", value: "whiteBackground" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "StatementCta" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StatementCtaRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "callToAction" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "PageLinkRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "text" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Quote" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "QuoteRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "quoteText" } },
          { kind: "Field", name: { kind: "Name", value: "author" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "height" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OpenPosition" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "OpenPositionRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "LocationTeaser" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "LocationTeaserRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subtext" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "locations" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "city" } },
                { kind: "Field", name: { kind: "Name", value: "timeZone" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Purpose" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PurposeRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "statement" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "StatementSimple" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "button" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "text" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "stats" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Stat" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Manifesto" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ManifestoRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "statement" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "StatementSimple" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cards" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ManifestoCard" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ServiceCards" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ServiceCardsSectionRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "statement" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "StatementSimple" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "serviceCards" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ServiceCard" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeaserRelatedNews" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TeaserRelatedNewsRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "newsArticles" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "NewsArticle" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeaserNewsGrid" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TeaserNewsGridRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showFilter" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "newsCards" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "NewsArticle" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeaserRelatedCase" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TeaserRelatedCaseRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "caseStudies" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "CaseStudyGridCardRelatedCase" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeaserCaseGrid" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TeaserCaseGridRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showFilter" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "caseStudies" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "CaseStudyGridCard" },
                },
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "IndustryGridCard" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeaserCaseStaggered" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TeaserCaseStaggeredRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "numberedStatement" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "StatementNumbered" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "caseStudies" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "CaseStudyCard" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SliderGallery" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SliderGalleryRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "assets" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SliderNews" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SliderNewsRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "articles" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SliderNewsCard" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeaserLeadership" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TeaserLeadershipRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "people" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Person" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeaserCta" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TeaserCtaRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "cta" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CallToActionRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "text" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pageLink" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "buttonType" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "industryInsight" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "teaserText" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "teaserMedia" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "responsiveImage" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "src" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "alt" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Staggered" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StaggeredRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "text" } },
                { kind: "Field", name: { kind: "Name", value: "invertColor" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "title" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "items" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "subtext" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "media" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "responsiveImage" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "src" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "alt" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HeaderWithTag" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HeaderWithTagRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "title" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          { kind: "Field", name: { kind: "Name", value: "subtitle" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "industry" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "industry" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Spacer" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SpacerRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "desktopSpaceAmount" },
          },
          { kind: "Field", name: { kind: "Name", value: "tabletSpaceAmount" } },
          { kind: "Field", name: { kind: "Name", value: "mobileSpaceAmount" } },
          { kind: "Field", name: { kind: "Name", value: "backgroundColor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentTextImage" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ContentTextImageRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "content" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "blocks" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "CaseStudyContentImage" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "ContentQuote" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "leftContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SidebarNews" },
                },
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SidebarGeneric" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "backgroundColor" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageQuery, PageQueryVariables>;
export const PersonDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Person" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "person" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "slug" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "seo" },
                  name: { kind: "Name", value: "_seoMetaTags" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "content" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "tag" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "cardImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "responsiveImage" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "src" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "headerImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "responsiveImage" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "src" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "sections" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "ContentTextImage" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "StatementCta" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CaseStudyContentImage" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CaseStudyContentImageRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "media" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsiveImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "src" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "video" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mp4Url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "halfSize" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentQuote" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ContentQuoteRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "quote" } },
          { kind: "Field", name: { kind: "Name", value: "author" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SidebarNews" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SidebarNewsRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "author" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "smallImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "responsiveImage" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "src" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "greyBackground" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SidebarGeneric" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SidebarGenericRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "text" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "markdown" },
                value: { kind: "BooleanValue", value: true },
              },
            ],
          },
          { kind: "Field", name: { kind: "Name", value: "textStyle" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "callToAction" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "text" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Divider" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "DividerRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "text" } },
          { kind: "Field", name: { kind: "Name", value: "invertColor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentTextImage" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ContentTextImageRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "content" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "blocks" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "CaseStudyContentImage" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "ContentQuote" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "leftContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SidebarNews" },
                },
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "SidebarGeneric" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "backgroundColor" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "StatementCta" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "StatementCtaRecord" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "showDivider" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "divider" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Divider" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "text" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "callToAction" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "PageLinkRecord" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "text" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PersonQuery, PersonQueryVariables>;
export const FooterDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Footer" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "footer" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "loopingTitleText" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "text" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "titleCta" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "LinkRecord" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "__typename" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "text" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "PageLinkRecord" },
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "__typename" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slug" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "text" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageLinks" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "socialLinks" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "image" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "responsiveImage" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "src" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "width" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "height" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "legalLinks" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "text" } },
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "copyrightText" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FooterQuery, FooterQueryVariables>;
