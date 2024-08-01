"use client";

import { StatementLargeRecord } from "@/graphql/types/generated";
import React, { useRef } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Button } from "@/components/button/button";
import { useInView } from "framer-motion";
import { FadeIntoView } from "@/components/animation-wrappers/fade-into-view";
import { ScrollIntoViewText } from "@/components/scroll-into-view-text";

export const StatementLarge = ({
  text,
  invertColor = false,
  cta,
  addCallToAction,
}: StatementLargeRecord) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });

  const statementLargeClass = classNames({
    [styles.statementLarge]: true,
    [styles.inverted]: invertColor,
    container: true,
  });

  return (
    <section className={statementLargeClass} ref={ref}>
      <div className={styles.content}>
        <ScrollIntoViewText text={text} isInView={isInView} duration={0.3} />
      </div>
      {addCallToAction && cta && (
        <div className={styles.button}>
          <FadeIntoView isInView={isInView} duration={0.6} delay={0.75}>
            <Button text={cta.text} slug={cta.slug} isInverted={invertColor} />
          </FadeIntoView>
        </div>
      )}
    </section>
  );
};
