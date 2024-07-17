"use client";

import {
  CaseStudyGridCardFragment,
  IndustryFragment,
  ServiceFragment,
  TeaserCaseGridFragment,
} from "@/graphql/types/generated";
import React, { useEffect, useState } from "react";
import { GridCard } from "./card";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { RevealButton } from "@/components/button/reveal-button";
import { Filter } from "@/components/filter";

export const TeaserCaseGrid = ({
  caseStudies,
  showFilter,
}: TeaserCaseGridFragment) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [industries, setIndustries] = useState<IndustryFragment[] | null>(null);
  const [services, setServices] = useState<ServiceFragment[] | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    let industryList: IndustryFragment[] = [];
    caseStudies.map((caseStudy) => {
      industryList = [...industryList, ...caseStudy.relatedIndustries];
    });
    const uniqueIndustries = Array.from(
      new Set(industryList.map((a) => a.industry)),
    ).map((industry) => {
      return {
        industry,
        id: industry,
      };
    });

    setIndustries(uniqueIndustries);

    let servicesList: ServiceFragment[] = [];
    caseStudies.map((caseStudy) => {
      servicesList = [...servicesList, ...caseStudy.relatedServices];
    });
    const uniqueServices = Array.from(
      new Set(servicesList.map((a) => a.service)),
    ).map((service) => {
      return {
        service,
        id: service,
      };
    });

    setServices(uniqueServices);
  }, [caseStudies]);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const filteredCaseStudies =
    selectedFilter && activeCategory
      ? caseStudies.filter((caseStudy) =>
          activeCategory === "industries"
            ? caseStudy.relatedIndustries.some(
                ({ industry }) => industry === selectedFilter,
              )
            : caseStudy.relatedServices.some(
                ({ service }) => service === selectedFilter,
              ),
        )
      : caseStudies;

  const teaserCaseGridClass = classNames({
    [styles.teaserCaseGrid]: true,
    container: true,
  });

  return (
    <>
      {showFilter && (
        <Filter
          industries={industries}
          services={services}
          setSelectedFilter={setSelectedFilter}
          selectedFilter={selectedFilter}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      )}
      <section className={teaserCaseGridClass}>
        {filteredCaseStudies.slice(0, visibleCount).map((caseStudy, index) => (
          <GridCard
            key={caseStudy.id}
            {...caseStudy}
            visible={index < visibleCount}
          />
        ))}
        {filteredCaseStudies.length > visibleCount && (
          <div className={styles.button}>
            <RevealButton text="Load more" onClick={handleLoadMore} />
          </div>
        )}
      </section>
    </>
  );
};
