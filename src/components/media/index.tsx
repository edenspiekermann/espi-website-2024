import React from "react";
import { MediaProperties } from "./interfaces";
import Image from "next/image";
import { Video } from "./video";

export const Media = ({ responsiveImage, video }: MediaProperties) => {
  if (responsiveImage?.src) {
    return (
      <Image src={responsiveImage?.src} alt={responsiveImage?.alt || ""} fill />
    );
  }
  if (video?.mp4Url) {
    return <Video video={video} />;
  }
  return <></>;
};
