import type { Metadata } from "next";
import { ContactUsSection } from "../../_components/sections/contact-us";
import { FaqsSection } from "../../_components/sections/faq";
import { SuccessStoriesSection } from "../../_components/sections/success-stories";
import { FeaturesSection } from "./_components/features";
import { HeroSection } from "./_components/hero";
import { SchoolsSection } from "./_components/schools";
import { StatsSection } from "./_components/stats";

export const metadata: Metadata = {
  title: "MBA Admissions Consulting – Expert Guidance by Open Admits",
  description:
    "Get personalized MBA admissions guidance to craft standout applications. Our expert consultants help you achieve your top business school goals.",
  keywords: [
    "mba admissions consulting",
    "mba admissions consultant",
    "mba consulting services",
    "mba application consultants",
  ],
};

export default function Page() {
  const faqs = [
    {
      question: "What does MBA admissions consulting include?",
      answer:
        "Our MBA admissions consulting services are designed to provide end-to-end support throughout your application journey. From creating a personalized application strategy to shortlisting the right schools, refining your essays and resume, and preparing you for interviews, we ensure every element of your MBA application highlights your strengths. Many applicants find it challenging to bring out their unique story, and that's where our structured MBA admissions guidance makes a difference.",
    },
    {
      question: "How can an MBA consultant improve my chances of admission?",
      answer:
        "Top business schools receive thousands of applications each year. Working with an experienced MBA consultant helps you stand out from this competition. Our consultants provide expert feedback on your profile, help you avoid common mistakes, and guide you in presenting your academic, professional, and personal achievements in the most impactful way. With our MBA consulting services, you gain insights that go beyond generic advice, ensuring that your application reflects the qualities admissions committees value most.",
    },
    {
      question:
        "When should I start working with an MBA admissions consultant?",
      answer:
        "It's best to begin working with a consultant at least 9–12 months before application deadlines. This gives you enough time to strengthen your profile, craft well-thought-out essays, and prepare thoroughly for interviews. However, even if you're short on time, our MBA admissions guidance packages can support applicants on tighter timelines with focused coaching.",
    },
    {
      question: "Do you help with both GMAT and GRE applicants?",
      answer:
        "Yes. Whether you are applying with a GMAT or a GRE score, our team understands how to position your application strategically. We guide you on how to balance test scores with other critical elements such as your leadership experience, career goals, and extracurricular activities.",
    },
    {
      question: "Can you help me apply to multiple business schools?",
      answer:
        "Absolutely. Our MBA consulting packages are flexible, allowing you to apply to several schools based on your goals. Whether you're targeting one dream program or a mix of top-tier and safe schools, we help you optimize your application strategy for each institution.",
    },
    {
      question: "Do you guarantee admission to top programs?",
      answer:
        "No admissions consultant can promise you an admit, and you should be cautious of anyone who makes such claims. What we can guarantee is that our proven approach, personalized coaching, and expert feedback will significantly strengthen your chances of securing a place at your target schools.",
    },
    {
      question: "Who will I work with during the MBA consulting process?",
      answer:
        "At Open Admits, you'll be paired with consultants who are alumni of leading global business schools. Their first-hand experience with the admissions process, combined with years of mentoring applicants, ensures that you receive credible, relevant, and actionable advice.",
    },
    {
      question: "Do you help international students with MBA admissions?",
      answer:
        "Yes. We work with applicants from across the world, offering guidance on school selection, essay writing, and interview preparation while also addressing cultural differences and international admissions requirements. Our global approach ensures that every applicant, regardless of background, is well-prepared to compete in the international MBA admissions landscape.",
    },
  ];

  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <SchoolsSection />
      <SuccessStoriesSection />
      <ContactUsSection />
      <FaqsSection faqs={faqs} />
    </main>
  );
}
