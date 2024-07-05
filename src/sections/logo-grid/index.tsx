"use client";

import { LogoGridFragment } from "@/graphql/types/generated";
import classNames from "classnames";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { Divider } from "@/components/divider/divider";

export const LogoGrid = ({
  logos,
  invertColor = false,
  divider,
}: LogoGridFragment) => {
  const logoGridClass = classNames({
    [styles.logoGrid]: true,
    [styles.inverted]: invertColor,
  });

  const [svgs, setSvgs] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(true);

  const fetchSvg = async (url: string, id: string) => {
    try {
      const response = await fetch(url);
      const svgText = await response.text();
      setSvgs((prevSvgs) => ({ ...prevSvgs, [id]: svgText }));
    } catch (error) {
      console.error("Error fetching SVG:", error);
    }
  };

  useEffect(() => {
    if (logos) {
      const fetchAllSvgs = async () => {
        const fetchPromises = logos.map((logo) =>
          fetchSvg(logo.logoImage.url, logo.id),
        );
        await Promise.all(fetchPromises);
        setLoading(false);
      };

      fetchAllSvgs();
    }
  }, [logos]);

  return (
    <div className={logoGridClass}>
      <Divider text={divider?.text} invertColor={invertColor} />
      <div className="container">
        <ul className={styles.logosContainer}>
          {logos &&
            !loading &&
            logos.map((logo) => (
              <li key={logo.id} className={styles.logo}>
                {svgs[logo.id] && (
                  <div
                    className={styles.svg}
                    dangerouslySetInnerHTML={{ __html: svgs[logo.id] }}
                  />
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
