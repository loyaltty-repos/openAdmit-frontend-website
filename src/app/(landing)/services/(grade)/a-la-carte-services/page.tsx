import { getRecentCaseStudies, getRecentPosts } from "@/lib/actions";
import { FaqsSection } from "../../../_components/sections/faq";
import { RecentBlogsSection } from "../../../_components/sections/recent-blogs";
import { RecentCaseStudiesSection } from "../../../success-stories/_components/recent-case-studies-section";
import { About } from "../_components/about";
import { ContactUsSection } from "../_components/contact-us";
import { Hero } from "../_components/hero";
import { Stats } from "../_components/stats";
import { WhoIsThisFor } from "../_components/who-is-this-for";
import { Comparison } from "./_components/comparison";
import { HowItWorks } from "./_components/how-it-works";
import { ServicesSection } from "./_components/services-section";

export default async function Page() {
  const { data: recentPosts } = await getRecentPosts();
  const { data: recentCaseStudies } = await getRecentCaseStudies();

  const heroData = {
    title: "Expert À La Carte Services for Ivy League Admissions",
    description:
      "Flexible, high-impact college application help for essays, college lists, interviews, scholarships, and more perfect for students who want targeted support without committing to a long-term program.\n\nTrusted by 500+ families • Fast turnaround • Expert review guaranteed",
    downloadChecklistLink: "https://meet.openadmits.com/#/IvyLeague",
    downloadChecklistText: "Download Application Checklist",
    bookConsultationLink: "https://meet.openadmits.com/#/IvyLeague",
    bookConsultationText: "Book Your Free Consultation",
    heroImageSrc: "/images/services/a-la-carte-services/hero.png",
    heroImageAlt: "À la carte services",
  };

  const aboutData = {
    heading: "Expert À La Carte Services for Ivy League Admissions",
    paragraphs: [
      "Flexible, high-impact college application help for essays, college lists, interviews, scholarships, and more perfect for students who want targeted support without committing to a long-term program.",
    ],
    ctaLink: "https://meet.openadmits.com/#/IvyLeague",
    ctaText: "Book Your Free Consultation",
    aboutImageSrc: "/images/services/a-la-carte-services/about.png",
    aboutImageAlt: "À la carte services",
  };

  const whoIsThisForData = {
    heading: "For Students Who Need Targeted, High-Quality Admissions Support",
    subheading:
      "Whether you need an essay reviewed, a college list built, or a final application QA, our college admissions services provide fast, precise, expert-level guidance exactly when you need it.",
    audiences: [
      {
        title: "A single essay polished",
        description:
          "Get expert review and refinement for individual essays with fast turnaround.",
      },
      {
        title: "A personalized, strategy-driven college list",
        description:
          "Receive a customized list of colleges matched to your profile and goals.",
      },
      {
        title: "Interview practice with top admissions mentors",
        description:
          "Prepare for college interviews with guidance from experienced mentors.",
      },
      {
        title: "Scholarship research and guidance",
        description:
          "Access curated scholarship opportunities matched to your profile.",
      },
      {
        title: "A complete college application review service",
        description:
          "Get comprehensive QA before submitting your final applications.",
      },
    ],
  };

  const faqs = [
    {
      question: "Who are the à la carte services best suited for?",
      answer:
        "À la carte services are ideal for students who need targeted support such as essay feedback, college list guidance, application QA, or scholarship help without joining a long-term program. They're perfect for quick fixes, final checks, or high-impact, single-task assistance.",
    },
    {
      question: "Can I book multiple à la carte services at once?",
      answer:
        "Yes. Many families combine services such as essay review + college list + interview prep. You can mix and match exactly what you need; there is no minimum purchase.",
    },
    {
      question: "How fast is the turnaround time?",
      answer:
        "Most services are delivered within 48–72 hours, while detailed reports and drafted essays take 3–5 days. Every service clearly displays its timeline.",
    },
    {
      question: "Who will review my materials?",
      answer:
        "Your work is reviewed by trained admissions mentors, senior counselors, or if you choose premium services former admissions officers. These are the same experts who support our full-program students.",
    },
    {
      question: "Do these services include revisions?",
      answer:
        "Some services include a revision round (such as draft + counseling). Drafted essays are delivered as final versions with no revisions. Each service clearly states what is included.",
    },
    {
      question: "Should I choose à la carte or the full Pre-College Program?",
      answer:
        "Choose à la carte if you need targeted, immediate help. Choose the Pre-College Program if you want long-term mentorship, profile-building, essays, interviews, and Ivy League–level strategy over several months.",
    },
  ];

  return (
    <main className="bg-[#FBF7EC]">
      <Hero {...heroData} />
      <Stats />
      <WhoIsThisFor {...whoIsThisForData} />
      <About {...aboutData} />
      <ServicesSection />
      <HowItWorks />
      <RecentCaseStudiesSection caseStudies={recentCaseStudies} />
      <Comparison />
      <RecentBlogsSection recentPosts={recentPosts} />
      <ContactUsSection />
      <FaqsSection faqs={faqs} />
    </main>
  );
}
