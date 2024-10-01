import React from "react";
import Image from "next/image";
import "./styles.scss";
import { HomepageHeroFragment } from "@/graphql/types/generated";
import { HomepageHeroLogo } from "./homepage-hero-logo";

export const HomePageHero = ({ media }: HomepageHeroFragment) => {
  const { responsiveImage, video } = media;

  return (
    <section className="homepage-hero">
      {video?.mp4Url && (
        <video
          src={video.mp4Url}
          autoPlay
          controls={false}
          loop
          muted
          playsInline
        />
      )}
      {responsiveImage && !video && (
        <Image
          src={responsiveImage.src}
          alt={responsiveImage.alt ?? ""}
          title={responsiveImage.title ?? ""}
          priority
          fill
        />
      )}
      <HomepageHeroLogo />
    </section>
  );
};
