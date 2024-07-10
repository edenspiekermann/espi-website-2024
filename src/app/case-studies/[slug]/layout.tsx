import { MediaProperties } from "@/components/media/interfaces";
import UpdateNavState from "@/components/navigation/update-nav-state";
import { CaseStudyDocument } from "@/graphql/types/generated";
import { request } from "@/lib/request";
import { HeaderCaseStudy } from "@/sections/header-case-study";
import React from "react";

type PageProps = { params: { slug: string }; children: React.ReactNode };

export async function generateMetadata({ params }: PageProps) {
  const capitalizedSlug =
    params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  return {
    title: capitalizedSlug,
  };
}

export default async function CaseStudyLayout({ children, params }: PageProps) {
  const { caseStudy } = await request(CaseStudyDocument, {
    slug: params.slug,
  });
  const { title, subtitle, invertNav, backgroundColor, featuredMedia } =
    caseStudy!;

  return (
    <>
      <UpdateNavState isInverted={invertNav} />
      <HeaderCaseStudy
        title={title}
        subtitle={subtitle}
        backgroundColor={backgroundColor.hex}
        featuredMedia={featuredMedia as MediaProperties}
        inverted={invertNav}
      />
      {children}
    </>
  );
}
