import { Footer } from "@/components/footer";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer title="Let's Innovate" pageLinks={[]} socialLinks={[]} />
    </>
  );
}
