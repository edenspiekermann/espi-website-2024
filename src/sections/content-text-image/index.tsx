import React from "react";
import styles from "./styles.module.scss";
import { ContentTextImageFragment } from "@/graphql/types/generated";
import { SidebarNews } from "@/components/sidebar-news";
import { StructuredText } from "react-datocms";
import classNames from "classnames";
import { InlineContentImage } from "@/components/inline-content-image";
import { SidebarGeneric } from "@/components/sidebar-generic";
import { ContentQuote } from "@/components/content-quote";
import { Divider } from "@/components/divider/divider";

interface ContentTextImageProps extends ContentTextImageFragment {
  publishedDate?: string;
}

export const ContentTextImage = ({
  content,
  leftContent,
  backgroundColor = "white",
  showDivider,
  divider,
  publishedDate,
}: ContentTextImageProps) => {
  const contentTextImageClass = classNames({
    [styles.contentTextImage]: true,
    [styles[backgroundColor!]]: !!backgroundColor,
  });

  const leftContentFilter = (
    content: ContentTextImageFragment["leftContent"],
  ) => {
    switch (content?.__typename) {
      case "SidebarNewsRecord":
        return (
          <SidebarNews
            {...content}
            greyBackground={backgroundColor === "white"}
            date={publishedDate || ""}
          />
        );
      case "SidebarGenericRecord":
        return <SidebarGeneric {...content} />;
      default:
        return <></>;
    }
  };

  const renderBlock = ({ record }: { record: any }) => {
    switch (record.__typename) {
      case "CaseStudyContentImageRecord":
        return <InlineContentImage {...record} />;
      case "ContentQuoteRecord":
        return <ContentQuote {...record} />;
      default:
        return null;
    }
  };

  return (
    <section className={contentTextImageClass}>
      {showDivider && divider && <Divider {...divider} />}
      <div className="container">
        <div className={styles.left}>{leftContentFilter(leftContent)}</div>
        <div className={styles.right}>
          <StructuredText data={content} renderBlock={renderBlock} />
        </div>
      </div>
    </section>
  );
};
