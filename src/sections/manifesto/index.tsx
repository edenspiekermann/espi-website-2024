import { Divider } from "@/components/divider/divider";
import { ManifestoFragment } from "@/graphql/types/generated";
import React from "react";
import { StatementSimple } from "../statement-simple";
import { ManifestoCard } from "@/components/manifesto-card";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Manifesto = ({
  showDivider,
  divider,
  statement,
  cards,
  invertColor,
}: ManifestoFragment) => {
  const manifestoClass = classNames({
    [styles.manifesto]: true,
    [styles.inverted]: invertColor,
  });

  return (
    <div className={manifestoClass}>
      {showDivider && divider && <Divider {...divider} />}
      {statement && <StatementSimple {...statement} />}
      <div className={`${[styles.cards]} container`}>
        {cards?.map((card) => <ManifestoCard {...card} key={card.title} />)}
      </div>
    </div>
  );
};
