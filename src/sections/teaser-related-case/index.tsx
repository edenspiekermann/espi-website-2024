import {
  CaseStudyGridCardRelatedCaseFragment,
  TeaserRelatedCaseFragment,
} from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";
import { Divider } from "@/components/divider/divider";
import { CaseStudyRelatedCard } from "./card";

export const TeaserRelatedCase = ({
  showDivider,
  divider,
  caseStudies,
}: TeaserRelatedCaseFragment) => {
  return (
    <section>
      {showDivider && divider && <Divider {...divider} />}
      <div className={`${[styles.teaserRelatedCase]} container`}>
        {caseStudies?.map(
          (caseStudy) =>
            caseStudy.__typename === "CaseStudyRecord" && (
              <CaseStudyRelatedCard
                key={caseStudy.id}
                {...(caseStudy as CaseStudyGridCardRelatedCaseFragment)}
              />
            ),
        )}
      </div>
    </section>
  );
};
