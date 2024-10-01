"use client";

import { TeaserCaseStaggeredFragment } from "@/graphql/types/generated";
import React, { useRef } from "react";
import { Card } from "./card";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { StatementNumbered } from "@/components/statement-numbered";
import { useInView } from "framer-motion";
import { Divider } from "@/components/divider/divider";

export const TeaserCaseStaggered = ({
  numberedStatement,
  caseStudies,
  divider,
}: TeaserCaseStaggeredFragment) => {
  const teaserCaseStaggeredClass = classNames({
    [styles.teaserCaseStaggered]: true,
    [styles.threeCards]: caseStudies?.length === 3,
  });

  const containerClass = classNames({
    [styles.cardContainer]: true,
    container: true,
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className={teaserCaseStaggeredClass}>
      {divider && <Divider {...divider} />}
      {numberedStatement && <StatementNumbered {...numberedStatement} />}
      <div className={containerClass} ref={ref}>
        {caseStudies?.map((caseStudy, index) => {
          return (
            <Card
              key={caseStudy.id}
              {...caseStudy}
              isInView={isInView}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};
