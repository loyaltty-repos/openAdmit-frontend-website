import type { Metadata } from "next";
import { getRecentPosts } from "@/lib/actions";
import { ContactUsSection } from "../../_components/sections/contact-us";
import { FaqsSection } from "../../_components/sections/faq";
import { RecentBlogsSection } from "../../_components/sections/recent-blogs";
import { SuccessStoriesSection } from "../../_components/sections/success-stories";
import { GraduateServicesAbout } from "./_components/about";
import { GraduateServicesHero } from "./_components/hero";
import { GraduateServicesProcess } from "./_components/process";
import { GraduateServicesPrograms } from "./_components/programs";

export const metadata: Metadata = {
  title: "Undergraduate Admissions Consulting – Expert Guidance",
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
      question: "What is graduate admissions consulting?",
      answer:
        "Graduate admissions consulting is a personalized service that assists prospective students in navigating the complex process of applying to graduate programs. Consultants provide guidance on selecting suitable programs, crafting compelling application materials, preparing for interviews, and strategizing for standardized tests.",
    },
    {
      question:
        "Why should I consider hiring a graduate admissions consultant?",
      answer:
        "Given the competitive nature of graduate admissions, especially for top-tier programs, consultants offer expertise in:\nDeveloping a strategic list of target programs\nCrafting standout personal statements and essays\nPreparing for interviews and standardized tests\nNavigating application timelines and requirements\nUnderstanding financial aid and scholarship opportunities\nTheir experience can help students present a cohesive and compelling application.",
    },
    {
      question: "At what stage should I begin working with a consultant?",
      answer:
        "It's advisable to start early, ideally during your final year of undergraduate studies, to plan your application strategy, prepare for standardized tests, and gather necessary documents. However, many students seek assistance during their application process, focusing on application essays, interview preparation, and finalizing their program list.",
    },
    {
      question: "How do I choose the right consultant for my needs?",
      answer:
        " Consider the following when selecting a consultant:\nExpertise: Look for consultants with experience in your desired field or program type.\nApproach: Ensure their methodology aligns with your preferences, whether it's hands-on guidance or strategic advice.\nSuccess Rate: Review their track record of successful admissions.\nCompatibility: Choose someone with whom you feel comfortable and understood.\nMany firms offer initial consultations to assess fit.",
    },
    {
      question:
        "What services are typically included in graduate admissions consulting?",
      answer:
        "Services may encompass:\nProgram selection and application strategy\nPersonal statement and essay development\nInterview coaching\nResume and CV review\nStandardized test preparation guidance\nFinancial aid and scholarship advice\nPackages vary in scope and duration, often tailored to individual student needs.",
    },
    {
      question: "Are there guarantees of admission?",
      answer:
        "No reputable consultant can guarantee admission to a specific program. Admissions decisions are based on a multitude of factors beyond any consultant's control. However, professional guidance can enhance the quality and competitiveness of your application.",
    },
    {
      question: "How involved are parents in the consulting process?",
      answer:
        "While the primary focus is on the student, parental involvement is encouraged, especially in decision-making processes. Consultants often provide updates and seek input on major decisions, ensuring alignment with family expectations.",
    },
    {
      question: "Do consultants work with international students?",
      answer:
        "Yes, many consultants specialize in assisting international students, helping them navigate visa requirements, understand different education systems, and meet specific application criteria.",
    },
    {
      question:
        "How do I get started with Open Admits' graduate admissions consulting?",
      answer:
        "To initiate the process, visit our website and complete the consultation request form. Our team will review your academic background, career goals, and desired programs to develop a personalized strategy that aligns with your aspirations.",
    },
  ];

  return (
    <main className="bg-[#FBF7EC]">
      <GraduateServicesHero />
      <GraduateServicesAbout />
      <GraduateServicesPrograms />
      <GraduateServicesProcess />
      <SuccessStoriesSection />
      <RecentBlogsSection recentPosts={recentPosts} />
      <ContactUsSection />
      <FaqsSection faqs={faqs} />
    </main>
  );
}
