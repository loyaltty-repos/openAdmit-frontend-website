import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { QueryParams } from "next-sanity";
import { CaseStudy } from "@/components/sanity/case-study";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { CASE_STUDIES_QUERY, CASE_STUDY_QUERY } from "@/sanity/lib/queries";

export async function generateMetadata({
  params,
}: {
  params: Promise<QueryParams>;
}): Promise<Metadata> {
  const caseStudy = await client.fetch(CASE_STUDY_QUERY, await params);

  if (!caseStudy)
    return {
      title: "Case Study Not Found",
      description: "The requested case study could not be found",
    };

  return {
    title: caseStudy.title,
    keywords: caseStudy.category && [caseStudy.category],
    openGraph: {
      type: "website",
      url: "https://openadmits.com",
      title: caseStudy.title ?? undefined,
      images: caseStudy.mainImage?.asset?._ref && [
        {
          url: urlFor(caseStudy.mainImage.asset._ref)
            .width(1200)
            .height(630)
            .url(),
        },
      ],
    },
  };
}

export const revalidate = 7200;

export async function generateStaticParams() {
  const caseStudies = await client.fetch(CASE_STUDIES_QUERY);

  return caseStudies.map((caseStudy) => ({
    slug: caseStudy?.slug?.current,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<QueryParams>;
}) {
  const { data: caseStudy } = await sanityFetch({
    query: CASE_STUDY_QUERY,
    params: await params,
  });
  if (!caseStudy) {
    return notFound();
  }
  return <CaseStudy caseStudy={caseStudy} />;
}
