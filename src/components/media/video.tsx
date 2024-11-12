"use client";

import React, { useState, useRef } from "react";
import { VideoPause } from "./video-pause";
import { VideoPlay } from "./video-play";
import styles from "./styles.module.scss";
import { MediaProperties } from "./interfaces";

export const Video = ({ video }: { video: MediaProperties["video"] }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    videoRef.current?.pause();
  };

  return (
    <>
      <video ref={videoRef} autoPlay muted playsInline loop>
        <source src={video?.mp4Url} type="video/mp4" />
      </video>
      <div className={styles.controls}>
        {isPlaying ? (
          <div
            onClick={handlePause}
            className={styles.control}
            role="button"
            tabIndex={0}
            aria-label="Pause video"
            onKeyPress={(e) => e.key === "Enter" && handlePause()}
          >
            <VideoPause />
          </div>
        ) : (
          <div
            onClick={handlePlay}
            className={styles.control}
            role="button"
            tabIndex={0}
            aria-label="Play video"
            onKeyPress={(e) => e.key === "Enter" && handlePlay()}
          >
            <VideoPlay />
          </div>
        )}
      </div>
    </>
  );
};
