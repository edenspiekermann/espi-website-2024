"use client";

import {
  CaseStudyGridCardRelatedCaseFragment,
  TeaserRelatedCaseFragment,
} from "@/graphql/types/generated";
import React, { useRef } from "react";
import styles from "./styles.module.scss";
import { Divider } from "@/components/divider/divider";
import { CaseStudyRelatedCard } from "./card";
import { useInView } from "framer-motion";

export const TeaserRelatedCase = ({
  showDivider,
  divider,
  caseStudies,
}: TeaserRelatedCaseFragment) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section>
      {showDivider && divider && <Divider {...divider} />}
      <div className={`${[styles.teaserRelatedCase]} container`} ref={ref}>
        {caseStudies?.map(
          (caseStudy, index) =>
            caseStudy.__typename === "CaseStudyRecord" && (
              <CaseStudyRelatedCard
                key={caseStudy.id}
                {...(caseStudy as CaseStudyGridCardRelatedCaseFragment)}
                index={index}
                isInView={isInView}
              />
            ),
        )}
      </div>
    </section>
  );
};
