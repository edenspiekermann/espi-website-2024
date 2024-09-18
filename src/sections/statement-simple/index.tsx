import { StatementSimpleFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Divider } from "@/components/divider/divider";

export const StatementSimple = ({
  text,
  invertColor = false,
  textSize,
  showDivider,
  divider,
}: StatementSimpleFragment) => {
  const statementSimpleClass = classNames({
    [styles.statementSimple]: true,
    [styles.inverted]: invertColor,
    [styles[`${textSize}`]]: !!textSize,
  });

  return (
    <section className={statementSimpleClass}>
      {showDivider && divider && <Divider {...divider} />}
      <div className="container">
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </section>
  );
};
