import React from "react";
import styles from "./styles.module.scss";
import { ServiceCardsFragment } from "@/graphql/types/generated";
import { Divider } from "@/components/divider/divider";
import { StatementSimple } from "../statement-simple";
import { ServiceCard } from "@/components/service-card";
import classNames from "classnames";

export const ServiceCards = ({
  showDivider,
  divider,
  statement,
  serviceCards,
  invertColor,
}: ServiceCardsFragment) => {
  const serviceCardsClass = classNames({
    [styles.serviceCards]: true,
    [styles.inverted]: invertColor,
  });
  return (
    <div className={serviceCardsClass}>
      {showDivider && divider && (
        <Divider text={divider.title} invertColor={invertColor} />
      )}
      {statement && (
        <StatementSimple {...statement} invertColor={invertColor} />
      )}
      <div className={`${[styles.cards]} container`}>
        {serviceCards &&
          serviceCards.map((serviceCard) => (
            <ServiceCard key={serviceCard.id} {...serviceCard} />
          ))}
      </div>
    </div>
  );
};
