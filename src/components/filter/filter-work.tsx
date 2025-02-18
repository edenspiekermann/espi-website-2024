import { IndustryFragment, ServiceFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";
import { CloseFilter } from "./close-filter";
import classNames from "classnames";

interface FilterProperties {
  industries: IndustryFragment[] | null;
  services: ServiceFragment[] | null;
  setSelectedFilter: (filter: string | null) => void;
  selectedFilter: string | null;
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
}

export const FilterWork = ({
  industries,
  services,
  selectedFilter,
  setSelectedFilter,
  activeCategory,
  setActiveCategory,
}: FilterProperties) => {
  const toggleCategory = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      if (selectedFilter) {
        setSelectedFilter(null);
      }
      setActiveCategory(category);
    }
  };

  const selectFilter = (filter: string) => {
    if (selectedFilter === filter) {
      setSelectedFilter(null);
    } else {
      setSelectedFilter(filter);
    }
  };

  const filterOptionsClass = classNames({
    [styles.filterOptions]: true,
    [styles.activeFilter]: activeCategory !== null,
  });

  return (
    <div className={styles.filter}>
      <div className="container">
        <div className={styles.filterCategories}>
          <div className={styles.industryButton}>
            {selectedFilter && activeCategory === "industries" ? (
              <div
                className={styles.selected}
                onClick={() => {
                  setSelectedFilter(null);
                }}
              >
                {selectedFilter}
                <CloseFilter />
              </div>
            ) : (
              <button
                onClick={() => toggleCategory("industries")}
                className={activeCategory === "industries" ? styles.active : ""}
              >
                Industries
              </button>
            )}
          </div>
          <div className={styles.serviceButton}>
            {selectedFilter && activeCategory === "services" ? (
              <div
                className={styles.selected}
                onClick={() => {
                  setSelectedFilter(null);
                }}
              >
                {selectedFilter}
                <CloseFilter />
              </div>
            ) : (
              <button
                onClick={() => toggleCategory("services")}
                className={activeCategory === "services" ? styles.active : ""}
              >
                Services
              </button>
            )}
          </div>
        </div>

        {activeCategory === "industries" && !selectedFilter && (
          <div className={filterOptionsClass}>
            {industries?.map(({ industry, id }) => (
              <button
                key={id}
                className={selectedFilter === industry ? styles.active : ""}
                onClick={() => selectFilter(industry)}
              >
                {industry}
              </button>
            ))}
          </div>
        )}

        {activeCategory === "services" && !selectedFilter && (
          <div className={filterOptionsClass}>
            {services?.map(({ service, id }) => (
              <button
                key={id}
                className={selectedFilter === service ? styles.active : ""}
                onClick={() => selectFilter(service)}
              >
                {service}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
