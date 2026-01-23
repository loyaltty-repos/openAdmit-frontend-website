"use client";

import { ChevronRight, Clock } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Service {
  title: string;
  description: string;
  duration: string;
  ctaText: string;
  ctaLink: string;
}

interface ServiceCategory {
  id: string;
  name: string;
  services: Service[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "college-strategy-reports",
    name: "College Strategy & Reports",
    services: [
      {
        title: "Recommended College Report",
        description:
          "Get a customized list of up to 10 colleges with admission chances based on your profile.",
        duration: "5 days",
        ctaText: "Request Service",
        ctaLink: "#",
      },
      {
        title: "Analysis of College Report",
        description:
          "Review your recommended college list with a counselor for deeper insights.",
        duration: "48 hours",
        ctaText: "Request Service",
        ctaLink: "#",
      },
      {
        title: "REA / ED / EA / RD Counseling",
        description:
          "A 30-minute strategy session to determine the best early or regular application plan.",
        duration: "30 minutes",
        ctaText: "Book Session",
        ctaLink: "#",
      },
      {
        title: "ED College Report",
        description:
          "A curated list of potential Early Decision colleges aligned with your intended major.",
        duration: "3 days",
        ctaText: "Request Service",
        ctaLink: "#",
      },
      {
        title: '"What Are My Chances?" Evaluation',
        description:
          "Get your admission chances for any individual college. (Per college)",
        duration: "48 hours",
        ctaText: "Request Service",
        ctaLink: "#",
      },
    ],
  },
  {
    id: "major-insights-academic-fit",
    name: "Major Insights & Academic Fit",
    services: [
      {
        title: "Major-Level Information",
        description:
          "In-depth information about majors at specific colleges — curriculum, focus areas, and outcomes.",
        duration: "2 days",
        ctaText: "Request Service",
        ctaLink: "#",
      },
      {
        title: "Major-Level Acceptances",
        description:
          "Acceptance trend data for the majors you're considering. (Per college)",
        duration: "2 days",
        ctaText: "Request Service",
        ctaLink: "#",
      },
    ],
  },
  {
    id: "essay-strategy-prompts-counseling",
    name: "Essay Strategy, Prompts & Counseling",
    services: [
      {
        title: "Ranking of UC PIQs",
        description:
          "A ranked list of UC PIQ prompts based on best fit for your strengths.",
        duration: "48 hours",
        ctaText: "Request Service",
        ctaLink: "#",
      },
      {
        title: "Ranking of Common App Prompts",
        description:
          "Identify which Common App prompts best match your profile and story.",
        duration: "48 hours",
        ctaText: "Request Service",
        ctaLink: "#",
      },
      {
        title: "Essay Counseling — UC PIQs",
        description:
          "A one-hour session explaining expectations and key elements for compelling PIQs.",
        duration: "1 hour",
        ctaText: "Book Session",
        ctaLink: "#",
      },
      {
        title: "Essay Counseling — Common App Personal Essay",
        description:
          "A one-hour session on narrative direction, structure, tone, and key content.",
        duration: "1 hour",
        ctaText: "Book Session",
        ctaLink: "#",
      },
    ],
  },
  {
    id: "essay-drafting-services",
    name: "Essay Drafting Services (Handwritten)",
    services: [
      {
        title: "Draft Personalized Essays — UCs (5 Essays)",
        description:
          "Five fully drafted UC essays + ranking report. No revisions included.",
        duration: "48–72 hours",
        ctaText: "Request Service",
        ctaLink: "#",
      },
      {
        title: "Draft Personalized Essays — Common App (2 Essays)",
        description:
          "Two fully drafted Common App personal essays + ranking report. No revisions included.",
        duration: "24–48 hours",
        ctaText: "Request Service",
        ctaLink: "#",
      },
      {
        title: "Draft Personalized Essays — Any 3 Colleges",
        description:
          "Three fully drafted essays tailored to your selected colleges. No revisions included.",
        duration: "48–72 hours",
        ctaText: "Request Service",
        ctaLink: "#",
      },
    ],
  },
  {
    id: "essay-review-editing",
    name: "Essay Review & Editing",
    services: [
      {
        title: "Advanced Essay Review",
        description:
          "Senior counselors refine up to two essays per hour. Drafts required.",
        duration: "Hourly",
        ctaText: "Request Service",
        ctaLink: "#",
      },
      {
        title: "Premium Essay Review",
        description:
          "Former admissions officers review up to two essays per hour. Drafts required.",
        duration: "Hourly",
        ctaText: "Request Service",
        ctaLink: "#",
      },
    ],
  },
  {
    id: "resume-recommendation-support",
    name: "Resume & Recommendation Support",
    services: [
      {
        title: "Resume Preparation",
        description:
          "A professionally created resume tailored to your academic and extracurricular profile.",
        duration: "3 days",
        ctaText: "Request Service",
        ctaLink: "#",
      },
      {
        title: "LOR Strategy + Templates",
        description:
          "Identify the right recommenders and receive custom templates to guide their letters.",
        duration: "3 days",
        ctaText: "Request Service",
        ctaLink: "#",
      },
    ],
  },
  {
    id: "scholarships-funding",
    name: "Scholarships & Funding",
    services: [
      {
        title: "Scholarship Report",
        description:
          "A curated list of scholarships matched to your profile, interests, and eligibility.",
        duration: "7 days",
        ctaText: "Request Service",
        ctaLink: "#",
      },
    ],
  },
  {
    id: "decision-waitlist-strategy",
    name: "Decision & Waitlist Strategy",
    services: [
      {
        title: "College Waitlist Strategy",
        description:
          "Learn how to respond effectively and strengthen your waitlist position.",
        duration: "30 minutes",
        ctaText: "Book Session",
        ctaLink: "#",
      },
      {
        title: "College Acceptance Strategy",
        description:
          "Plan your final choices with a mentor — including Plan A, Plan B, and Plan C.",
        duration: "30 minutes",
        ctaText: "Book Session",
        ctaLink: "#",
      },
      {
        title: "College Comparison (2 Colleges)",
        description:
          "Compare two colleges to determine the best academic and career fit.",
        duration: "48 hours",
        ctaText: "Request Service",
        ctaLink: "#",
      },
    ],
  },
  {
    id: "complete-senior-year-package",
    name: "Complete Senior-Year Package",
    services: [
      {
        title: "Whole 12th Grade Package",
        description:
          "UCs + Common App + up to 9 colleges + all services (#1–14) + 6 hours of advanced essay review.",
        duration: "Full-year program",
        ctaText: "Request Service",
        ctaLink: "#",
      },
    ],
  },
];

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>(
    serviceCategories[0].id,
  );
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let mostVisibleId = serviceCategories[0].id;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleId = entry.target.id;
          }
        });

        if (maxRatio > 0) {
          setActiveCategory(mostVisibleId);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    // Wait for DOM to be ready, then observe all category sections
    const timeoutId = setTimeout(() => {
      serviceCategories.forEach((category) => {
        const element = document.getElementById(category.id);
        if (element && observerRef.current) {
          observerRef.current.observe(element);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      setActiveCategory(categoryId);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-[#FBF7EC] py-16 sm:py-24 px-4 sm:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#181D27] mb-12">
          A la carte services
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="hidden lg:block lg:w-64 shrink-0 lg:sticky lg:top-20 self-start">
            <nav className="space-y-2">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => scrollToCategory(category.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${
                    activeCategory === category.id
                      ? "bg-[#0056AD] text-white"
                      : "text-[#181D27] hover:bg-gray-100"
                  }`}
                >
                  <span className="font-medium">{category.name}</span>
                  {activeCategory === category.id && (
                    <ChevronRight className="size-4" />
                  )}
                </button>
              ))}
            </nav>
          </aside>

          <div className="flex-1 space-y-12">
            {serviceCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-8">
                <h3 className="text-2xl font-bold text-[#181D27] mb-6">
                  {category.name}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service) => (
                    <Card
                      key={service.title}
                      className="bg-white border-gray-200 shadow-sm"
                    >
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold text-[#181D27]">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-[#535862]">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2 text-[#535862]">
                          <Clock className="size-4" />
                          <span className="text-sm">{service.duration}</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          asChild
                          variant="link"
                          className="text-[#0056AD] hover:text-[#0056AD]/90 p-0 h-auto font-medium"
                        >
                          <Link
                            href={service.ctaLink}
                            className="flex items-center gap-2"
                          >
                            {service.ctaText}
                            <ChevronRight className="size-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
