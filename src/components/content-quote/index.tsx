import { ContentQuoteFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";

export const ContentQuote = ({ quote, author }: ContentQuoteFragment) => {
  return (
    <div className={styles.contentQuote}>
      <p className={styles.quote}>{quote}</p>
      <p className={styles.author}>{author}</p>
    </div>
  );
};
