import { Button } from "@/components/button/button";
import { PageDocument } from "@/graphql/types/generated";
import { request } from "@/lib/request";
import { SectionConductor } from "@/sections/conductor";

export async function generateMetadata() {
  return {
    title: "Not Found",
  };
}

export default async function NotFound() {
  const { page } = await request(PageDocument, {
    slug: "not-found",
  });

  const { sections } = page!;

  return (
    <>
      <div style={{ height: 48 }} />
      <SectionConductor sections={sections} />
    </>
  );
}
