import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/global.scss";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    template: "%s | Edenspiekermann",
    default: "Edenspiekermann",
  },
  description:
    "We are an independent global creative agency. We solve business problems with design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
