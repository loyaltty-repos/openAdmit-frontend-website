import { CaseStudies } from "@/components/sanity/case-studies";
import { getCaseStudies, getCaseStudyCategories } from "@/lib/actions";
import { CaseStudiesHero } from "./_components/hero";

export const revalidate = 7200;

export default async function Page() {
  const { data: caseStudies } = await getCaseStudies();
  const { data: categories } = await getCaseStudyCategories();

  return (
    <>
      <CaseStudiesHero />
      <CaseStudies caseStudies={caseStudies} categories={categories} />
    </>
  );
}
