import { MediaProperties } from "@/components/media/interfaces";
import UpdateNavState from "@/components/navigation/update-nav-state";
import { PersonDocument } from "@/graphql/types/generated";
import { request } from "@/lib/request";
import { HeaderCaseStudy } from "@/sections/header-case-study";
import React from "react";

type PageProps = { params: { name: string }; children: React.ReactNode };

export async function generateMetadata({ params }: PageProps) {
  const capitalizedSlug = params.name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return {
    title: capitalizedSlug,
  };
}

export default async function PersonLayout({ children, params }: PageProps) {
  const { person } = await request(PersonDocument, {
    slug: params.name,
  });

  const { name, headerImage, cardImage, role } = person!;

  return (
    <>
      <UpdateNavState isInverted={false} isFixed />
      <HeaderCaseStudy
        backgroundColor="var(--color-white)"
        title={name}
        subtitle={role}
        featuredMedia={(headerImage || cardImage) as MediaProperties}
        inverted={false}
      />
      {children}
    </>
  );
}
