import { StatementSimpleFragment } from "@/graphql/types/generated";
import React from "react";
import "./styles.scss";

export const StatementSimple = ({ text }: StatementSimpleFragment) => {
  return (
    <div className="statement-simple container">
      <div
        className="statement-simple__content"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};
