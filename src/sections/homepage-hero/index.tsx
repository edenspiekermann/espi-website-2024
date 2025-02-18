import React from "react";
import { HomepageHeroFragment } from "@/graphql/types/generated";
import { HomepageHeroLogo } from "./homepage-hero-logo";
import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";
import styles from "./styles.module.scss";
import classNames from "classnames";
export const HomePageHero = ({ media }: HomepageHeroFragment) => {
  const logoContainerClass = classNames({
    [styles.logo]: true,
  });
  return (
    <section className={styles.homepageHero}>
      <Media {...(media as MediaProperties)} />
      <div className={logoContainerClass}>
        <HomepageHeroLogo />
      </div>
    </section>
  );
};
