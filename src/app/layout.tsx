import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/global.scss";
import {
  FavIconDocument,
  FooterDocument,
  LinkRecord,
  NavigationDocument,
  NavigationRecord,
  PageRecord,
  SocialLinkRecord,
  TextRecord,
} from "@/graphql/types/generated";
import { request } from "@/lib/request";
import { NavigationProvider } from "@/context/navigation-context";
import { NavigationWrapper } from "@/components/navigation/navigation-wrapper";
import { Footer } from "@/sections/footer/footer";
import { CookieConsentProvider } from "@/context/cookie-consent-context";
import { ScrollToTopProvider } from "@/components/scroll-to-top";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    template: "%s | Edenspiekermann",
    default: "Edenspiekermann",
  },
  description:
    "We are an independent global creative agency. We solve business problems with design.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { navigation } = await request(NavigationDocument);
  const { links, alternativeLogoText, showLogo, socialLinks, cta } =
    navigation!;

  const { footer } = await request(FooterDocument);
  const { _site } = await request(FavIconDocument);

  return (
    <html lang="en" className={inter.className}>
      <link
        rel="icon"
        href={_site.favicon?.url ?? "/favicon.ico"}
        sizes="any"
      />
      <body>
        <ScrollToTopProvider>
          <CookieConsentProvider>
            <NavigationProvider>
              <NavigationWrapper
                links={links}
                alternativeLogoText={alternativeLogoText || "Let's Innovate"}
                showLogo={showLogo}
                socialLinks={socialLinks}
                cta={cta as NavigationRecord["cta"]}
              >
                {children}
                <Footer
                  title={footer?.title || "Let's Innovate"}
                  loopingTitleText={footer?.loopingTitleText as TextRecord[]}
                  titleCta={footer?.titleCta as LinkRecord}
                  pageLinks={footer?.pageLinks as PageRecord[]}
                  socialLinks={footer?.socialLinks as SocialLinkRecord[]}
                  legalLinks={footer?.legalLinks as LinkRecord[]}
                  copyrightText={footer?.copyrightText || ""}
                />
              </NavigationWrapper>
            </NavigationProvider>
          </CookieConsentProvider>
        </ScrollToTopProvider>
      </body>
    </html>
  );
}
