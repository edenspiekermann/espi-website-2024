import { StatementLargeRecord } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Button } from "@/components/button/button";

export const StatementLarge = ({
  text,
  invertColor = false,
  cta,
  addCallToAction,
}: StatementLargeRecord) => {
  const statementSimpleClass = classNames({
    [styles.statementSimple]: true,
    [styles.inverted]: invertColor,
  });

  return (
    <section className={`${styles.statementLarge} container`}>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      {addCallToAction && cta && (
        <Button text={cta.text} slug={cta.slug} isInverted={invertColor} />
      )}
    </section>
  );
};
