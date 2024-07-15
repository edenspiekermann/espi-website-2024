import { TeaserCaseStaggeredFragment } from "@/graphql/types/generated";
import React from "react";
import { Card } from "./card";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const TeaserCaseStaggered = ({
  caseStudies,
}: TeaserCaseStaggeredFragment) => {
  const teaserCaseStaggeredClass = classNames({
    [styles.teaserCaseStaggered]: true,
    container: true,
    [styles.threeCards]: caseStudies?.length === 3,
  });
  return (
    <section className={teaserCaseStaggeredClass}>
      {caseStudies?.map((caseStudy) => {
        return <Card key={caseStudy.id} {...caseStudy} />;
      })}
    </section>
  );
};
