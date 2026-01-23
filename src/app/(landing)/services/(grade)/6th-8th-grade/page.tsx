import {
  Award,
  BookOpen,
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
  title: "6th-8th Grade Admissions Consulting – Expert Guidance",
  description:
    "Get expert guidance and consulting services for 6th-8th grade students. Personalized support to help students prepare for their academic journey.",
  keywords: [
    "6th grade admissions",
    "7th grade admissions",
    "8th grade admissions",
    "middle school admissions",
    "grade school consulting",
  ],
};

export default async function Page() {
  const { data: recentPosts } = await getRecentPosts();
  const faqs = [
    {
      question: "Is middle school too early to begin Ivy League preparation?",
      answer:
        "Not at all. Grades 6–8 are the ideal time to build academic skills, confidence, curiosity, and habits that directly influence future performance. Our ivy preparation services for 6th grade students are age-appropriate and focus on foundations not pressure.",
    },
    {
      question: "What does college preparation look like for middle schoolers?",
      answer:
        "At this stage, college preparation for students means strengthening core academics, developing study habits, exploring interests, building communication skills, and learning how to manage responsibilities. We focus on long-term readiness, not admissions tasks.",
    },
    {
      question: "How personalized is the 6th–8th grade program?",
      answer:
        "Every student receives individualized college preparation guidance based on their learning style, academic strengths, interests, and confidence levels. Monthly goals and activities are tailored to ensure steady development.",
    },
    {
      question: "How often will my child meet with a mentor?",
      answer:
        "Students typically meet weekly for 1:1 mentoring. Sessions include academic support, communication development, activity guidance, and readiness planning. Additional check-ins may be scheduled based on student progress.",
    },
    {
      question:
        "Does this program help with building an early profile for high school and beyond?",
      answer:
        "Yes. While we keep expectations age-appropriate, students begin light activity tracking, small projects, and interest exploration helping them form the early foundation of a future academic and extracurricular profile.",
    },
    {
      question:
        "What changes should I expect to see in my child after joining the program?",
      answer:
        "Parents commonly report stronger study habits, more confidence, improved writing and communication skills, clearer interests, better organization, and reduced academic stress. By Grade 9, students enter high school significantly more prepared.",
    },
  ];

  const { data: recentCaseStudies } = await getRecentCaseStudies();

  const heroData = {
    title: "Build Skills, Confidence & Academic Readiness",
    description:
      "Expert-led ivy preparation services for 6th grade students designed to build academic foundations, strengthen habits, and nurture early interests that support future success at top high schools and eventually, competitive universities.\n\nStart your child's college preparation journey early with structured mentorship from Open Admits.\n\n500+ Students Mentored • Research & Competitions • Early Profile Building",
    downloadChecklistLink: "https://meet.openadmits.com/#/IvyLeague",
    downloadChecklistText: "Download Application Checklist",
    bookConsultationLink: "https://meet.openadmits.com/#/IvyLeague",
    bookConsultationText: "Book Your Free Consultation",
    heroImageSrc: "/images/services/6th-8th-grade/hero.png",
    heroImageAlt: "6th-8th grade students",
  };

  const aboutData = {
    heading: "Build Early Skills and Long-Term Academic Readiness",
    paragraphs: [
      "Our 6th–8th Grade Program strengthens academic skills, builds productive routines, and encourages curiosity through guided exploration.",
      "Students develop foundational abilities in reading, writing, math reasoning, and critical thinking—skills that directly shape confidence and performance in high school.",
      "With age-appropriate college preparation guidance, students grow intellectually while becoming ready for Grade 9 and beyond.",
    ],
    ctaLink: "https://meet.openadmits.com/#/IvyLeague",
    ctaText: "Book Your Free Consultation",
    aboutImageSrc: "/images/services/6th-8th-grade/about.png",
    aboutImageAlt: "About 6th-8th grade",
  };

  const keyOutcomesData = {
    heading: "Key Outcomes of Our Program",
    outcomes: [
      {
        title: "Academic Stability",
        description:
          "Build consistent study habits, time-management skills, and structured routines that support long-term academic performance.",
      },
      {
        title: "Early Research Exposure",
        description:
          "Develop curiosity-driven exploration and foundational research skills that foster independent thinking.",
      },
      {
        title: "Clubs & Exploration Activities",
        description:
          "Explore school clubs, competitions, and enrichment programs forming the groundwork for future college preparation for students in later years.",
      },
      {
        title: "Writing & Communication Skills",
        description:
          "Strengthen reading comprehension, writing clarity, vocabulary, and presentation skills essential for high school success.",
      },
      {
        title: "Interest Discovery",
        description:
          "Identify natural interests and academic strengths through guided exposure and exploration.",
      },
      {
        title: "Early Profile Awareness",
        description:
          "Learn basic activity tracking, reflection, and project-based learning building awareness for long-term academic and extracurricular development.",
      },
      {
        title: "Transition Planning for High School",
        description:
          "Enter Grade 9 with stronger habits, clearer expectations, and increased academic confidence.",
      },
    ],
  };

  const whoIsThisForData = {
    heading: "Who This Program Is For",
    subheading:
      "Designed for students seeking early academic structure, skill development, and guided exploration before high school begins.",
    audiences: [
      {
        title: "Students in Grades 6–8 Seeking Structure",
        description:
          "Build study habits, academic confidence, and consistent routines that support long-term success.",
      },
      {
        title: "Parents Seeking Early Academic & Activity Guidance",
        description:
          "Ensure your child receives balanced development across academics, communication skills, curiosity, and early interests.",
      },
      {
        title: "Students Exploring Interests",
        description:
          "Gain guided exposure to clubs, hobbies, competitions, and enrichment programs—building clarity and confidence.",
      },
    ],
  };

  const whyMattersData = {
    heading: "Why 6th to 8th Grade Matters",
    description:
      "Middle school shapes the academic foundations, reasoning skills, independence, and habits that directly impact high school GPA and confidence. Early structure reduces stress, builds resilience, and supports stronger performance throughout Grades 9th to 12th.",
    steps: [
      {
        title: "Skill Building (Grades 6–7)",
        description:
          "Strengthen academics, organizational skills, and curiosity through structured exploration—an ideal stage for introducing ivy preparation services for 6th grade students.",
      },
      {
        title: "Clarity & Confidence (Grade 8)",
        description:
          "Develop stronger writing, communication, and academic readiness before entering high school.",
      },
      {
        title: "Ready for High School and Beyond",
        description:
          "Enter Grade 9 with the habits, early interests, and confidence needed for advanced coursework and future leadership.",
      },
    ],
  };

  const programFeaturesData = {
    badge: "Program Features",
    heading: "What's Included in the 6th–8th Grade Program",
    description:
      "A structured, age-appropriate curriculum designed to strengthen academic foundations, build confidence, and support long-term college preparation for students.",
    features: [
      {
        icon: BookOpen,
        title: "Academic Foundations & Support",
        description:
          "Strengthen reading, writing, and math fundamentals. Build conceptual clarity and disciplined study practices.",
      },
      {
        icon: FileText,
        title: "Study Skills & Academic Organization",
        description:
          "Develop routines for homework, note-taking, planning, and self-management.",
      },
      {
        icon: Search,
        title: "Introduction to Research & Inquiry",
        description:
          "Engage in age-appropriate research activities that promote curiosity and independent thinking.",
      },
      {
        icon: Users,
        title: "Clubs, Activities & Interest Exploration",
        description:
          "Explore clubs, competitions, and enrichment programs to identify passions and emerging strengths.",
      },
      {
        icon: Award,
        title: "Certifications & Skill Development",
        description:
          "Take age-appropriate courses across STEM, arts, business, and creative domains.",
      },
      {
        icon: Trophy,
        title: "Entry-Level Competitions & Challenges",
        description:
          "Participate in spelling bees, math contests, science fairs, quizzes, and more.",
      },
      {
        icon: Pencil,
        title: "Writing & Communication Skills",
        description:
          "Improve grammar, writing clarity, structure, and verbal articulation.",
      },
      {
        icon: Users,
        title: "Community Engagement & Service",
        description:
          "Take part in light volunteering and school-based service projects to build empathy and responsibility.",
      },
      {
        icon: Lightbulb,
        title: "Early Project-Based Learning",
        description:
          "Execute small academic or creative projects to build initiative and independent thinking.",
      },
      {
        icon: GraduationCap,
        title: "High School Readiness & Transition Planning",
        description:
          "Prepare for Grade 9 through academic planning, expectation-setting, and habit development.",
      },
    ],
  };

  const applicationJourneyData = {
    heading: "Your 6th–8th Grade Journey at a Glance",
    description:
      "A structured roadmap that guides students through middle school with confidence-building and skill development.",
    backgroundImageSrc:
      "/images/services/6th-8th-grade/application-journey-bg.png",
    phases: [
      {
        icon: School,
        title: "Grades 6–7: Foundations & Exploration",
        content:
          "Develop academic fundamentals, strong routines, and intellectual curiosity. This stage emphasizes confidence-building over pressure, aligning with the goals of early college preparation guidance.",
      },
      {
        icon: Target,
        title: "Grade 8: Interest Development & Readiness",
        content:
          "Refine communication skills, clarify interests, and prepare for high school expectations.",
      },
      {
        icon: GraduationCap,
        title: "Transition to Grade 9: A Confident Start",
        content:
          "Enter high school with disciplined habits, early interests, and clarity of academic direction.",
      },
    ],
  };

  const mentorshipData = {
    badge: "Mentorship",
    heading: "Complete, Personalized Academic Mentorship",
    description:
      "A structured model that guides students through every stage of their middle school journey with clarity, encouragement, and expert feedback.",
    mentorshipImageSrc: "/images/services/6th-8th-grade/mentorship.png",
    mentorshipImageAlt: "Mentorship for 6th-8th grade",
    features: [
      {
        icon: Search,
        title: "Academic Assessment & Skill Building",
        description:
          "Identify strengths, gaps, and learning styles to build a personalized development roadmap.",
      },
      {
        icon: Users,
        title: "Guidance & Confidence Development",
        description:
          "Weekly mentorship focused on academics, curiosity, communication, and emotional readiness.",
      },
      {
        icon: Compass,
        title: "Transition Planning & Readiness Support",
        description:
          "Prepare for Grade 9 with clear expectations, activity planning, organizational habits, and mindset development.",
      },
    ],
  };

  const pricingPlansData = {
    badge: "Pricing Plans",
    heading: "Plans that fit your scale",
    note: "Note: All plans include onboarding and monthly mentor reports.",
    plans: [
      {
        title: "6th-8th Grade Standard Program",
        features: ["Feature 1", "Feature 2", "Feature 3"],
      },
      {
        title: "6th-8th Grade Premium Program",
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
