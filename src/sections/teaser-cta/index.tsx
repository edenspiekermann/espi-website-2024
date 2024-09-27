import { Button } from "@/components/button/button";
import { TeaserCtaFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";
import { MediaProperties } from "@/components/media/interfaces";
import { Media } from "@/components/media";
import Link from "next/link";

export const TeaserCta = ({
  text,
  cta,
  industryInsight,
}: TeaserCtaFragment) => {
  return (
    <section className={styles.teaserCta}>
      <div className="container">
        <div className={styles.left}>
          <p className={styles.text}>{text}</p>
          {cta && (
            <Button
              {...cta}
              text={cta.text}
              url={cta?.url || ""}
              type={cta.buttonType}
              slug={cta.pageLink?.slug}
            />
          )}
        </div>
        <Link href={industryInsight.slug} className={styles.right}>
          <div className={styles.insightMedia}>
            <Media {...(industryInsight.teaserMedia as MediaProperties)} />
          </div>
          <div className={styles.insightContent}>
            <h4 className={styles.insightTitle}>
              {industryInsight.teaserText}
            </h4>
            <p className={styles.insightTag}>Industry Insight</p>
          </div>
        </Link>
      </div>
    </section>
  );
};
