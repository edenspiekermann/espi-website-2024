import { IndustryDocument } from "@/graphql/types/generated";
import { SectionConductor } from "../../../sections/conductor";
import { request } from "@/lib/request";
import { notFound } from "next/navigation";

type PageProps = { params: { slug: string } };

export default async function IndustryPage({ params }: PageProps) {
  const { industry } = await request(IndustryDocument, {
    slug: params.slug,
  });

  if (!industry) {
    notFound();
  }

  return (
    <>
      <SectionConductor sections={industry?.sections} />
    </>
  );
}
