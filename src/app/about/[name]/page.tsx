import { PersonDocument } from "@/graphql/types/generated";
import { SectionConductor } from "../../../sections/conductor";
import { request } from "@/lib/request";

type PageProps = { params: { name: string } };

export default async function PersonPage({ params }: PageProps) {
  const { person } = await request(PersonDocument, {
    slug: params.name,
  });
  const { sections } = person!;
  return (
    <>
      <SectionConductor sections={sections} />
    </>
  );
}
