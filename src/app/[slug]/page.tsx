import Head from "next/head.js";

import { fetchContent } from "../../graphql/fetch-content";
import { allPagesQuery } from "../../graphql/all-pages.query.js";
import { pageQuery } from "../../graphql/page.query.js";
import { SectionConductor } from "../../sections/conductor";

export async function generateStaticParams() {
  const { data } = await fetchContent({ query: allPagesQuery });

  return data.allPages;
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
      <Head>
        <title>{title} | Edenspiekermann</title>
      </Head>
      <SectionConductor sections={sections} />
    </>
  );
}
