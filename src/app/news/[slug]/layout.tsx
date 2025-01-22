import { request } from "@/lib/request";
import { HeaderNews } from "@/sections/header-news";
import { MediaProperties } from "@/components/media/interfaces";
import { NewsArticleDocument } from "@/graphql/types/generated";
import React from "react";
import { notFound } from "next/navigation";
import UpdateNavState from "@/components/navigation/update-nav-state";

type PageProps = { params: { slug: string }; children: React.ReactNode };

export async function generateMetadata({ params }: PageProps) {
  const capitalizedSlug =
    params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  return {
    title: capitalizedSlug,
  };
}

export default async function NewsArticleLayout({
  children,
  params,
}: PageProps) {
  const { newsArticle } = await request(NewsArticleDocument, {
    slug: params.slug,
  });

  if (!newsArticle) {
    return notFound();
  }

  const { title, typeOfArticle, featuredMedia } = newsArticle!;

  return (
    <>
      <UpdateNavState isInverted={false} isFixed />
      <HeaderNews
        title={title}
        typeOfArticle={typeOfArticle}
        featuredMedia={featuredMedia as MediaProperties}
      />
      {children}
    </>
  );
}
