import { nanoid } from "nanoid";
import { SectionDevelopment } from "./development";
import { HomePageHero } from "./homepage-hero";

const sectionSwitch = (section: any) => {
  switch (section.__typename) {
    case "HomepageHeroRecord":
      return <HomePageHero key={section.id} {...section} />;
    default: {
      return <SectionDevelopment key={nanoid()} {...section} />;
    }
  }
};

export const SectionConductor = ({ sections }: { sections: any }) => {
  return (
    <main id="main-content">
      {sections.map((section: any) => sectionSwitch(section))}
    </main>
  );
};
