import React from "react";
import { ScrollIntoView } from "../animation-wrappers/scroll-into-view";
import parse, {
  DOMNode,
  domToReact,
  HTMLReactParserOptions,
} from "html-react-parser";

interface ScrollIntoViewTextProps {
  text: string;
  isInView?: boolean;
  duration?: number;
  backgroundColor?: string;
}

export const ScrollIntoViewText = ({
  text,
  isInView,
  duration = 0.2,
  backgroundColor,
}: ScrollIntoViewTextProps) => {
  let delayIndex = 0;

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

  return parse(text, options);
};
