import { CaseStudyGridCardFragment } from "@/graphql/types/generated";
import React from "react";
import { GridCard } from "./card";

interface FilteredCardProperties {
  caseStudy: CaseStudyGridCardFragment;
  selectedFilter: string | null;
  showFilter: boolean;
  index: number;
  visibleCount: number;
}

export const FilteredCard = ({
  caseStudy,
  selectedFilter,
  index,
  visibleCount,
}: FilteredCardProperties) => {
  return caseStudy.relatedIndustries.some(
    ({ industry }) => industry === selectedFilter,
  ) ||
    caseStudy.relatedServices.some(
      ({ service }) => service === selectedFilter,
    ) ? (
    <GridCard
      key={caseStudy.id}
      {...caseStudy}
      visible={index < visibleCount}
    />
  ) : null;
};
