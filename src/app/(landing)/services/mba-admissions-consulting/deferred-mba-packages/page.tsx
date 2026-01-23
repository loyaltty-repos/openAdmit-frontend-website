import type { Metadata } from "next";
import { ContactUsSection } from "@/app/(landing)/_components/sections/contact-us";
import { FaqsSection } from "@/app/(landing)/_components/sections/faq";
import { SuccessStoriesSection } from "@/app/(landing)/_components/sections/success-stories";
import { ServiceHero } from "../_components/services/hero";
import { FeaturesSection } from "./_components/features";
import { ProcessSection } from "./_components/process";
import { ProgramsSection } from "./_components/programs";
import { ReasonsSection } from "./_components/reasons";
import { TargetSection } from "./_components/target";

export const metadata: Metadata = {
  title: "Deferred MBA Packages – Personalized Admissions Support",
  description:
    "Get expert guidance for deferred MBA programs. Our personal MBA coaches help you prepare for pre-MBA steps and secure successful admissions.",
  keywords: [
    "deferred mba programs",
    "personal mba coach",
    "pre mba programs",
    "mba deferred admission",
    "deferred mba admissions consulting",
  ],
};

export default function Page() {
  const faqs = [
    {
      question: "What is a deferred MBA program?",
      answer:
        "Deferred MBA programs allow college seniors or early-career professionals to secure admission to top business schools before they gain full-time work experience. Once admitted, students typically work for 2–4 years and then enroll in the MBA program. Examples include Harvard Business School’s 2+2 Program, Wharton’s Moelis Advance Access, and Yale’s Silver Scholars Program.",
    },
    {
      question: "Who should apply to deferred MBA programs?",
      answer:
        "These programs are ideal for outstanding undergraduate students or master’s students with little to no work experience who aspire to an MBA in the future. Applicants who already have clear career goals, strong academic records, and impactful leadership or extracurricular achievements are the best fit for deferred MBA admissions.",
    },
    {
      question: "How does deferred MBA admissions consulting help?",
      answer:
        "Applying to a deferred MBA program is highly competitive, as applicants have limited work experience to showcase. Our deferred MBA consulting services focus on helping you demonstrate leadership potential, academic excellence, and clarity of career goals. We guide you in selecting the right programs, refining your essays, preparing recommendation letters, and getting ready for interviews. With expert feedback, you can position yourself as a strong candidate despite limited professional experience.",
    },
    {
      question: "What is the right time to apply for a deferred MBA program?",
      answer:
        "Most deferred MBA applications are due in your final year of undergraduate or master’s study. It’s best to start preparing 6–9 months before deadlines, giving you enough time to polish your essays, build relationships with recommenders, and prepare for interviews. Starting early also allows you to align your academic and extracurricular achievements with program expectations.",
    },
    {
      question: "Do you provide guidance for all top deferred MBA programs?",
      answer:
        "Yes. We provide consulting support for leading deferred MBA programs globally, including HBS 2+2, Wharton Moelis, Yale Silver Scholars, Stanford GSB Deferred Enrollment, Chicago Booth Scholars, and others. Our consultants help you understand the nuances of each program and tailor your applications accordingly.",
    },
    {
      question: "Do I need work experience to apply for deferred MBA programs?",
      answer:
        "No. Deferred MBA programs are specifically designed for students without professional experience. Instead, admissions committees focus on your academic record, leadership roles, internships, and long-term career vision. We help you highlight these elements to compensate for limited full-time work experience.",
    },
    {
      question: "Can you guarantee admission to a deferred MBA program?",
      answer:
        "No admissions consultant can guarantee success, especially with programs as competitive as these. However, our proven methodology, personalized mentorship, and in-depth knowledge of top schools give you the tools to maximize your chances of success.",
    },
    {
      question:
        "Do you work with international students for deferred MBA admissions?",
      answer:
        "Absolutely. Many of our clients are international students who apply to deferred MBA programs in the U.S. and Europe. We guide you through essay development, cultural nuances, and application strategies tailored to global business schools.",
    },
  ];

  return (
    <main>
      <ServiceHero
        banner="Deferred MBA Programs"
        title="Secure Your MBA Seat Before You Graduate"
        description={`Our deferred MBA consulting packages help undergraduates and early-career professionals gain admission to top programs years before they enroll.`}
      />
      <FeaturesSection />
      <ReasonsSection />
      <TargetSection />
      <ProcessSection />
      <ProgramsSection />
      <SuccessStoriesSection />
      <ContactUsSection />
      <FaqsSection faqs={faqs} />
    </main>
  );
}
