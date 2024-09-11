import { PageDocument } from "@/graphql/types/generated";
import { request } from "@/lib/request";
import { SectionConductor } from "@/sections/conductor";
import { notFound } from "next/navigation";

type PageProps = { params: { slug: string } };

export default async function JobDetailPage({ params }: PageProps) {
  const { page } = await request(PageDocument, {
    slug: "jobs",
  });

  if (!page) {
    notFound();
  }

  const { sections } = page!;

  return (
    <>
      <SectionConductor sections={sections} />
    </>
  );
}
