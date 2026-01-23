import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getFeaturedCaseStudies, getRecentCaseStudies } from "@/lib/actions";
import { FinalCtaSection } from "../_components/sections/final-cta";
import { StatsSection } from "../_components/sections/stats";
import { SuccessStoriesSection } from "../_components/sections/success-stories";
import { FeaturedCaseStudiesSection } from "./_components/featured-case-studies-section";
import { FeaturedTestimonialSection } from "./_components/featured-testimonial-section";
import { RecentCaseStudiesSection } from "./_components/recent-case-studies-section";

export default async function SuccessStoriesPage() {
  const { data: recentCaseStudies } = await getRecentCaseStudies();
  const { data: featuredCaseStudies } = await getFeaturedCaseStudies();

  const testimonial1 = {
    name: "Aditi",
    quote:
      "Kellogg Class of 2027!! It’s M7!!! Low work experience shouldn’t hold you back!",
    background:
      "An Indian software engineer with 2.5 years of work experience, Aditi aimed for top U.S. MBA programs (M7). Many consultants advised her to wait another year to strengthen her profile due to limited experience.",
    approach:
      "Instead of focusing on perceived weaknesses, we identified and showcased Aditi’s unique strengths, leadership potential, and early career impact. Our strategy highlighted her clarity of goals and strong fit with Kellogg’s collaborative culture resulting in an admit to an M7 program despite having less experience than most applicants.",
    caption: "Aditi | Kellogg (M7)",
    image: "/images/success-stories/featured/aditi.jpg",
    schools: ["/images/success-stories/featured/aditi-school.png"],
    caseStudyUrl: "",
  };

  const testimonial2 = {
    name: "Mridul",
    quote:
      "INSEAD Class of 2026!! 700 GMAT & No International Experience — You Can Still Make It Happen!",
    background:
      "An Indian professional with a 700 GMAT score and no prior international exposure, Mridul aimed for INSEAD, known for its global diversity. Many doubted her chances, but she remained determined.",
    approach:
      "We turned her lack of international experience into a strength by emphasizing her leadership impact, adaptability, and global mindset. Through powerful essays and focused interview prep, we showcased her readiness to contribute to INSEAD’s multicultural community.",
    caption: "Mridul | INSEAD",
    image: "/images/success-stories/featured/mridul.png",
    schools: [
      "/images/success-stories/featured/mridul-school-1.png",
      "/images/success-stories/featured/mridul-school-2.png",
    ],
    caseStudyUrl: "",
  };

  return (
    <main className="bg-[#FBF7EC] overflow-x-clip">
      <section className="px-4 sm:px-16 bg-[url('/images/success-stories-bg.png')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="max-w-2xl">
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold font-serif text-white leading-tight">
              Every Admit Begins with a Story
            </h1>
            <p className="mt-6 text-[#99C4EF]">
              From essays to interviews, discover how Open Admits helped
              applicants secure spots at MBA, M7, INSEAD, LBS, and other leading
              business schools worldwide.
            </p>
            <Button
              asChild
              className="w-fit p-6 mt-6 text-white bg-[#0056AD] hover:bg-[#0056AD]/90"
            >
              <Link
                href="https://meet.openadmits.com/#/IvyLeague"
                target="_blank"
              >
                Book Your Free Consultation
              </Link>
            </Button>
          </div>
          <div>
            <Image
              src="/images/success-stories.jpg"
              alt="Success Stories"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      <StatsSection />
      <RecentCaseStudiesSection caseStudies={recentCaseStudies} />
      <FeaturedTestimonialSection testimonial={testimonial1} />
      <SuccessStoriesSection />
      <FeaturedTestimonialSection testimonial={testimonial2} />
      <FeaturedCaseStudiesSection caseStudies={featuredCaseStudies} />
      <FinalCtaSection />
    </main>
  );
}
