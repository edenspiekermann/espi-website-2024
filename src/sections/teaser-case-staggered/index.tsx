import { TeaserCaseStaggeredFragment } from "@/graphql/types/generated";
import React from "react";
import { Card } from "./card";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { StatementNumbered } from "@/components/statement-numbered";

export const TeaserCaseStaggered = ({
  numberedStatement,
  caseStudies,
}: TeaserCaseStaggeredFragment) => {
  const teaserCaseStaggeredClass = classNames({
    [styles.teaserCaseStaggered]: true,
    [styles.threeCards]: caseStudies?.length === 3,
  });
  return (
    <section className={teaserCaseStaggeredClass}>
      {numberedStatement && <StatementNumbered {...numberedStatement} />}
      <div className="container">
        {caseStudies?.map((caseStudy) => {
          return <Card key={caseStudy.id} {...caseStudy} />;
        })}
      </div>
    </section>
  );
};
