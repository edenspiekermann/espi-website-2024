import { IndustryDocument } from "@/graphql/types/generated";
import { request } from "@/lib/request";
import React from "react";
import { HeaderWithTag } from "@/sections/header-with-tag";
import { notFound } from "next/navigation";

type PageProps = { params: { slug: string }; children: React.ReactNode };

export async function generateMetadata({ params }: PageProps) {
  const capitalizedSlug = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return {
    title: capitalizedSlug,
  };
}

export default async function IndustryLayout({ children, params }: PageProps) {
  const { industry } = await request(IndustryDocument, {
    slug: params.slug,
  });

  if (!industry) {
    notFound();
  }

  return (
    <>
      <HeaderWithTag
        __typename={"HeaderWithTagRecord"}
        id={industry?.id!}
        title={industry?.title!}
        industry={{
          industry: industry?.industry!,
        }}
      />
      {children}
    </>
  );
}
