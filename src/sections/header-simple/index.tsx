import React from "react";
import { HeaderSimpleFragment } from "@/graphql/types/generated";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Button } from "@/components/button/button";
import { ScrollIntoViewText } from "@/components/scroll-into-view-text";
import { FadeIntoView } from "@/components/animation-wrappers/fade-into-view";

export const HeaderSimple = ({
  featuredText,
  subtext,
  showCta = false,
  showInquiryInfo = false,
  cta,
  inquiryInfo,
}: HeaderSimpleFragment) => {
  const headerSimpleClass = classNames({
    [styles.headerSimple]: true,
  });

  return (
    <section className={headerSimpleClass}>
      <div className="container">
        <ScrollIntoViewText
          text={featuredText}
          duration={0.8}
          inline
          tag="h2"
          className={styles.featuredText}
        />
      </div>

      <FadeIntoView duration={0.5} delay={0.8}>
        <div className="container">
          {subtext && (
            <div className={styles.subtext}>
              <p>{subtext}</p>
            </div>
          )}
          {showCta && cta && (
            <Button
              text={cta?.text!}
              url={cta?.url || ""}
              slug={cta?.pageLink?.slug}
              type={cta?.buttonType}
            />
          )}
        </div>
      </FadeIntoView>
      {showInquiryInfo && inquiryInfo && (
        <div className={styles.inquiryInfo}>
          <FadeIntoView duration={0.6} delay={0.8}>
            <p className={styles.inquiryTitle}>{inquiryInfo.title}</p>
            {inquiryInfo.subtext && (
              <div
                className={styles.inquiryInfoBottom}
                dangerouslySetInnerHTML={{ __html: inquiryInfo.subtext }}
              />
            )}
          </FadeIntoView>
        </div>
      )}
    </section>
  );
};
