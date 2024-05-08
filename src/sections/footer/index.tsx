import React from "react";
import styles from "./styles.module.css";
import { request } from "../../lib/request";
import { FooterDocument } from "@/graphql/types/generated";

export async function Footer() {
  const { footer } = await request(FooterDocument);

  const { title, pageLinks, socialLinks } = footer!;

  return (
    <div className={styles.footer}>
      <div>{title}</div>
      <div>
        <p>Company</p>
        <ul>
          {pageLinks.map((pageLink) => (
            <li key={pageLink.id}>{pageLink.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>Follow</p>
        <ul>
          {socialLinks.map((socialLink) => (
            <li key={socialLink.id}>{socialLink.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
