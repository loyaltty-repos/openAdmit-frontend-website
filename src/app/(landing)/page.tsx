// import { PopupDialog } from "@/components/popup-dialog";
import { getRecentPosts } from "@/lib/actions";
import { AboutUsSection } from "./_components/sections/about-us";
import { ContactUsSection } from "./_components/sections/contact-us";
// import { CtaSection } from "./_components/sections/cta";
import { FaqsSection } from "./_components/sections/faq";
import { FinalCtaSection } from "./_components/sections/final-cta";
import { HeroSection } from "./_components/sections/hero";
import { ProgramsSection } from "./_components/sections/programs";
import { RecentBlogsSection } from "./_components/sections/recent-blogs";
import { StatsSection } from "./_components/sections/stats";
import { SuccessStoriesSection } from "./_components/sections/success-stories";

export default async function Page() {
  const { data: recentPosts } = await getRecentPosts();
  const faqs = [
    {
      question: "What types of admissions do you help with?",
      answer:
        "We offer expert guidance across undergraduate, master’s, and MBA admissions. Whether you’re applying to the Ivy League, top global universities, or elite M7 business schools, our consultants tailor a winning strategy that aligns with your academic background, goals, and target programs.",
    },
    {
      question: "What is included in your consulting packages?",
      answer:
        "Our comprehensive packages cover every aspect of the admissions process from profile evaluation and school selection to essay brainstorming, unlimited editing, resume enhancement, recommendation strategy, and interview preparation. We work with you closely from your first consultation through to your final admit decision.",
    },
    {
      question: "Do you assist with scholarships and financial aid?",
      answer:
        "Absolutely. We help you identify and apply for scholarships, fellowships, and financial aid opportunities. Our team also supports you with scholarship essays and funding strategy to help you secure the best possible financial outcomes.",
    },
    {
      question: "How do I get started?",
      answer:
        "Begin with a free 30-minute consultation. We’ll review your profile, discuss your goals and target schools, and outline a personalized admissions roadmap. You’ll also learn about our process and how we can help you maximize your admissions success.\n\nBook your consultation today to start your journey.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Our pricing varies depending on your program type, timeline, and level of support. We offer flexible options from complete end-to-end consulting to focused packages for specific components. During your free consultation, we’ll provide a customized quote based on your goals and needs.",
    },
  ];

  return (
    <main className="overflow-x-clip bg-[#FBFBF8] overscroll-none">
      <HeroSection />
      <StatsSection />
      <ProgramsSection />
      <AboutUsSection />
      {/* <CtaSection /> */}
      <SuccessStoriesSection />
      <FinalCtaSection />
      <RecentBlogsSection recentPosts={recentPosts} />
      <ContactUsSection />
      <FaqsSection faqs={faqs} />
      <FinalCtaSection />
      {/* <PopupDialog /> */}
    </main>
  );
}
