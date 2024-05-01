import { fetchContent } from "../../data/fetch-content";
import { allPagesQuery } from "../../data/all-pages.query.js";
import { pageQuery } from "../../data/page.query.js";
import { SectionConductor } from "../../sections/conductor";

export async function generateStaticParams() {
  const { data } = await fetchContent({ query: allPagesQuery });

  return data.allPages;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const capitalizedSlug =
    params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  return {
    title: capitalizedSlug,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { data } = await fetchContent({
    query: pageQuery,
    variables: { slug: params.slug },
    preview: false,
  });

  const { sections, title } = data.page;

  return (
    <>
      <SectionConductor sections={sections} />
    </>
  );
}
