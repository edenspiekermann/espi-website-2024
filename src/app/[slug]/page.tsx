import { PageDocument } from "@/graphql/types/generated";
import { SectionConductor } from "../../sections/conductor";
import { request } from "../../lib/request";
import UpdateNavState from "@/components/navigation/update-nav-state";

type PageProps = { params: { slug: string } };

export async function generateMetadata({ params }: PageProps) {
  const capitalizedSlug =
    params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  return {
    title: capitalizedSlug,
  };
}

export default async function Page({ params }: PageProps) {
  const { page } = await request(PageDocument, {
    slug: params.slug,
  });

  const { title, sections, invertNavColor } = page!;

  return (
    <>
      <UpdateNavState isInverted={invertNavColor} />
      <SectionConductor sections={sections} />
    </>
  );
}
