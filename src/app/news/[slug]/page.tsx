import { NewsArticleDocument } from "@/graphql/types/generated";
import { SectionConductor } from "../../../sections/conductor";
import { request } from "@/lib/request";

type PageProps = { params: { slug: string } };

export default async function NewsArticlePage({ params }: PageProps) {
  const { newsArticle } = await request(NewsArticleDocument, {
    slug: params.slug,
  });
  return (
    <>
      <SectionConductor
        sections={newsArticle?.sections}
        publishedDate={newsArticle?.publishedDate || ""}
      />
    </>
  );
}
