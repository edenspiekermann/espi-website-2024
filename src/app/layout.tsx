import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/global.scss";
import { Navigation } from "@/components/navigation";
import { NavigationDocument } from "@/graphql/types/generated";
import { request } from "@/lib/request";

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
  const { links } = navigation!;

  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navigation links={links} />
        {children}
      </body>
    </html>
  );
}
