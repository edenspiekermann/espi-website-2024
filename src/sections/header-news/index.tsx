import React from "react";
import { HeaderNewsProperties } from "./interfaces";
import { Tag } from "@/components/tag";
import { Media } from "@/components/media";
import { MediaProperties } from "@/components/media/interfaces";

export const HeaderNews = ({
  title,
  typeOfArticle,
  featuredMedia,
}: HeaderNewsProperties) => {
  return (
    <section>
      <div>
        <Tag text={typeOfArticle} />
        <h1>{title}</h1>
      </div>
      {featuredMedia && (
        <div>
          <Media {...(featuredMedia as MediaProperties)} />
        </div>
      )}
    </section>
  );
};
