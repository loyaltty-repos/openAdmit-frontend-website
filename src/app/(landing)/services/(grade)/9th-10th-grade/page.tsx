import {
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  Clock,
  Compass,
  FileText,
  GraduationCap,
  Lightbulb,
  Pencil,
  School,
  Search,
  Target,
  Trophy,
  Users,
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
  title: "9th-10th Grade Admissions Consulting – Expert Guidance",
  description:
    "Get expert guidance and consulting services for 9th-10th grade students. Personalized support to help students prepare for their academic journey.",
  keywords: [
    "9th grade admissions",
    "10th grade admissions",
    "high school admissions",
    "freshman sophomore consulting",
  ],
};

export default async function Page() {
  const { data: recentPosts } = await getRecentPosts();
  const faqs = [
    {
      question: "What services are available for 9th-10th grade students?",
      answer:
        "Our comprehensive program provides guidance and support for high school students preparing for their academic journey.",
    },
  ];

  const { data: recentCaseStudies } = await getRecentCaseStudies();

  const heroData = {
    title: "Build Strength, Discover Interests & Develop Profile",
    description:
      "Strategic mentoring for 9th-10th graders focused on essay foundations, curated college exploration across 20 universities including Ivy League institutions, and curriculum planning for Ivy preparation services. Start building your college profile early with Open Admits.\n\n500+ Students Mentored | Weekly 1:1 Guidance | Guidance in Research, Competitions & Essays | Early Profile Building",
    downloadChecklistLink: "https://meet.openadmits.com/#/IvyLeague",
    downloadChecklistText: "Download Application Checklist",
    bookConsultationLink: "https://meet.openadmits.com/#/IvyLeague",
    bookConsultationText: "Book Your Free Consultation",
    heroImageSrc: "/images/services/9th-10th-grade/hero.png",
    heroImageAlt: "9th-10th grade students",
  };

  const aboutData = {
    heading: "Build Early Confidence and Academic Momentum",
    paragraphs: [
      "This program helps students transition from middle to high school by developing academic habits and structured routines. Through research assignments and competitions, students build foundations for their admissions journey, gaining clarity, confidence, and direction for 11th and 12th grade.",
    ],
    ctaLink: "https://meet.openadmits.com/#/IvyLeague",
    ctaText: "Book Your Free Consultation",
    aboutImageSrc: "/images/services/9th-10th-grade/about.png",
    aboutImageAlt: "About 9th-10th grade",
  };

  const keyOutcomesData = {
    heading: "Key Outcomes of Our Program",
    outcomes: [
      {
        title: "Academic Consistency",
        description:
          "Build disciplined study routines with ongoing grade monitoring and improvement support.",
      },
      {
        title: "Early Research Exposure",
        description:
          "Develop curiosity and analytical skills through guided research assignments and beginner programs.",
      },
      {
        title: "Clubs & Competitions",
        description:
          "Plan meaningful club involvement, competitions, and certifications that build early confidence.",
      },
      {
        title: "Writing & Communication Skills",
        description:
          "Strengthen writing, speaking, and presentation abilities through structured practice.",
      },
      {
        title: "Interest Discovery",
        description:
          "Explore curated internship options that align with academic and career interests.",
      },
      {
        title: "Early Profile Building",
        description:
          "Start shaping a simple resume and participate in activities that demonstrate initiative.",
      },
      {
        title: "11th Grade Planning",
        description:
          "Create a high-level roadmap leading into the critical junior year.",
      },
    ],
  };

  const whoIsThisForData = {
    heading: "Who This Program Is For",
    subheading:
      "Designed for students and families who want early structure, academic stability, and guided exposure to the activities that lay the foundation for future college success.",
    audiences: [
      {
        title: "Students Seeking Structure (Grades 9–10)",
        description:
          "Get organized academic routines and guided steps to build early confidence and consistency.",
      },
      {
        title: "Parents Wanting Early Development Support",
        description:
          "Ensure your child receives balanced guidance across academics, activities, and foundational profile building.",
      },
      {
        title: "Students Exploring Interests",
        description:
          "Discover strengths and real-world interests with personalized direction and curated opportunities.",
      },
    ],
  };

  const whyMattersData = {
    heading: "Why 9th & 10th Grade Matter",
    description:
      "Early high school years shape future academic performance. GPA solidifies, interests emerge, and leadership activities build momentum. Starting now reduces stress in Grades 11–12 and leads to better outcomes during application season.",
    steps: [
      {
        title: "Foundational Years (Grade 9)",
        description:
          "Begin building academic habits, explore new subjects, and try early clubs and competitions to discover strengths.",
      },
      {
        title: "Growth & Direction (Grade 10)",
        description:
          "Deepen interests through research, activities, and skill-building, while strengthening grades and preparing for more advanced opportunities.",
      },
      {
        title: "Preparation for Applications (Grade 11 → 12)",
        description:
          "Enter junior year confident, with a solid profile making standardized tests, essays, and applications far more manageable.",
      },
    ],
  };

  const programFeaturesData = {
    badge: "Program Features",
    heading: "What's Included in the 9th & 10th Grade Program",
    description:
      "A structured, skill-building program designed to help students develop strong academic habits, discover interests, and begin building a meaningful profile long before college pressure begins.",
    features: [
      {
        icon: BookOpen,
        title: "Academic Support",
        description:
          "Track academic performance and reinforce effective study habits through regular academic reviews and guidance.",
      },
      {
        icon: Compass,
        title: "Course Planning",
        description:
          "Strategically select subjects for Grades 10 and 11 to build academic depth and sustained rigor over time.",
      },
      {
        icon: Search,
        title: "Research Guidance",
        description:
          "Engage in guided introductory research projects and explore accessible research programs tailored for high school students.",
      },
      {
        icon: Users,
        title: "Clubs & Leadership",
        description:
          "Identify relevant school clubs and outline leadership pathways that can be developed progressively across high school.",
      },
      {
        icon: Award,
        title: "Certifications & Skill Building",
        description:
          "Build skills with curated certifications across STEM, business, arts, and more.",
      },
      {
        icon: Trophy,
        title: "Competitive Exposure",
        description:
          "Prepare for science fairs, hackathons, Olympiads, and other academic competitions that support skill development and confidence.",
      },
      {
        icon: Pencil,
        title: "Writing & Communication Skills",
        description:
          "Strengthen written and verbal communication through structured coaching in writing, presentation, and public speaking.",
      },
      {
        icon: Clock,
        title: "Time Management & Organization",
        description:
          "Build disciplined study routines, planning systems, and organizational habits essential for academic success.",
      },
      {
        icon: Users,
        title: "Community Engagement",
        description:
          "Participate in meaningful volunteer initiatives and community-based activities that encourage responsibility and impact.",
      },
      {
        icon: FileText,
        title: "Essay Skill Foundations",
        description:
          "Develop early writing fluency through guided essay exercises that focus on structure, clarity, and self-expression.",
      },
      {
        icon: Briefcase,
        title: "Internships & Enrichment Programs",
        description:
          "Explore age-appropriate internships, shadowing opportunities, and pre-college programs, with emphasis during Grade 10.",
      },
      {
        icon: Calendar,
        title: "Summer Planning & Progress Tracking",
        description:
          "Design purposeful summer plans supported by curated activities and ongoing tracking of academic and personal development.",
      },
    ],
  };

  const applicationJourneyData = {
    heading: "Your 9th–10th Grade Journey at a Glance",
    description:
      "A structured two-year roadmap designed to strengthen academics, support interest exploration, develop early leadership, and prepare students for a focused and confident entry into Grade 11.",
    backgroundImageSrc:
      "/images/services/9th-10th-grade/application-journey-bg.png",
    phases: [
      {
        icon: School,
        title: "Months 1–2 / Academic Orientation & Foundations",
        content:
          "Establish academic benchmarks, reinforce effective study routines, and identify clubs and activities for early exploration.",
      },
      {
        icon: Search,
        title: "Months 3–5 / Introductory Research & Skill Building",
        content:
          "Complete a first guided research activity and begin age-appropriate certification or skill-based coursework.",
      },
      {
        icon: Trophy,
        title: "Months 6–8 / Early Competitions & Academic Challenges",
        content:
          "Participate in science fairs, hackathons, or entry-level competitions to build experience, confidence, and problem-solving skills.",
      },
      {
        icon: Pencil,
        title: "Months 9–10 / Writing & Presentation Foundations",
        content:
          "Develop core writing, speaking, and presentation skills through structured practice and feedback.",
      },
      {
        icon: Calendar,
        title: "Months 11–12 / Summer Planning & Grade 10 Readiness",
        content:
          "Evaluate summer opportunities and define priorities to support a smooth transition into Grade 10.",
      },
      {
        icon: GraduationCap,
        title: "Grade 10: Months 1-2 / Test Prep & Course Planning",
        content:
          "Begin PSAT preparation and finalize advanced course selections to strengthen academic momentum.",
      },
      {
        icon: Lightbulb,
        title: "Grade 10: Months 3-5 / Research or Deepening Project",
        content:
          "Launch a more rigorous research initiative or deepen commitment to a long-term academic or personal project.",
      },
      {
        icon: Award,
        title:
          "Grade 10: Months 6–8 / Competitions, Certifications & Applied Experience",
        content:
          "Participate in higher-level competitions and targeted skill certifications, with optional exposure to internships or structured programs.",
      },
      {
        icon: Users,
        title:
          "Grade 10: Months 9–10 / Leadership Development & Activity Impact",
        content:
          "Step into leadership roles and increase responsibility within chosen activities to demonstrate sustained involvement.",
      },
      {
        icon: Target,
        title:
          "Grade 10: Months 11–12 / Strategic Summer Planning & Grade 11 Transition",
        content:
          "Design a high-impact summer plan and prepare academically and organizationally for the increased rigor of Grade 11.",
      },
    ],
  };

  const mentorshipData = {
    badge: "Mentorship",
    heading: "Complete, Personalized Application Mentorship",
    description:
      "A structured, professional model that guides students through every stage of the college admissions journey with clarity and expert support.",
    mentorshipImageSrc: "/images/services/9th-10th-grade/mentorship.png",
    mentorshipImageAlt: "Mentorship for 9th-10th grade",
    features: [
      {
        icon: Search,
        title: "Profile Building & College Exploration",
        description:
          "Start with a deep evaluation of academic strengths, interests, and goals. Explore 20+ curated universities including Ivy League schools. Build a clear understanding of what colleges are looking for and how to position yourself authentically.",
      },
      {
        icon: Pencil,
        title: "Essay Foundations & Writing Development",
        description:
          "Use guided essay exercises, writing workshops, and feedback to build confidence in expressing your voice. Develop foundational storytelling skills and authentic communication before senior-year application essays.",
      },
      {
        icon: Target,
        title: "Activity Strategy & Leadership Planning",
        description:
          "Identify meaningful clubs and activities aligned with your interests. Map out early leadership pathways and help you build a profile demonstrating initiative, commitment, and genuine passion over the two-year journey.",
      },
    ],
  };

  const pricingPlansData = {
    badge: "Pricing Plans",
    heading: "Plans that fit your scale",
    note: "Note: All plans include onboarding and monthly mentor reports.",
    plans: [
      {
        title: "9th-10th Grade Standard Program",
        features: ["Feature 1", "Feature 2", "Feature 3"],
      },
      {
        title: "9th-10th Grade Premium Program",
        includesText: "Everything in Standard plus....",
        features: ["Feature 4", "Feature 5"],
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
