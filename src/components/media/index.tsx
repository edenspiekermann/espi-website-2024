import React from "react";
import { MediaProperties } from "./interfaces";
import Image from "next/image";

export const Media = ({ responsiveImage, video }: MediaProperties) => {
  if (responsiveImage?.src) {
    return (
      <Image src={responsiveImage?.src} alt={responsiveImage?.alt || ""} fill />
    );
  }
  if (video?.mp4Url) {
    return (
      <video autoPlay muted playsInline loop>
        <source src={video?.mp4Url} type="video/mp4" />
      </video>
    );
  }
  return <></>;
};
