import { CookieConsentDocument, PageDocument } from "@/graphql/types/generated";
import { SectionConductor } from "../../sections/conductor";
import { request } from "../../lib/request";
import UpdateNavState from "@/components/navigation/update-nav-state";
import { CookieConsentForm } from "@/components/cookie-consent-form";
import { notFound } from "next/navigation";
import Head from "next/head";

type PageProps = { params: { slug: string } };

export async function generateMetadata({ params }: PageProps) {
  const capitalizedSlug = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return {
    title: capitalizedSlug,
  };
}

export default async function Page({ params }: PageProps) {
  const { page } = await request(PageDocument, {
    slug: params.slug,
  });

  if (!page) {
    notFound();
  }

  const { title, sections, invertNavColor } = page!;

  const { cookieConsentForm } = await request(CookieConsentDocument);

  return (
    <>
      <Head>
        <title>{title || "Not Found"}</title>
      </Head>
      <UpdateNavState isInverted={invertNavColor} />
      <SectionConductor
        sections={sections}
        indexToFadeIn={title === "News" ? 2 : 1}
        style={{
          backgroundColor:
            title === "News"
              ? "var(--color-extra-light-grey)"
              : "var(--color-white)",
        }}
      />
      {cookieConsentForm && <CookieConsentForm {...cookieConsentForm} />}
    </>
  );
}
