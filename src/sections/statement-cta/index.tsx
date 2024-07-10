import { Button } from "@/components/button/button";
import { Divider } from "@/components/divider/divider";
import { StatementCtaFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";

export const StatementCta = ({
  showDivider,
  divider,
  text,
  callToAction,
}: StatementCtaFragment) => {
  return (
    <section>
      {showDivider && divider && <Divider {...divider} />}
      <div className={`${[styles.statementCta]} container`}>
        <div className={styles.content}>
          <p className={styles.text}>{text}</p>
          <Button {...callToAction} />
        </div>
      </div>
    </section>
  );
};
