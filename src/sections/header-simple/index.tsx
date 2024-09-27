"use client";

import React, { useEffect, useRef, useState } from "react";
import { HeaderSimpleFragment } from "@/graphql/types/generated";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Button } from "@/components/button/button";
import { ScrollIntoViewText } from "@/components/scroll-into-view-text";
import { useInView } from "framer-motion";

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
  const ref = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (ref.current) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <section className={headerSimpleClass}>
      <div className="container">
        <h2 className={styles.featuredText} ref={ref}>
          <ScrollIntoViewText
            text={featuredText}
            isInView={isLoaded}
            duration={0.8}
            inline
          />
        </h2>
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
