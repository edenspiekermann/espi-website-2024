import { nanoid } from "nanoid";
import { SectionDevelopment } from "./development";
import { StatementSimple } from "./statement-simple";
import { HomePageHero } from "./homepage-hero";
import { StatementLarge } from "./statement-large";
import { HeaderSimple } from "./header-simple";
import { LogoGrid } from "./logo-grid";
import { Locations } from "./locations";
import { FullImage } from "./full-image";
import { ImageWithStat } from "./image-with-stat";
import { Stats } from "./stats";
import { Drawers } from "./drawers";
import { StatementCta } from "./statement-cta";
import { Quote } from "./quote";
import { OpenPositions } from "./open-positions";
import { LocationTeaser } from "./location-teaser";
import { Purpose } from "./purpose";
import { Manifesto } from "./manifesto";
import { ServiceCards } from "./service-cards";
import { TeaserRelatedNews } from "./teaser-related-news";
import { TeaserNewsGrid } from "./teaser-news-grid";
import { TeaserRelatedCase } from "./teaser-related-case";
import { TeaserCaseGrid } from "./teaser-case-grid";
import { TeaserCaseStaggered } from "./teaser-case-staggered";
import { TeaserLeadership } from "./teaser-leadership";

const sectionSwitch = (section: any) => {
  switch (section.__typename) {
    case "HomepageHeroRecord":
      return <HomePageHero key={section.id} {...section} />;
    case "StatementSimpleRecord":
      return <StatementSimple key={section.id} {...section} />;
    case "StatementLargeRecord":
      return <StatementLarge key={section.id} {...section} />;
    case "HeaderSimpleRecord":
      return <HeaderSimple key={section.id} {...section} />;
    case "LogoGridRecord":
      return <LogoGrid key={section.id} {...section} />;
    case "LocationsSectionRecord":
      return <Locations key={section.id} {...section} />;
    case "FullWidthImageRecord":
      return <FullImage key={section.id} {...section} />;
    case "ImageWithStatRecord":
      return <ImageWithStat key={section.id} {...section} />;
    case "StatsSectionRecord":
      return <Stats key={section.id} {...section} />;
    case "DrawerRecord":
      return <Drawers key={section.id} {...section} />;
    case "StatementCtaRecord":
      return <StatementCta key={section.id} {...section} />;
    case "QuoteRecord":
      return <Quote key={section.id} {...section} />;
    case "OpenPositionRecord":
      return <OpenPositions key={section.id} {...section} />;
    case "LocationTeaserRecord":
      return <LocationTeaser key={section.id} {...section} />;
    case "PurposeRecord":
      return <Purpose key={nanoid()} {...section} />;
    case "ManifestoRecord":
      return <Manifesto key={section.id} {...section} />;
    case "ServiceCardsSectionRecord":
      return <ServiceCards key={section.id} {...section} />;
    case "TeaserRelatedNewsRecord":
      return <TeaserRelatedNews key={section.id} {...section} />;
    case "TeaserNewsGridRecord":
      return <TeaserNewsGrid key={section.id} {...section} />;
    case "TeaserRelatedCaseRecord":
      return <TeaserRelatedCase key={section.id} {...section} />;
    case "TeaserCaseGridRecord":
      return <TeaserCaseGrid key={section.id} {...section} />;
    case "TeaserCaseStaggeredRecord":
      return <TeaserCaseStaggered key={section.id} {...section} />;
    case "TeaserLeadershipRecord":
      return <TeaserLeadership key={section.id} {...section} />;
    default:
      return <SectionDevelopment key={nanoid()} {...section} />;
  }
};

export const SectionConductor = ({ sections }: { sections: any }) => {
  return (
    <main id="main-content">
      {sections.map((section: any) => sectionSwitch(section))}
    </main>
  );
};
