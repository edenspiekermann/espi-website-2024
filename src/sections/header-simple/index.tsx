import React from "react";
import { HeaderSimpleFragment } from "@/graphql/types/generated";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Button } from "@/components/button/button";
import { ScrollIntoViewText } from "@/components/scroll-into-view-text";

export const HeaderSimple = ({
  featuredText,
  subtext,
  showCta = false,
  showInquiryInfo = false,
  cta,
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
        {subtext && <p className={styles.subtext}>{subtext}</p>}
        {showCta && cta && (
          <Button
            text={cta?.text!}
            url={cta?.url || ""}
            slug={cta?.pageLink?.slug}
            type={cta?.buttonType}
          />
        )}
        {showInquiryInfo && (
          <div className={styles.inquiryInfo}>
            <p>Get in touch</p>
            <div className={styles.inquiryInfoBottom}>
              <p>General enquiries, new business, or press:</p>
              <a href="mailto:info@edenspiekermann.com">
                info@edenspiekermann.com
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
