import React from "react";
import styles from "./styles.module.scss";
import { ContentTextImageFragment } from "@/graphql/types/generated";
import { SidebarNews } from "@/components/sidebar-news";
import { StructuredText } from "react-datocms";
import classNames from "classnames";
import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";

export const ContentTextImage = ({
  content,
  leftContent,
}: ContentTextImageFragment) => {
  const contentTextImageClass = classNames({
    [styles.contentTextImage]: true,
    container: true,
  });

  const leftContentFilter = (
    content: ContentTextImageFragment["leftContent"],
  ) => {
    switch (content.__typename) {
      case "SidebarNewsRecord":
        return <SidebarNews {...content} />;
      case "SidebarGenericRecord":
        //TODO implement SidebarGenericRecord component
        return <></>;
      default:
        return <></>;
    }
  };

  const renderBlock = ({ record }: { record: any }) => {
    switch (record.__typename) {
      case "CaseStudyContentImageRecord":
        return (
          <div
            key={record.id}
            className={record.halfSize ? styles.halfImage : styles.fullImage}
          >
            <Media {...(record.media as MediaProperties)} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className={contentTextImageClass}>
      <div className={styles.left}>{leftContentFilter(leftContent)}</div>
      <div className={styles.right}>
        <StructuredText data={content} renderBlock={renderBlock} />
      </div>
    </section>
  );
};
