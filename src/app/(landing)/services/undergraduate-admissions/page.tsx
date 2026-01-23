import type { Metadata } from "next";
import { getRecentPosts } from "@/lib/actions";
import { ContactUsSection } from "../../_components/sections/contact-us";
import { FaqsSection } from "../../_components/sections/faq";
import { RecentBlogsSection } from "../../_components/sections/recent-blogs";
import { SuccessStoriesSection } from "../../_components/sections/success-stories";
import { UnderGraduateServicesAbout } from "./_components/about";
import { UnderGraduateServicesHero } from "./_components/hero";
import { UnderGraduateServicesProcess } from "./_components/process";
import { UnderGraduateServicesPrograms } from "./_components/programs";

export const metadata: Metadata = {
  title: "Bachelors Admissions Consulting – Expert Guidance",
  description:
    "Get expert college application guidance and consulting services for BBA and undergraduate programs. Personalized support to help your application stand out.",
  keywords: [
    "college application guidance",
    "college admissions consulting services",
    "college application consulting",
    "undergraduate admissions consulting",
    "bachelors admissions consulting",
    "bba admissions consultant",
  ],
};

export default async function Page() {
  const { data: recentPosts } = await getRecentPosts();
  const faqs = [
    {
      question: "What is undergraduate admissions consulting?",
      answer: `Undergraduate admissions consulting is a personalized service that guides students through the college application process. Consultants assist with crafting compelling application materials, selecting appropriate colleges, preparing for interviews, and navigating financial aid options. The goal is to present a student's profile in the best possible light to increase their chances of admission.`,
    },
    {
      question:
        "Why should I consider hiring an undergraduate admissions consultant?",
      answer: `Given the competitive nature of college admissions, especially to top-tier institutions, professional consultants offer expertise in:
Developing a strategic college list
Crafting standout personal statements and essays
Preparing for interviews and standardized tests
Navigating application timelines and requirements
Understanding financial aid and scholarship opportunities
Their experience can help students present a cohesive and compelling application.`,
    },
    {
      question: "At what stage should I begin working with a consultant?",
      answer: `It's advisable to start early, ideally in the 9th or 10th grade, to plan high school courses, extracurricular activities, and summer programs. However, many students seek assistance during their junior or senior years, focusing on application essays, interview preparation, and finalizing their college list.`,
    },
    {
      question: "How do I choose the right consultant for my needs?",
      answer: `Consider the following when selecting a consultant:
Expertise: Look for consultants with experience in your desired field or college type.
Approach: Ensure their methodology aligns with your preferences, whether it's hands-on guidance or strategic advice.
Success Rate: Review their track record of successful admissions.
Compatibility: Choose someone with whom you feel comfortable and understood.
Many firms offer initial consultations to assess fit.`,
    },
    {
      question:
        "What services are typically included in undergraduate admissions consulting?",
      answer: `Services may encompass:
College list development
Essay brainstorming, drafting, and editing
Interview coaching
Application strategy and timeline planning
Financial aid and scholarship guidance
Resume and recommendation letter review
Packages vary in scope and duration, often tailored to individual student needs.`,
    },
    {
      question: "Are there guarantees of admission?",
      answer: `No reputable consultant can guarantee admission to a specific college. Admissions decisions are based on a multitude of factors beyond any consultant's control. However, professional guidance can enhance the quality and competitiveness of your application.`,
    },
    {
      question: "How involved are parents in the consulting process?",
      answer: `While the primary focus is on the student, parental involvement is encouraged, especially in decision-making processes. Consultants often provide updates and seek input on major decisions, ensuring alignment with family expectations.`,
    },
    {
      question: "Do consultants work with international students?",
      answer: `Yes, many consultants specialize in assisting international students, helping them navigate visa requirements, understand different education systems, and meet specific application criteria.`,
    },
    {
      question:
        "How do I get started with Open Admits' undergraduate admissions consulting?",
      answer: `Begin by scheduling a consultation through our website. We'll assess your academic background, extracurricular activities, and college aspirations to develop a personalized strategy that aligns with your goals.`,
    },
  ];

  return (
    <main className="bg-[#FBF7EC]">
      <UnderGraduateServicesHero />
      <UnderGraduateServicesAbout />
      <UnderGraduateServicesPrograms />
      <UnderGraduateServicesProcess />
      <SuccessStoriesSection />
      <RecentBlogsSection recentPosts={recentPosts} />
      <ContactUsSection />
      <FaqsSection faqs={faqs} />
    </main>
  );
}
