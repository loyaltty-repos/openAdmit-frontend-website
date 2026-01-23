import {
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  ClipboardCheck,
  Clock,
  Compass,
  GraduationCap,
  Lightbulb,
  Pencil,
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
  title: "11th Grade Admissions Consulting – Expert Guidance",
  description:
    "Get expert guidance and consulting services for 11th grade students. Personalized support to help students prepare for their academic journey.",
  keywords: [
    "11th grade admissions",
    "junior year admissions",
    "high school junior consulting",
  ],
};

export default async function Page() {
  const { data: recentPosts } = await getRecentPosts();
  const faqs = [
    {
      question: "Why is 11th grade so important for college admissions?",
      answer:
        "11th grade is the most heavily weighted year in admissions. Colleges evaluate junior-year grades, course rigor, test scores, leadership, and activities to understand academic readiness. Strong college prep for 11th grade ensures students enter senior year competitive and confident.",
    },
    {
      question: "What does Ivy League preparation look like for juniors?",
      answer:
        "Ivy prep for 11th grade focuses on academic excellence, advanced coursework, competitive test scores, meaningful leadership, and a strong activity narrative. Juniors also begin early essay foundations and develop their personal theme for senior-year applications.",
    },
    {
      question: "Do you help with SAT and ACT preparation?",
      answer:
        "Yes. Students receive personalized SAT prep for 11th grade and ACT prep for 11th grade, including diagnostic reviews, test timelines, study plans, and score improvement strategies. We also help students determine which exam fits them best.",
    },
    {
      question: "How personalized is the program for each student?",
      answer:
        "Every student receives individualized college counseling for high school juniors based on academic strengths, interests, intended majors, and long-term goals. Monthly reviews and progress updates keep the program tailored throughout the year.",
    },
    {
      question:
        "Will this program help with internships, research, and leadership activities?",
      answer:
        "Absolutely. Students receive structured guidance for research programs, internships, summer opportunities, competitions, and leadership development essential components of high school college prep for selective and Ivy League admissions.",
    },
    {
      question:
        "What if my child is late starting in 11th grade is it still worth enrolling?",
      answer:
        "Yes. The second half of junior year is crucial for college application help for 11th grade, including test prep, academic improvement, leadership development, and pre-senior planning. Starting now still gives students time to build a competitive profile before senior year.",
    },
  ];

  const { data: recentCaseStudies } = await getRecentCaseStudies();

  const heroData = {
    title: "Build a Competitive Junior-Year Profile for Selective Colleges",
    description:
      "A high-impact college prep for 11th grade program designed to strengthen academics, test readiness, leadership, and application foundations giving juniors a decisive advantage before senior year begins.\n\nExpert mentorship for ivy prep for 11th grade, including research guidance, internship planning, course selection, and SAT & ACT prep for juniors.\n\n500+ Students Mentored | Weekly 1:1 Guidance | Research & Internship Support | Early Application Strategy",
    downloadChecklistLink: "https://meet.openadmits.com/#/IvyLeague",
    downloadChecklistText: "Download 11th Grade Roadmap",
    bookConsultationLink: "https://meet.openadmits.com/#/IvyLeague",
    bookConsultationText: "Book a Free Consultation",
    heroImageSrc: "/images/services/11th-grade/hero.png",
    heroImageAlt: "11th grade students",
  };

  const aboutData = {
    heading: "Build the Foundation for a Strong Senior-Year Application",
    paragraphs: [
      "11th grade is the most influential year in college admissions. Grades, course rigor, test scores, and activities from this year play a major role in how colleges evaluate applicants. Our program offers expert college guidance for 11th grade, helping students balance academics, test preparation, and profile development with precision and clarity.",
      "With structured college counseling for high school juniors, students gain direction, motivation, and a clear path toward competitive and Ivy League admissions.",
    ],
    ctaLink: "https://meet.openadmits.com/#/IvyLeague",
    ctaText: "Book Free Consultation",
    aboutImageSrc: "/images/services/11th-grade/about.png",
    aboutImageAlt: "About 11th grade",
  };

  const keyOutcomesData = {
    heading: "Key Outcomes of Our Program",
    outcomes: [
      {
        title: "Academic Performance and Accountability",
        description:
          "Consistent grade monitoring, improvement plans, and academic strategy to sustain strong performance.",
      },
      {
        title: "12th Grade Course Planning",
        description:
          "Strategic planning of senior-year courses to maximize rigor and admissions strength.",
      },
      {
        title: "SAT/ACT/PSAT Strategy",
        description:
          "Personalized SAT prep for 11th grade, ACT prep for 11th grade, diagnostic analysis, pacing guidance, and test timelines.",
      },
      {
        title: "Research Guidance",
        description:
          "Identification and support for joining competitive research programs aligned with student interests.",
      },
      {
        title: "Internship Planning",
        description:
          "Curated internship options and planning assistance to strengthen real-world experience.",
      },
      {
        title: "Extracurricular and Leadership Planning",
        description:
          "Guided development of leadership roles and meaningful activities tailored to admissions goals.",
      },
      {
        title: "Persona and Narrative Development",
        description:
          "Build early clarity on academic direction, strengths, and positioning for future applications.",
      },
      {
        title: "Activity and Community Building",
        description:
          "Structured guidance to expand impact-based activities and consistent involvement.",
      },
      {
        title: "Passion Project Development",
        description:
          "Support in creating and executing a personal project that enhances the student's profile.",
      },
    ],
  };

  const whoIsThisForData = {
    heading: "Who This Program Is For",
    subheading:
      "A structured, long-term guidance program built for juniors preparing for selective and Ivy League admissions.",
    audiences: [
      {
        title: "11th Graders Targeting Top Colleges",
        description:
          "Strategic high school college prep to build a strong foundation before application season.",
      },
      {
        title: "Parents Wanting Structured Oversight",
        description:
          "Clear plans, consistent updates, academic review, and expert guidance throughout the year.",
      },
      {
        title: "Students Needing Direction and Motivation",
        description:
          "Academic accountability, activity structure, and personalized mentorship.",
      },
    ],
  };

  const whyMattersData = {
    heading: "Why 11th Grade Matters",
    description:
      "11th grade is the defining year of a student's academic record. Colleges rely heavily on junior-year grades, test performance, extracurricular development, and leadership ability. With expert support, students enter senior year prepared, confident, and highly competitive.",
    steps: [
      {
        title: "11th Grade: Build the Foundation",
        description:
          "Strengthen academics, leadership, test readiness, research experience, and early essays.",
      },
      {
        title: "Summer Before 12th: Strengthen Your Profile",
        description:
          "Pursue internships, research, summer programs, and complete a passion project.",
      },
      {
        title: "12th Grade: Execute Your Strategy",
        description:
          "Start the application year with clarity, competitiveness, and a well-developed profile.",
      },
    ],
  };

  const programFeaturesData = {
    badge: "Program Features",
    heading: "What's Included in the 11th Grade Program",
    description:
      "A comprehensive program designed to build a competitive profile before senior year begins.",
    features: [
      {
        icon: BookOpen,
        title: "Academic Strategy",
        description: "Support for grades, study habits, and course rigor.",
      },
      {
        icon: GraduationCap,
        title: "12th Grade Course Planning",
        description:
          "Guidance for choosing competitive and balanced senior-year courses.",
      },
      {
        icon: ClipboardCheck,
        title: "SAT/ACT/PSAT Prep Strategy",
        description:
          "Personalized SAT & ACT prep for juniors, timelines, and score goals.",
      },
      {
        icon: Search,
        title: "Research Program Support",
        description:
          "Assistance identifying and applying to competitive research opportunities.",
      },
      {
        icon: Briefcase,
        title: "Internships",
        description: "Curated internship options aligned with intended majors.",
      },
      {
        icon: Calendar,
        title: "Summer Programs",
        description:
          "Selection and support for impactful pre-college opportunities.",
      },
      {
        icon: Users,
        title: "Leadership and Extracurricular Development",
        description:
          "Structured planning to strengthen meaningful involvement.",
      },
      {
        icon: Lightbulb,
        title: "Persona Seminar Series",
        description:
          "Monthly sessions to refine academic interests, strengths, and narrative direction.",
      },
      {
        icon: Target,
        title: "Community and Activity Development",
        description:
          "Guidance for building impactful, consistent community engagement.",
      },
      {
        icon: Award,
        title: "Passion Project Planning",
        description:
          "Support in developing and executing a standout personal project.",
      },
      {
        icon: Pencil,
        title: "Early Essay Practice",
        description:
          "Foundational writing exercises to prepare for senior-year essays.",
      },
      {
        icon: Clock,
        title: "Monthly Reviews",
        description: "Regular mentor check-ins with progress adjustments.",
      },
      {
        icon: Compass,
        title: "Summer Activity Planning",
        description: "End-of-year planning for the summer before 12th grade.",
      },
    ],
  };

  const applicationJourneyData = {
    heading: "11th Grade Journey at a Glance",
    description:
      "A structured roadmap that guides juniors through the critical year, building a competitive profile before senior year begins.",
    backgroundImageSrc:
      "/images/services/11th-grade/application-journey-bg.png",
    phases: [
      {
        icon: Search,
        title: "Months 1–2 (Aug–Sep)",
        content:
          "Academic audit, test diagnostics, planning, and early leadership development.",
      },
      {
        icon: Briefcase,
        title: "Months 3–4 (Oct–Nov)",
        content:
          "Pursue research, evaluate internships, and build leadership roles.",
      },
      {
        icon: Trophy,
        title: "Months 5–7 (Dec–Feb)",
        content:
          "Competitions, certifications, activity development, and test preparation.",
      },
      {
        icon: Lightbulb,
        title: "Months 8–9 (Mar–Apr)",
        content:
          "Passion project execution, profile building, and skill-based activities.",
      },
      {
        icon: Pencil,
        title: "Months 10–11 (May–Jun)",
        content:
          "Begin early essay exercises and prepare for selective summer programs.",
      },
      {
        icon: GraduationCap,
        title: "Month 12 (Jul–Aug)",
        content:
          "Transition planning for senior year; finalize academic and activity strategy.",
      },
    ],
  };

  const mentorshipData = {
    badge: "Mentorship",
    heading: "Complete, Personalized Junior-Year Mentorship",
    description:
      "A structured, expert-led mentorship model that guides juniors through academics, activities, and test preparation to build a competitive profile before senior year. Students receive clarity, accountability, and Ivy-aligned direction throughout the year.",
    mentorshipImageSrc: "/images/services/11th-grade/mentorship.png",
    mentorshipImageAlt: "Mentorship for 11th grade",
    features: [
      {
        icon: Search,
        title: "Application Strategy and Profile Review",
        description:
          "Comprehensive evaluation of grades, course rigor, activities, interests, and goals to develop a personalized college prep for 11th grade plan. Academic accountability ensures continuous improvement.",
      },
      {
        icon: ClipboardCheck,
        title: "Testing Strategy and Essay Foundations",
        description:
          "Customized timelines and study plans for SAT prep for 11th grade and ACT prep for 11th grade. Early essay foundation exercises strengthen writing and narrative skills before senior year.",
      },
      {
        icon: Target,
        title: "Application Readiness, Activities and Leadership Guidance",
        description:
          "Structured planning for research programs, internships, summer activities, leadership roles, and long-term extracurricular development. Students receive professional college counseling for high school juniors tailored to selective and Ivy-level admissions.",
      },
    ],
  };

  const pricingPlansData = {
    badge: "Pricing Plans",
    heading: "Plans that fit your scale",
    note: "Note: All plans include onboarding and monthly mentor reports.",
    plans: [
      {
        title: "11th Grade Standard Program",
        features: ["Feature 1", "Feature 2", "Feature 3"],
      },
      {
        title: "11th Grade Premium Program",
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
