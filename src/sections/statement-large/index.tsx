"use client";

import { StatementLargeRecord } from "@/graphql/types/generated";
import React, { useRef } from "react";
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

  const wrapWordsInSpanWithHtml = (text: string) => {
    return text.split(/(\s+)/).map((part, index) => {
      if (/\s+/.test(part)) {
        return <React.Fragment key={index}>{part}</React.Fragment>;
      }
      return (
        <ScrollIntoView
          key={index}
          isInView={isInView}
          delay={0}
          duration={1}
          scrollAmount={100}
        >
          <span>{part}</span>
        </ScrollIntoView>
      );
    });
  };

  const options: HTMLReactParserOptions = {
    replace: (domNode: DOMNode) => {
      if (domNode.type === "text") {
        // Wrap text nodes in <span> tags
        return <>{wrapWordsInSpanWithHtml(domNode.data)}</>;
      } else if (domNode.type === "tag" && domNode.children) {
        // Recursively process child nodes
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

  console.log(parsedContent);

  return (
    <section className={statementLargeClass} ref={ref}>
      <div className={styles.content}>{parsedContent}</div>
      {addCallToAction && cta && (
        <FadeIntoView isInView={isInView} delay={0.3}>
          <Button text={cta.text} slug={cta.slug} isInverted={invertColor} />
        </FadeIntoView>
      )}
    </section>
  );
};
