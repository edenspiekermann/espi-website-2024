import React from "react";
import styles from "./styles.module.scss";
import { CaseContentFragment } from "@/graphql/types/generated";
import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";
import classNames from "classnames";
import { Divider } from "@/components/divider/divider";
import { StructuredText } from "react-datocms";
import { ContentQuote } from "@/components/content-quote";

export const CaseContent = ({
  headlineText,
  bodyText,
  content,
}: CaseContentFragment) => {
  const caseContentClass = classNames({
    [styles.caseContent]: true,
    container: true,
  });

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
      case "ContentQuoteRecord":
        return <ContentQuote {...record} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Divider invertColor={false} />
      <section className={caseContentClass}>
        <div className={styles.left}>
          <div className={styles.text}>
            <p className={styles.headlineText}>{headlineText}</p>
            {bodyText && (
              <div
                dangerouslySetInnerHTML={{ __html: bodyText }}
                className={styles.bodyText}
              />
            )}
          </div>
        </div>
        <div className={styles.right}>
          <StructuredText data={content} renderBlock={renderBlock} />
        </div>
      </section>
    </>
  );
};
