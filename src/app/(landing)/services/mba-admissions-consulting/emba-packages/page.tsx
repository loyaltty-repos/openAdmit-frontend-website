import type { Metadata } from "next";
import { ContactUsSection } from "@/app/(landing)/_components/sections/contact-us";
import { FaqsSection } from "@/app/(landing)/_components/sections/faq";
import { SuccessStoriesSection } from "@/app/(landing)/_components/sections/success-stories";
import { ServiceHero } from "../_components/services/hero";
import { ChallengesSection } from "./_components/challenges";
import { IntroSection } from "./_components/intro";
import { ProcessSection } from "./_components/process";
import { TargetSection } from "./_components/target";

export const metadata: Metadata = {
  title: "EMBA Packages – Executive MBA Admissions Guidance",
  description:
    "Explore our EMBA packages designed for working professionals. Get expert guidance for executive MBA programs, including online admissions in the USA.",
  keywords: [
    "executive mba programs",
    "online executive mba programs",
    "executive mba admission",
    "mba for working professionals in usa",
  ],
};

export default function Page() {
  const faqs = [
    {
      question: "What is an EMBA program, and who is it for?",
      answer:
        "An Executive MBA (EMBA) is designed for mid-to-senior level professionals seeking career acceleration while continuing to work full-time. EMBA programs focus on leadership development, strategic decision-making, and networking with experienced professionals. Ideal candidates typically have 5–15 years of work experience and aim for executive roles, entrepreneurship, or global exposure.",
    },
    {
      question: "What do your EMBA packages include?",
      answer:
        "Our EMBA packages provide end-to-end consulting for applicants, including school selection, application strategy, resume and essay refinement, recommendation letter guidance, and interview preparation. We tailor our support to highlight your professional achievements, leadership skills, and career trajectory, ensuring your application stands out in a competitive applicant pool.",
    },
    {
      question:
        "How can EMBA admissions consulting improve my chances of acceptance?",
      answer:
        "EMBA programs are highly selective, focusing on leadership experience, impact, and career progression. Our consultants, who have themselves completed top EMBA programs, provide expert guidance on positioning your achievements, articulating your career vision, and demonstrating your readiness for executive-level education. This personalized coaching maximizes your competitiveness in every stage of the admissions process.",
    },
    {
      question: "What is the timeline for applying to EMBA programs?",
      answer:
        "EMBA applications generally open 9–12 months before program start dates. We recommend starting early to conduct school research, refine essays, and prepare for interviews. Early preparation allows you to strategically showcase your leadership impact, career accomplishments, and alignment with program objectives.",
    },
    {
      question: "Do EMBA programs require GMAT or GRE scores?",
      answer:
        "Most EMBA programs do not require standardized tests, as they prioritize professional experience and leadership qualities. Some schools may have exceptions, and our consultants help you understand and navigate each program’s specific requirements.",
    },
    {
      question: "Can international professionals apply for EMBA programs?",
      answer:
        "Absolutely. We support international applicants with global EMBA admissions, providing guidance on essays, recommendations, and cultural considerations. Our goal is to help every candidate present their professional experience effectively, regardless of geographic location.",
    },
    {
      question: "How many schools can I apply to using your EMBA packages?",
      answer:
        "Our EMBA consulting packages are flexible and designed to cover multiple school applications. We help you prioritize programs based on career goals, location, alumni network, and curriculum, ensuring each application reflects your best qualifications.",
    },
    {
      question: "Who will I work with during the EMBA consulting process?",
      answer:
        "You’ll work with consultants who are alumni of top global EMBA programs. Their firsthand experience and mentoring expertise ensure you receive actionable advice, from positioning your professional accomplishments to preparing for rigorous interviews.",
    },
    {
      question: "Do you guarantee admission to EMBA programs?",
      answer:
        "No consultant can guarantee admission, as EMBA programs are highly competitive. What we provide is personalized mentorship, a proven methodology, and strategic guidance that significantly increases your chances of acceptance.",
    },
    {
      question:
        "What makes your EMBA consulting different from other services?",
      answer:
        "Our approach is holistic, combining strategic guidance, professional branding, and personalized mentorship. Unlike other providers, we emphasize executive-level storytelling, career impact, and alignment with program objectives, ensuring your application stands out among highly experienced candidates.",
    },
  ];

  return (
    <main>
      <ServiceHero
        banner="EMBA packages"
        title="Advance Your Career with Personalized Executive MBA Programs"
        description={`Our EMBA packages are tailored for working professionals seeking admission to top U.S. programs, including online executive MBA options. Maximize your chances with expert guidance at every step.`}
      />
      <IntroSection />
      <ChallengesSection />
      <TargetSection />
      <ProcessSection />
      <SuccessStoriesSection />
      <ContactUsSection />
      <FaqsSection faqs={faqs} />
    </main>
  );
}
