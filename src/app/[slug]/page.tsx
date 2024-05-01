import Head from "next/head.js";
import { GetStaticProps } from "next";
import { PageDocument } from "@/graphql/types/generated";
import { fetchContent } from "../../graphql/fetch-content";
import { SectionConductor } from "../../sections/conductor";
import { request } from "../../lib/request";

type PageProps = { params: { slug: string } };

export default async function Page({ params }: PageProps) {
  const { page } = await request(PageDocument, {
    slug: params.slug,
  });

  const { title, sections } = page;

  return (
    <>
      <Head>
        <title>{title} | Edenspiekermann</title>
      </Head>
      <SectionConductor sections={sections} />
    </>
  );
}
