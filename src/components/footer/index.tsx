import React from "react";
import { FooterProperties } from "./interfaces";
import styles from "./styles.module.css";

export function Footer({ title, pageLinks, socialLinks }: FooterProperties) {
  return (
    <div className={styles.footer}>
      <div>{title}</div>
      <div>
        <p>Company</p>
        <ul>
          {pageLinks.map((pageLink) => (
            <li key={pageLink.id}>{pageLink.label}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>Follow</p>
        <ul>
          {socialLinks.map((socialLink) => (
            <li key={socialLink.id}>{socialLink.label}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
