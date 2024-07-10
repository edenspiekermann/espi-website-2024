import { CaseStudyDocument } from "@/graphql/types/generated";
import { SectionConductor } from "../../../sections/conductor";
import { request } from "@/lib/request";

type PageProps = { params: { slug: string } };

export default async function CaseStudyPage({ params }: PageProps) {
  const { caseStudy } = await request(CaseStudyDocument, {
    slug: params.slug,
  });
  return (
    <>
      <SectionConductor sections={caseStudy?.sections} />
    </>
  );
}
