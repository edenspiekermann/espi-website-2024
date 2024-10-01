"use client";

import React, { useRef } from "react";
import { ScrollIntoView } from "../animation-wrappers/scroll-into-view";
import parse, {
  DOMNode,
  domToReact,
  HTMLReactParserOptions,
} from "html-react-parser";
import { useInView } from "framer-motion";

interface ScrollIntoViewTextProps {
  text: string;
  duration?: number;
  backgroundColor?: string;
  inline?: boolean;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
}

export const ScrollIntoViewText = ({
  text,
  duration = 0.2,
  backgroundColor,
  inline = false,
  tag = "span",
  className,
}: ScrollIntoViewTextProps) => {
  let delayIndex = 0;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });

  const wrapWordsInSpanWithHtml = (text: string) => {
    return text.split(/(\s+)/).map((part, index) => {
      if (/\s+/.test(part)) {
        return part;
      }

      const delay = 0.02 * delayIndex;
      delayIndex++;

      return (
        <ScrollIntoView
          key={index}
          isInView={isInView}
          delay={delay}
          duration={duration}
          scrollAmount={100}
          backgroundColor={backgroundColor}
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
        if (domNode.name === "p" && inline) {
          return React.createElement(
            "span",
            { ...domNode.attribs, key: domNode.name },
            domToReact(domNode.children as DOMNode[], options),
          );
        }
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

  return React.createElement(
    tag, // The tag to render (e.g., h2, span, div)
    { ref, className }, // Assign the ref to the dynamic element
    parse(text, options), // Render the parsed text inside the tag
  );
};
