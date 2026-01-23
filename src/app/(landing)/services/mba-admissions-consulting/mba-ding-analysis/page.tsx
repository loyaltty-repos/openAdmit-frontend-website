import type { Metadata } from "next";
import { ContactUsSection } from "../../../_components/sections/contact-us";
import { FaqsSection } from "../../../_components/sections/faq";
import { SuccessStoriesSection } from "../../../_components/sections/success-stories";
import { ServiceHero } from "../_components/services/hero";
import { IntroSection } from "./_components/intro";
import { ProcessSection } from "./_components/process";
import { ReasonsSection } from "./_components/reasons";
import { TargetSection } from "./_components/target";
import { WhoSection } from "./_components/who";

export const metadata: Metadata = {
  title: "MBA Ding Analysis – Personalized Profile Review and Evaluation",
  description:
    "Understand why your MBA application was rejected with our ding analysis services. Get expert profile evaluation and personalized coaching to improve future applications.",
  keywords: [
    "mba ding analysis",
    "personal mba coach ding analysis services",
    "mba profile evaluation",
    "mba profile review",
  ],
};

export default function Page() {
  const faqs = [
    {
      question: "What is an MBA Ding Analysis?",
      answer:
        "An MBA Ding Analysis is a thorough evaluation of your previous MBA application to identify potential reasons for rejection. This process involves a detailed review of all application components—such as essays, recommendation letters, test scores, and interview performance—to pinpoint areas for improvement and develop a strategic plan for reapplication.",
    },
    {
      question: "Why is a Ding Analysis important?",
      answer:
        "Understanding the reasons behind an application's rejection is crucial for reapplying successfully. A Ding Analysis helps uncover weaknesses in your previous application, allowing you to address them effectively. It provides clarity on whether to reapply to the same programs or consider other options, ensuring a more competitive application in the future.",
    },
    {
      question: "What does a typical Ding Analysis involve?",
      answer:
        "A comprehensive Ding Analysis includes: Review of Application Materials: Examining essays, recommendation letters, resumes, test scores, and interview performance. Identification of Weaknesses: Pinpointing areas where the application may have fallen short. Strategic Recommendations: Offering advice on how to strengthen the application for future rounds. Reapplication Strategy: Developing a tailored plan that may include retaking standardized tests, gaining additional work experience, or enhancing leadership skills.",
    },
    {
      question: "How can Open Admits assist with Ding Analysis?",
      answer:
        "Open Admits offers personalized Ding Analysis services, including: Expert Consultation: One-on-one sessions with experienced admissions consultants. Detailed Feedback: In-depth review of your application materials with constructive feedback. Actionable Insights: Clear recommendations for strengthening your profile and application. Reapplication Planning: Guidance on timing, target programs, and application strategies.",
    },
    {
      question: "How long does a Ding Analysis take?",
      answer:
        "The duration of a Ding Analysis varies depending on the complexity of the application and the depth of review required. Typically, it involves: Initial Review: 1-2 hours to assess all application materials. Consultation Session: 1 hour to discuss findings and recommendations. Follow-up Support: Ongoing guidance as you implement the suggested improvements.",
    },
    {
      question: "Should I consider a Ding Analysis if I was waitlisted?",
      answer:
        "Yes, a Ding Analysis can also be beneficial if you were waitlisted. It helps identify factors that may have prevented an offer of admission and provides strategies to enhance your candidacy for future applications.",
    },
    {
      question: "How can I schedule a Ding Analysis with Open Admits?",
      answer:
        "To initiate a Ding Analysis, visit our website and complete the consultation request form. Our team will review your application materials and schedule a session to discuss the findings and next steps.",
    },
  ];

  return (
    <main className="bg-[#FBF7EC]">
      <ServiceHero
        banner="MBA Ding Analysis"
        title="Turn Your MBA Rejection into a Strategic Advantage"
        description="Get expert insights with our MBA Ding Analysis and understand exactly why your application wasn’t accepted. Strengthen your profile for future success."
      />
      <IntroSection />
      <WhoSection />
      <TargetSection />
      <ProcessSection />
      <ReasonsSection />
      <SuccessStoriesSection />
      <ContactUsSection />
      <FaqsSection faqs={faqs} />
    </main>
  );
}
