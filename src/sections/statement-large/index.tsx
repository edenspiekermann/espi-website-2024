import { StatementLargeRecord } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Button } from "@/components/button/button";
import { ScrollIntoViewText } from "@/components/scroll-into-view-text";
import { FadeIntoView } from "@/components/animation-wrappers/fade-into-view";

export const StatementLarge = ({
  text,
  backgroundColor = "white",
  cta,
  addCallToAction,
}: StatementLargeRecord) => {
  const statementLargeClass = classNames({
    [styles.statementLarge]: true,
    [styles[backgroundColor!]]: !!backgroundColor,
    container: true,
  });

  const animationBackgroundColor = {
    black: "var(--color-espi-black)",
    white: "var(--color-white)",
    grey: "var(--color-extra-light-grey)",
  };

  return (
    <section className={statementLargeClass}>
      <ScrollIntoViewText
        text={text}
        duration={0.8}
        inline
        tag="h2"
        className={styles.content}
        backgroundColor={
          animationBackgroundColor[
            backgroundColor as keyof typeof animationBackgroundColor
          ]
        }
      />
      {addCallToAction && cta && (
        <div className={styles.button}>
          <FadeIntoView duration={0.6} delay={0.75}>
            <Button
              text={cta.text}
              slug={cta.slug}
              isInverted={
                backgroundColor == "black" || backgroundColor == "grey"
              }
            />
          </FadeIntoView>
        </div>
      )}
    </section>
  );
};
