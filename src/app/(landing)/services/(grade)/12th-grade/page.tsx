import {
  BarChart3,
  Building2,
  CheckCircle2,
  Compass,
  FileCheck,
  FileText,
  GraduationCap,
  Handshake,
  Hourglass,
  Lightbulb,
  Mail,
  MapPin,
  MessageSquare,
  Pencil,
  Percent,
  Scale,
  Search,
  TrendingUpDown,
  Upload,
} from "lucide-react";
import type { Metadata } from "next";
import { getRecentCaseStudies, getRecentPosts } from "@/lib/actions";
import { FaqsSection } from "../../../_components/sections/faq";
import { RecentBlogsSection } from "../../../_components/sections/recent-blogs";
import { SuccessStoriesSection } from "../../../_components/sections/success-stories";
import { RecentCaseStudiesSection } from "../../../success-stories/_components/recent-case-studies-section";
import { About } from "../_components/about";
import { ApplicationJourney } from "../_components/application-journey";
import { ContactUsSection } from "../_components/contact-us";
import { Hero } from "../_components/hero";
import { KeyOutcomes } from "../_components/key-outcomes";
import { Mentorship } from "../_components/mentorship";
import { PricingPlans } from "../_components/pricing-plans";
import { ProgramFeatures } from "../_components/program-features";
import { Stats } from "../_components/stats";
import { WhoIsThisFor } from "../_components/who-is-this-for";
import { WhyMatters } from "../_components/why-matters";

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
      question: "Why do seniors need a college admissions consultant?",
      answer:
        "A college admissions consultant for seniors provides strategy, narrative development, and structured planning that help students avoid costly mistakes and submit stronger applications.",
    },
    {
      question: "Is it too late to start college prep in 12th grade?",
      answer:
        "No. Our program delivers high-impact college prep for seniors, covering essays, supplements, and final application strategy.",
    },
    {
      question: "How personalized is the support?",
      answer:
        "Students receive individualized college guidance for 12th grade, including essay development, list strategy, major planning, and scholarship guidance.",
    },
    {
      question: "Do you help with both UC and Common App applications?",
      answer:
        "Yes. We provide complete support for UC PIQs, the Common App personal essay, and all college supplements.",
    },
    {
      question: "What makes your Ivy League counseling unique?",
      answer:
        "Students receive specialized ivy league counseling from senior editors, strategy experts, and former admissions officers who understand the expectations of highly selective schools.",
    },
    {
      question: "How many colleges does the program support?",
      answer:
        "The full program includes support for applications to up to nine colleges, with detailed essay and strategy guidance for each.",
    },
  ];

  const { data: recentCaseStudies } = await getRecentCaseStudies();

  const heroData = {
    title: "Elite Senior-Year Strategy for Competitive Ivy League Admissions.",
    description:
      "Expert-led college prep for seniors designed to help students manage essays, applications, deadlines, scholarships, and final decisions with a precise, organized plan that maximizes acceptance outcomes.\nGet end-to-end ivy league application guidance from trusted mentors who specialize in helping seniors stand out in the most competitive admissions year.\n500+ Students Mentored | Expert Essay and Strategy Guidance | Complete UC and Common App Support",
    downloadChecklistLink: "https://meet.openadmits.com/#/IvyLeague",
    downloadChecklistText: "Download Application Checklist",
    bookConsultationLink: "https://meet.openadmits.com/#/IvyLeague",
    bookConsultationText: "Book Your Free Consultation",
    heroImageSrc: "/images/services/12th-grade/hero.png",
    heroImageAlt: "Graduation celebration",
  };

  const aboutData = {
    heading: "End-to-End Support for 12th Grade Applicants",
    paragraphs: [
      "Senior year is the highest-stakes stage of the entire admissions journey. Essays, supplements, deadlines, ED/EA strategy, scholarships, major selection—every detail matters. Our program provides full-service college counseling for seniors, ensuring students receive structured, strategic, and personalized guidance from start to finish.",
      "Parents gain peace of mind. Students gain clarity, direction, and confidence.",
      "This is the most comprehensive college admissions consultant for seniors, designed to reduce stress and maximize acceptance results—especially for students targeting Ivy League and top-tier universities.",
    ],
    ctaLink: "https://meet.openadmits.com/#/IvyLeague",
    ctaText: "Book Your Free Consultation",
    aboutImageSrc: "/images/services/12th-grade/about.png",
    aboutImageAlt: "Graduation celebration",
  };

  const keyOutcomesData = {
    heading: "Key Outcomes of Our Program",
    outcomes: [
      {
        title: "Personalized College List and Acceptance Insights",
        description:
          "Receive a targeted, data-backed college list with acceptance probability insights.",
      },
      {
        title: "Application Strategy (ED, EA, REA, RD)",
        description:
          "A tailored submission plan that maximizes your odds across early and regular rounds, including Ivy-specific strategy recommendations.",
      },
      {
        title: "Major Selection Support",
        description:
          "Choose a major aligned with your strengths, interests, and long-term academic goals.",
      },
      {
        title: "Resume Creation and LOR Strategy",
        description:
          "Build a compelling resume and create a strategic plan for requesting strong recommendations.",
      },
      {
        title: "UC PIQ and Common App Essay Guidance",
        description:
          "Develop authentic, standout narratives with expert-led essay coaching.",
      },
      {
        title: "Drafting and Premium Essay Reviews",
        description:
          "Receive personalized drafts, multi-round edits, and in-depth reviews from senior counselors and former admissions officers.",
      },
      {
        title: "Scholarship Guidance",
        description:
          "Access curated scholarship lists and get support preparing competitive applications.",
      },
      {
        title: "Waitlist, Appeals and Acceptance Strategy",
        description:
          "Navigate decisions and waitlist outcomes with clarity and expert-backed strategy.",
      },
      {
        title: "College Comparison and Final Decision Support",
        description:
          "Make confident final choices through structured comparisons of fit, academics, cost, and long-term opportunity.",
      },
    ],
  };

  const whoIsThisForData = {
    heading: "Who This Program Is For",
    subheading:
      "A focused program designed to support seniors navigating the most demanding admissions year—especially those pursuing competitive and Ivy League schools.",
    audiences: [
      {
        title: "12th Graders Applying Competitively",
        description:
          "Get structured, strategic college prep for 12th grade including essays, supplements, major selection, and deadline management.",
      },
      {
        title: "Parents Seeking Organized Support",
        description:
          "Ensure every requirement is tracked, reviewed, and completed with professional oversight.",
      },
      {
        title: "Students Needing Advanced Essay and Strategy Help",
        description:
          "Receive personalized college guidance for 12th grade including narrative development, supplement strategy, and full-application preparation.",
      },
      {
        title: "Seniors Targeting Ivy League or Top 20 Universities",
        description:
          "Access high-level ivy league counseling including ED/EA strategy, theme development, and review by former admissions officers.",
      },
    ],
  };

  const whyMattersData = {
    heading: "Why 12th Grade Matters",
    description:
      "Senior year is decisive. It is the most critical period for essays, strategy, and final positioning. Students applying without structured guidance often struggle with inconsistent narratives, missed deadlines, and weak strategy alignment. Professional support ensures students stay organized, make strategic decisions, and submit polished, competitive applications—especially important for ivy prep for 12th grade.",
    steps: [
      {
        title: "August – Essays and Strategy",
        description:
          "College list creation, ED/EA planning, UC and Common App essay drafting.",
      },
      {
        title: "September–November – Early Applications (ED/EA)",
        description:
          "Finalize and submit early applications while completing supplemental essays.",
      },
      {
        title: "December–January – Regular Decision Submissions",
        description:
          "Complete the remaining applications with strong, refined materials.",
      },
      {
        title: "February–April – Scholarships, Waitlists and Decisions",
        description:
          "Navigate scholarship submissions, compare offers, respond to waitlists, and manage appeals.",
      },
    ],
  };

  const programFeaturesData = {
    badge: "Program Features",
    heading: "What's Included in the 12th Grade Program",
    description:
      "This suite covers the 12th-grade admissions journey—from building a college list to crafting essays and navigating decisions. Each component provides clarity and expert direction for strong applications.",
    features: [
      {
        icon: MapPin,
        title: "College List",
        description:
          "Build a targeted list of best-fit colleges aligned with your goals and profile.",
      },
      {
        icon: BarChart3,
        title: "Acceptance Odds",
        description:
          "Get data-driven probability insights for each school on your list.",
      },
      {
        icon: Compass,
        title: "Application Strategy",
        description:
          "Receive a tailored plan for ED, EA, REA, and RD to maximize acceptance chances.",
      },
      {
        icon: GraduationCap,
        title: "Major Insights",
        description:
          "Understand major-specific requirements, competitiveness, and acceptance trends.",
      },
      {
        icon: FileText,
        title: "Resume Prep",
        description:
          "Create a polished, admissions-ready resume that highlights your strengths.",
      },
      {
        icon: Mail,
        title: "LOR Strategy",
        description:
          "Plan who to ask and use templates for strong recommendations.",
      },
      {
        icon: MessageSquare,
        title: "UC PIQ Support",
        description:
          "Brainstorm and shape compelling narratives for all UC PIQ responses.",
      },
      {
        icon: Pencil,
        title: "Common App Essays",
        description:
          "Develop strong storylines and structure for impactful Common App essays.",
      },
      {
        icon: FileCheck,
        title: "Essay Drafting",
        description:
          "Receive personalized drafts and guidance for both UC and Common App essays.",
      },
      {
        icon: Search,
        title: "Senior Review",
        description:
          "Get detailed feedback from senior counselors to elevate clarity and impact.",
      },
      {
        icon: Building2,
        title: "Officer Review",
        description:
          "Refine essays with premium insights from former admissions officers.",
      },
      {
        icon: Lightbulb,
        title: "Scholarship Guidance",
        description:
          "Access curated scholarship lists with guidance to strengthen applications.",
      },
      {
        icon: Hourglass,
        title: "Waitlist Strategy",
        description:
          "Use targeted steps to improve your chances of moving off the waitlist.",
      },
      {
        icon: Scale,
        title: "Decision Support",
        description:
          "Navigate acceptances with expert advice on choosing the right college.",
      },
      {
        icon: TrendingUpDown,
        title: "Comparison Reports",
        description:
          "Review structured reports on academics, costs, and outcomes.",
      },
      {
        icon: CheckCircle2,
        title: "Full Program Support",
        description: "Get 12th-grade guidance on essays and nine colleges.",
      },
    ],
  };

  const applicationJourneyData = {
    heading: "Your 12th Grade Application Journey at a Glance",
    description:
      "A clear, month-by-month roadmap that helps families understand what to expect—and what to prioritize—throughout the admissions year.",
    backgroundImageSrc:
      "/images/services/12th-grade/application-journey-bg.png",
    headerIcon: Percent,
    phases: [
      {
        icon: Pencil,
        title: "Months 1-2 (Aug-Sep)",
        content:
          "Kickstart the process with essay brainstorming, Common App and UC PIQs, college list creation, and ED/EA strategy planning.",
      },
      {
        icon: Upload,
        title: "Months 3-4 (Oct-Nov)",
        content:
          "Finalize ED/EA applications while completing essay reviews and refining your major selection strategy.",
      },
      {
        icon: FileText,
        title: "Months 5-6 (Dec-Jan)",
        content:
          "Focus on Regular Decision applications, supplement essays, resume updates, and polishing recommendation materials.",
      },
      {
        icon: GraduationCap,
        title: "Months 7-8 (Feb-Mar)",
        content:
          "Shift to scholarships, waitlist planning, appeal letters, and structured college comparison guidance.",
      },
      {
        icon: Handshake,
        title: "Month 9 (Apr-May)",
        content:
          "Make informed final decisions with support on acceptance strategy and transition planning.",
      },
    ],
  };

  const mentorshipData = {
    badge: "Mentorship",
    heading: "Complete, Personalized Application Mentorship",
    description:
      "A structured, professional model that guides students through every stage of the admissions journey with clarity and expert support.",
    mentorshipImageSrc: "/images/services/12th-grade/mentorship.png",
    mentorshipImageAlt: "Students studying together",
    features: [
      {
        icon: BarChart3,
        title: "Application Strategy & Profile Review",
        description:
          "Start with a deep evaluation of academic history, activities, goals, and target schools to build a clear, data-informed application plan.",
      },
      {
        icon: Pencil,
        title: "Essay Development & Review Cycles",
        description:
          "Use brainstorming, outlines, and reviews with experts to create compelling essays.",
      },
      {
        icon: CheckCircle2,
        title: "Submission, Decisions & Acceptance Guidance",
        description:
          "Manage deadlines, edits, scholarship steps, waitlist strategy, and acceptance decisions with mentorship until completion.",
      },
    ],
  };

  const pricingPlansData = {
    badge: "Pricing Plans",
    heading: "Plans that fit your scale",
    note: "Note: All plans include onboarding and monthly mentor reports.",
    plans: [
      {
        title: "12th Grade Application Program - Standard",
        features: [
          "College list",
          "Strategy",
          "Resume",
          "LOR planning",
          "Essay guidance",
        ],
      },
      {
        title: "12th Grade Premium Program",
        includesText: "Everything in Standard plus....",
        features: [
          "Personalized drafts",
          "Advanced reviews",
          "Scholarship support",
        ],
      },
      {
        title: "Whole 12th Grade Package",
        includesText: "Everything in Premium plus....",
        features: [
          "Complete UC + Common App support",
          "Up to 9 colleges",
          "Scholarships + reviews + strategy",
        ],
      },
    ],
    compareLink: "#",
    compareText: "Browse Individual Services",
    customPricingLink: "#contact",
    customPricingText: "Get Custom Pricing",
  };

  return (
    <main className="bg-[#FBF7EC]">
      <Hero {...heroData} />
      <Stats />
      <About {...aboutData} />
      <KeyOutcomes {...keyOutcomesData} />
      <WhoIsThisFor {...whoIsThisForData} />
      <WhyMatters {...whyMattersData} />
      <ProgramFeatures {...programFeaturesData} />
      <ApplicationJourney {...applicationJourneyData} />
      <RecentCaseStudiesSection caseStudies={recentCaseStudies} />
      <Mentorship {...mentorshipData} />
      <SuccessStoriesSection />
      <PricingPlans {...pricingPlansData} />
      <RecentBlogsSection recentPosts={recentPosts} />
      <ContactUsSection />
      <FaqsSection faqs={faqs} />
    </main>
  );
}
