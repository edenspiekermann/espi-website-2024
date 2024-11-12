import React from "react";
import { HomepageHeroFragment } from "@/graphql/types/generated";
import { HomepageHeroLogo } from "./homepage-hero-logo";
import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";
import styles from "./styles.module.scss";

export const HomePageHero = ({ media }: HomepageHeroFragment) => {
  return (
    <section className={styles.homepageHero}>
      <Media {...(media as MediaProperties)} />
      <div className={styles.logo}>
        <HomepageHeroLogo />
      </div>
    </section>
  );
};
