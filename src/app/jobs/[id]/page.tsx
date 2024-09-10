import { NewsArticleDocument } from "@/graphql/types/generated";
import { SectionConductor } from "../../../sections/conductor";
import { request } from "@/lib/request";

type PageProps = { params: { slug: string } };

export default async function JobDetailPage({ params }: PageProps) {
  return (
    <>
      <SectionConductor sections={[]} />
    </>
  );
}
