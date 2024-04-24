import { nanoid } from "nanoid";
import { SectionDevelopment } from "./development";

const sectionSwitch = (section: any) => {
  switch (section.__typename) {
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
