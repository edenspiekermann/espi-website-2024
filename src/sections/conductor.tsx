import { nanoid } from "nanoid";
import { SectionDevelopment } from "./development";
import { StatementSimple } from "./statement-simple";
import { HomePageHero } from "./homepage-hero";
import { StatementLarge } from "./statement-large";
import { HeaderSimple } from "./header-simple";
import { LogoGrid } from "./logo-grid";
import { Quote } from "./quote";
import { OpenPositions } from "./open-positions";
import { LocationTeaser } from "./location-teaser";
import { Purpose } from "./purpose";
import { Manifesto } from "./manifesto";
import { ServiceCards } from "./service-cards";

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
