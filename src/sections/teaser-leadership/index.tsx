import { Divider } from "@/components/divider/divider";
import { TeaserLeadershipFragment } from "@/graphql/types/generated";
import React from "react";
import { PersonCard } from "./card";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const TeaserLeadership = ({
  showDivider,
  divider,
  people,
}: TeaserLeadershipFragment) => {
  const teaserLeadershipClass = classNames({
    [styles.teaserLeadership]: true,
    container: true,
  });
  return (
    <section>
      {showDivider && divider && <Divider {...divider} />}
      <div className={teaserLeadershipClass}>
        {people.map((person) => (
          <PersonCard key={person.id} {...person} />
        ))}
      </div>
    </section>
  );
};
