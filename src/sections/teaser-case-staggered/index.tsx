"use client";

import { TeaserCaseStaggeredFragment } from "@/graphql/types/generated";
import React, { useEffect, useRef } from "react";
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

  const [amount, setAmount] = React.useState(0.5);

  useEffect(() => {
    const updateAmount = () => {
      if (window.innerWidth < 720) {
        setAmount(0.2);
      } else {
        setAmount(0.5);
      }
    };

    updateAmount();

    document.addEventListener("resize", updateAmount);

    return document.removeEventListener("resize", updateAmount);
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: amount });

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
              size={caseStudies.length}
            />
          );
        })}
      </div>
    </section>
  );
};
