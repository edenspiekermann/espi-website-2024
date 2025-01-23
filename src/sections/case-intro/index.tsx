"use client";

import { Tag } from "@/components/tag";
import { CaseIntroFragment } from "@/graphql/types/generated";
import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { CaseStudyContext } from "@/context/case-study-context";
import Link from "next/link";
import { Button } from "@/components/button/button";

export const CaseIntro = ({
  text,
  problemText,
  solutionText,
  callToAction,
}: CaseIntroFragment) => {
  const { caseStudyState } = useContext(CaseStudyContext);
  const { relatedIndustries, relatedServices } = caseStudyState;
  const tags = [...relatedIndustries, ...relatedServices];

  const getTagFilter = (tag: string) => {
    return {
      tag: tag.replace(/\s/g, "-"),
    };
  };

  return (
    <section className={styles.caseIntro}>
      <div className="container">
        <div className={styles.left}>
          <div className={styles.tagContainer}>
            {tags?.map((tag) => (
              <Link
                key={tag}
                href={{
                  pathname: "/work",
                  query: {
                    filter: relatedIndustries.includes(tag)
                      ? "industries"
                      : relatedServices.includes(tag)
                        ? "services"
                        : null,
                    ...getTagFilter(tag),
                  },
                }}
                className={styles.tag}
              >
                <Tag key={tag} text={tag} isLargeTag />
              </Link>
            ))}
          </div>
          {callToAction && callToAction.url && (
            <Button
              text={callToAction.text}
              url={callToAction.url}
              type={callToAction.buttonType}
            />
          )}
        </div>
        <div className={styles.right}>
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: text }}
          />
          <div className={styles.subContent}>
            <p className={styles.subtitle}>Problem</p>
            <p className={styles.subtext}>{problemText}</p>
          </div>
          <div className={styles.subContent}>
            <p className={styles.subtitle}>Solution</p>
            <p className={styles.subtext}>{solutionText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
