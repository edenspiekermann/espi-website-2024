import { QuoteFragment } from "@/graphql/types/generated";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

export const Quote = ({ quoteText, author, image }: QuoteFragment) => {
  const { src, alt, height, width } = image?.responsiveImage!;

  return (
    <section className={styles.quote}>
      <div className="container">
        <p className={styles.quoteText}>{quoteText}</p>
        <p className={styles.author}>{author}</p>
        <div className={styles.media}>
          <Image src={src} alt={alt ?? ""} height={height} width={width} />
        </div>
      </div>
    </section>
  );
};
