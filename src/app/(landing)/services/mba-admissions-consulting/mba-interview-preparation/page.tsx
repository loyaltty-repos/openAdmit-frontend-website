import type { Metadata } from "next";
import { ContactUsSection } from "../../../_components/sections/contact-us";
import { FaqsSection } from "../../../_components/sections/faq";
import { SuccessStoriesSection } from "../../../_components/sections/success-stories";
import { ServiceHero } from "../_components/services/hero";
import { IntroSection } from "./_components/intro";
import { ProcessSection } from "./_components/process";
import { ReasonsSection } from "./_components/reasons";
import { TargetSection } from "./_components/target";

export const metadata: Metadata = {
  title: "MBA Interview Preparation – Expert Coaching & Tips",
  description:
    "Get personalized MBA interview coaching and tips to confidently prepare for your business school interviews. Master every step with expert guidance.",
  keywords: [
    "mba interview prep",
    "mba interview preparation",
    "mba interview tips",
    "mba interview coaching",
    "how to prepare for mba interviews",
  ],
};

export default function Page() {
  const faqs = [
    {
      question: "What is MBA interview preparation, and why is it crucial?",
      answer:
        "MBA interview preparation involves strategically preparing for the admissions interview by reflecting on your experiences, understanding your motivations, and practicing responses to common questions. It's essential because the interview is often the final step in the admissions process, allowing you to showcase your fit for the program and differentiate yourself from other candidates.",
    },
    {
      question: "What are the most common MBA interview questions?",
      answer:
        'While questions can vary by school, some frequently asked ones include: "Tell me about yourself." "Why do you want to pursue an MBA?" "Why this business school?" "What are your short-term and long-term career goals?" "Describe a challenging situation you\'ve faced and how you handled it." "What are your strengths and weaknesses?" "How do you plan to contribute to our campus community?" Preparing thoughtful, authentic responses to these questions is essential.',
    },
    {
      question: "How should I prepare for my MBA interview?",
      answer:
        "Effective preparation includes: Self-reflection: Understand your motivations, career goals, and reasons for choosing the specific program. Research: Familiarize yourself with the school's culture, values, and recent developments. Practice: Conduct mock interviews to refine your responses and delivery. Feedback: Seek constructive feedback from mentors or peers to improve your performance.",
    },
    {
      question: "What is the STAR method, and how can it help in interviews?",
      answer:
        "The STAR method stands for Situation, Task, Action, and Result. It's a structured approach to answering behavioral interview questions by providing clear and concise examples of past experiences. Using this method helps interviewers understand your thought process and problem-solving abilities.",
    },
    {
      question: "Should I prepare for case interviews?",
      answer:
        "If you're applying to consulting-focused programs or firms, it's advisable to prepare for case interviews. These assess your analytical and problem-solving skills through business scenarios. Practice frameworks, quantitative analysis, and structured thinking to excel in these interviews.",
    },
    {
      question: "How can I manage interview anxiety?",
      answer:
        "To manage anxiety: Preparation: Thoroughly prepare to boost confidence. Practice: Regular mock interviews can desensitize you to the process. Relaxation Techniques: Deep breathing and mindfulness can help calm nerves. Positive Visualization: Envisioning a successful interview can reduce stress.",
    },
    {
      question: "What should I wear to an MBA interview?",
      answer:
        "Dress professionally, typically in business attire. The exact choice may depend on the program's culture; some schools may have a more formal or business-casual environment. When in doubt, it's better to be slightly overdressed than underdressed.",
    },
    {
      question: "How can Open Admits assist with MBA interview preparation?",
      answer:
        "Open Admits offers personalized coaching sessions tailored to your target programs. Our services include: Conducting mock interviews with experienced consultants. Providing feedback on your responses and body language. Assisting in refining your personal narrative and storytelling. Offering strategies to handle challenging questions effectively.",
    },
    {
      question: "Do you guarantee admission through interview coaching?",
      answer:
        "While we cannot guarantee admission, our expert coaching significantly enhances your interview performance. Many of our clients have successfully gained admission to top-tier programs, thanks to our tailored preparation strategies.",
    },
    {
      question:
        "How do I get started with Open Admits' MBA interview preparation services?",
      answer:
        "To begin, visit our website and schedule a consultation. We'll assess your profile, understand your goals, and develop a customized preparation plan to ensure you present your best self during the interview.",
    },
  ];

  return (
    <main className="bg-[#FBF7EC]">
      <ServiceHero
        banner="MBA Interview Preparation"
        title="Crack the MBA Interview with Confidence"
        description="From tough questions to impactful storytelling, our MBA interview coaching gives you the skills and strategies you need to succeed."
      />
      <IntroSection />
      <TargetSection />
      <ProcessSection />
      <ReasonsSection />
      <SuccessStoriesSection />
      <ContactUsSection />
      <FaqsSection faqs={faqs} />
    </main>
  );
}
