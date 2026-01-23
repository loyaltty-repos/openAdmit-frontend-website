import type { Metadata } from "next";
import { ContactUsSection } from "@/app/(landing)/_components/sections/contact-us";
import { FaqsSection } from "@/app/(landing)/_components/sections/faq";
import { SuccessStoriesSection } from "@/app/(landing)/_components/sections/success-stories";
import { ServiceHero } from "../_components/services/hero";
import { ProcessSection } from "./_components/process";
import { StatsSection } from "./_components/stats";
import { TargetSection } from "./_components/target";
import { WhatSection } from "./_components/what";
import { WhySection } from "./_components/why";

export const metadata: Metadata = {
  title: "Comprehensive MBA Packages – Expert Admissions Guidance",
  description:
    "Explore our comprehensive MBA consulting packages designed to guide you through every step of your business school application with expert support.",
  keywords: [
    "comprehensive MBA packages",
    "MBA consulting packages",
    "MBA admissions guidance package",
    "MBA application coaching package",
    "business school admissions package",
  ],
};

export default function Page() {
  const faqs = [
    {
      question: "What is a Comprehensive MBA Package?",
      answer:
        "A Comprehensive MBA Package is an all-in-one consulting service designed to guide applicants through every step of the MBA admissions process. It typically includes school selection, application strategy, essay guidance, resume optimization, recommendation letter support, interview preparation, and post-admission advising. The goal is to provide end-to-end support to maximize your chances of admission to top business schools.",
    },
    {
      question: "Who should consider a Comprehensive MBA Package?",
      answer:
        "These packages are ideal for applicants who want complete, personalized guidance throughout the MBA admissions journey. Whether you're an early-career professional, career switcher, or international applicant, a comprehensive package ensures that every element of your application is strategically crafted to highlight your strengths.",
    },
    {
      question:
        "How does a Comprehensive MBA Package differ from other consulting services?",
      answer:
        "Unlike limited or a la carte services, comprehensive packages provide holistic, end-to-end support. They cover every stage of the application process, from initial profile assessment to post-offer decision-making, ensuring a cohesive and compelling application that aligns with your career goals.",
    },
    {
      question: "What services are included in a Comprehensive MBA Package?",
      answer:
        "Most comprehensive packages include: Profile Assessment: Evaluating your academic background, professional experience, and leadership potential. School Shortlisting: Identifying target, reach, and safety programs aligned with your goals. Essay and Resume Guidance: Crafting and refining essays and resumes to present your unique story. Recommendation Letter Support: Guidance for recommenders to provide strong, personalized endorsements. Interview Preparation: Mock interviews, feedback, and strategies for various MBA interview formats. Post-Admission Strategy: Assistance with decisions, negotiations, and pre-MBA planning.",
    },
    {
      question: "How long does a Comprehensive MBA Package last?",
      answer:
        "Typically, these packages span 6–12 months, depending on the client's application timeline and the number of target schools. Early engagement allows for in-depth preparation and iterative refinement of all application components.",
    },
    {
      question: "Can international applicants use Comprehensive MBA Packages?",
      answer:
        "Yes. Our packages are designed for both domestic and international applicants. We help navigate cultural nuances, strengthen global leadership stories, and tailor applications for top programs worldwide.",
    },
    {
      question: "Do Comprehensive MBA Packages guarantee admission?",
      answer:
        "No consultant can guarantee admission, as decisions are ultimately made by business schools. However, our proven methodology, personalized coaching, and strategic guidance significantly improve your chances of success.",
    },
    {
      question: "How do I get started with a Comprehensive MBA Package?",
      answer:
        "To begin, schedule a consultation through our website. We'll assess your profile, understand your goals, and create a customized plan covering every aspect of your MBA application journey.",
    },
    {
      question: "What makes Open Admits’ Comprehensive MBA Packages unique?",
      answer:
        "Our approach combines alumni insight, personalized mentorship, and strategic expertise. Each client receives a tailored roadmap, ongoing feedback, and expert support across all aspects of the application, ensuring maximum impact for every element of your submission.",
    },
  ];

  return (
    <main className="bg-[#FBF7EC]">
      <ServiceHero
        banner="MBA Services"
        title="Comprehensive MBA Packages for Top Business School Admissions"
        description="Our MBA consulting packages provide end-to-end guidance, from profile evaluation and essay strategy to interview coaching, helping applicants maximize their chances at M7, Ivy League, and other elite programs."
      />
      <WhatSection />
      <TargetSection />
      <ProcessSection />
      <StatsSection />
      <WhySection />
      <SuccessStoriesSection />
      <ContactUsSection />
      <FaqsSection faqs={faqs} />
    </main>
  );
}
