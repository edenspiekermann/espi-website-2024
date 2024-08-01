"use client";

import { StatementLargeRecord } from "@/graphql/types/generated";
import React, { useRef, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Button } from "@/components/button/button";
import { useInView } from "framer-motion";
import { ScrollIntoView } from "@/components/animation-wrappers/scroll-into-view";
import { FadeIntoView } from "@/components/animation-wrappers/fade-into-view";
import parse, {
  DOMNode,
  domToReact,
  HTMLReactParserOptions,
} from "html-react-parser";

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

  let delayIndex = 0;

  const wrapWordsInSpanWithHtml = (text: string) => {
    return text.split(/(\s+)/).map((part, index) => {
      if (/\s+/.test(part)) {
        return part;
      }

      const delay = 0.05 * delayIndex;
      delayIndex++;

      return (
        <ScrollIntoView
          key={index}
          isInView={isInView}
          delay={delay}
          duration={0.3}
          scrollAmount={100}
        >
          <span>{part}</span>
        </ScrollIntoView>
      );
    });
  };

  const options: HTMLReactParserOptions = {
    replace: (domNode: DOMNode) => {
      if (domNode.type === "text" && domNode.data !== "\n") {
        return <>{wrapWordsInSpanWithHtml(domNode.data)}</>;
      } else if (domNode.type === "tag" && domNode.children) {
        return React.createElement(
          domNode.name,
          { ...domNode.attribs, key: domNode.name },
          domToReact(domNode.children as DOMNode[], options),
        );
      } else {
        return domNode;
      }
    },
  };

  const parsedContent = parse(text, options);

  return (
    <section className={statementLargeClass} ref={ref}>
      <div className={styles.content}>{parsedContent}</div>
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
