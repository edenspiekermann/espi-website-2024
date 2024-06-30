import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import { NewsLetterSignupForm } from "./newsletter-signup";
import { EspiLogo } from "../../../public/espi-logo";
import { FooterProperties } from "./interfaces";

export function Footer({
  title,
  pageLinks,
  socialLinks,
  legalLinks,
  copyrightText,
}: FooterProperties) {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.title} container`}>{title}</div>
      <div className={`${styles.linkSection} container`}>
        <div className={styles.links}>
          <p>Company</p>
          <ul>
            {pageLinks.map((pageLink) => (
              <li key={pageLink.id}>
                <Link href={pageLink.slug} className={styles.link}>
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
          <EspiLogo />
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
            <li>{copyrightText}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
