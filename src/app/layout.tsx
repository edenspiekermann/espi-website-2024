import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/global.scss";
import { NavigationDocument } from "@/graphql/types/generated";
import { request } from "@/lib/request";
import { NavigationProvider } from "@/context/navigation-context";
import { NavigationWrapper } from "@/components/navigation/navigation-wrapper";

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
  const { links, alternativeLogoText, showLogo, socialLinks } = navigation!;

  return (
    <html lang="en" className={inter.className}>
      <body>
        <NavigationProvider>
          <NavigationWrapper
            links={links}
            alternativeLogoText={alternativeLogoText || "Let's Innovate"}
            showLogo={showLogo}
            socialLinks={socialLinks}
          >
            {children}
          </NavigationWrapper>
        </NavigationProvider>
      </body>
    </html>
  );
}
