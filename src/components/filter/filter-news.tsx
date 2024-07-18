import React from "react";
import styles from "./styles.module.scss";
import { CloseFilter } from "./close-filter";
import classNames from "classnames";

interface FilterProperties {
  typesOfNews: string[];
  setSelectedFilter: (filter: string | null) => void;
  selectedFilter: string | null;
}

export const FilterNews = ({
  typesOfNews,
  selectedFilter,
  setSelectedFilter,
}: FilterProperties) => {
  const selectFilter = (filter: string) => {
    if (selectedFilter === filter) {
      setSelectedFilter(null);
    } else {
      setSelectedFilter(filter);
    }
  };

  const toggleAll = () => {
    setSelectedFilter(null);
  };

  const filterNewsClass = classNames({
    [styles.filter]: true,
    [styles.newsFilter]: true,
  });

  return (
    <div className={filterNewsClass}>
      <div className="container">
        <div className={styles.filterCategories}>
          <button
            className={!selectedFilter ? styles.active : ""}
            onClick={() => toggleAll()}
          >
            All
          </button>

          {typesOfNews?.map((type, index) => (
            <button
              key={`${type}-${index}`}
              className={selectedFilter === type ? styles.active : ""}
              onClick={() => selectFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
