import React from "react";
import { HeaderSimpleFragment } from "@/graphql/types/generated";
import styles from "./styles.module.scss";
import { ScrollButton } from "@/components/button/scroll-button";
import classNames from "classnames";

export const HeaderSimple = ({
  featuredText,
  subtext,
  showCta = false,
  showInquiryInfo = false,
}: HeaderSimpleFragment) => {
  const headerSimpleClass = classNames({
    [styles.headerSimple]: true,
  });
  return (
    <div className={headerSimpleClass}>
      <div className="container">
        <h2
          dangerouslySetInnerHTML={{ __html: featuredText }}
          className={styles.featuredText}
        />
        {subtext && <p className={styles.subtext}>{subtext}</p>}
        {/* TODO - Implement scroll behavior on button */}
        {showCta && <ScrollButton text={"See our openings"} />}
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
    </div>
  );
};
