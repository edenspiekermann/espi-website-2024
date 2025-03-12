import React from "react";
import { MediaProperties } from "./interfaces";
import Image from "next/image";
import { Video } from "./video";

export const Media = ({
  responsiveImage,
  video,
  priority = false,
  sizes,
}: MediaProperties) => {
  if (responsiveImage?.src) {
    return (
      <Image
        src={responsiveImage?.src}
        alt={responsiveImage?.alt || ""}
        fill
        priority={priority}
        sizes={sizes || "(max-width: 768px) 100vw, 50vw"}
      />
    );
  }
  if (video?.mp4Url) {
    return <Video video={video} />;
  }
  return <></>;
};
