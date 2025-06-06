"use client";

import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import { NewsLetterSignupForm } from "./newsletter-signup";
import { EspiLogo } from "../../assets/icons/espi-logo";
import { Button } from "@/components/button/button";
import { AnimatedFooterTitle } from "./animated-footer-title";
import { FooterProperties } from "./interfaces";
import { useCookieConsent } from "@/context/cookie-consent-context";

export function Footer({
  title,
  loopingTitleText,
  titleCta,
  pageLinks,
  socialLinks,
  legalLinks,
  copyrightText,
}: FooterProperties) {
  const { setIsFormVisible } = useCookieConsent();

  const copyRightTextWithYear = `${copyrightText} ${new Date().getFullYear()}`;

  return (
    <footer className={styles.footer}>
      <div className={`${styles.title} container`}>
        <AnimatedFooterTitle
          title={title}
          loopingTitleText={loopingTitleText}
        />
        <Button
          text={titleCta?.text!}
          url={titleCta?.__typename === "LinkRecord" ? titleCta.url : ""}
          slug={
            titleCta?.__typename === "PageLinkRecord" ? `/${titleCta.slug}` : ""
          }
          isInverted
          replace
        />
      </div>
      <div className={`${styles.linkSection} container`}>
        <div className={styles.links}>
          <p>Company</p>
          <ul>
            {pageLinks.map((pageLink) => (
              <li key={pageLink.id}>
                <Link href={`/${pageLink.slug}`} className={styles.link}>
                  {pageLink.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.links}>
          <p>Follow</p>
          <ul>
            {socialLinks &&
              socialLinks.map((socialLink) => (
                <li key={socialLink.id}>
                  <a
                    className={styles.link}
                    href={socialLink.url}
                    aria-label={`Link to Edenspiekermann's ${socialLink.title}`}
                    target="_blank"
                  >
                    {socialLink.title}
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <NewsLetterSignupForm />
      </div>
      <div className="container">
        <div className={styles.bottom}>
          <Link href={"/"} scroll>
            <EspiLogo />
          </Link>
          <ul>
            {legalLinks &&
              legalLinks.map((legalLink) => (
                <li key={legalLink.id}>
                  <a
                    className={styles.link}
                    href={legalLink.url}
                    aria-label={`Link to Edenspiekermann's ${legalLink.text}`}
                  >
                    {legalLink.text}
                  </a>
                </li>
              ))}
            <li>
              <button
                className={`${styles.link} ${styles.buttonLink}`}
                onClick={() => setIsFormVisible(true)}
              >
                Change cookie settings
              </button>
            </li>
            <li>{copyRightTextWithYear}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
