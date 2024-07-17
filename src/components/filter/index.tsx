import { IndustryFragment, ServiceFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";
import { CloseFilter } from "./close-filter";

interface FilterProperties {
  industries: IndustryFragment[] | null;
  services: ServiceFragment[] | null;
  setSelectedFilter: (filter: string | null) => void;
  selectedFilter: string | null;
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
}

export const Filter = ({
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
      setSelectedFilter(null);
    } else {
      setActiveCategory(category);
      setSelectedFilter(null);
    }
  };

  const selectFilter = (filter: string) => {
    if (selectedFilter === filter) {
      setSelectedFilter(null);
    } else {
      setSelectedFilter(filter);
    }
  };

  const toggleAll = () => {
    setActiveCategory(null);
    setSelectedFilter(null);
  };

  return (
    <div className={styles.filter}>
      <div className="container">
        <div className={styles.filterCategories}>
          <button
            className={!activeCategory && !selectedFilter ? styles.active : ""}
            onClick={() => toggleAll()}
          >
            All
          </button>
          <button
            onClick={() => toggleCategory("industries")}
            className={activeCategory === "industries" ? styles.active : ""}
          >
            Industries
          </button>
          <button
            onClick={() => toggleCategory("services")}
            className={activeCategory === "services" ? styles.active : ""}
          >
            Services
          </button>
          {selectedFilter && (
            <div
              className={styles.selected}
              onClick={() => selectFilter(selectedFilter)}
            >
              {selectedFilter}
              <CloseFilter />
            </div>
          )}
        </div>

        {activeCategory === "industries" && !selectedFilter && (
          <div className={styles.filterOptions}>
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
          <div className={styles.filterOptions}>
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
