"use client";

import { ChevronLeftIcon, ChevronRightIcon, Link } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const features = [
  {
    hint: "1/3 Why MBA Consulting Matters",
    image: "/images/mba/features/feature-1.png",
    title: "Why MBA Consulting Matters",
    description:
      "Even highly qualified candidates can face challenges in gaining admission to top MBA programs. Expert MBA consulting provides strategic guidance, personalized insights, and actionable advice to showcase leadership, achievements, and career potential, increasing your chances of acceptance at M7, Ivy League, and other elite schools.",
    button: {
      text: "Book your free consultation",
      href: "https://meet.openadmits.com/#/IvyLeague",
    },
  },
  {
    hint: "2/3 Our MBA Consulting Services",
    image: "/images/mba/features/feature-2.png",
    title: "Our MBA Consulting Services (Overview)",
    description:
      "OpenAdmits provides comprehensive MBA admissions consulting designed to maximize your chances at top programs. Each service is tailored to your profile, goals, and target schools, ensuring a strategic approach throughout the application journey. Key Services: Comprehensive MBA Packages, Deferred MBA Packages, EMBA Packages, MBA Interview Preparation, and MBA Ding Analysis.",
    button: {
      text: "Book your free consultation",
      href: "https://meet.openadmits.com/#/IvyLeague",
    },
  },
  {
    hint: "3/3 Why Choose Us",
    image: "/images/mba/features/feature-3.png",
    title: "Why Choose Us?",
    description:
      "OpenAdmits combines deep admissions expertise with personalized guidance to help applicants maximize their chances at top MBA programs. With a proven track record, focused attention, and a holistic approach, we ensure every element of your application is strategically optimized. Key Differentiators: Experienced Consultants, Proven Success, Personalized Approach, and Comprehensive Guidance.",
    button: {
      text: "Book your free consultation",
      href: "https://meet.openadmits.com/#/IvyLeague",
    },
  },
];

export function FeaturesSection() {
  const [api, setApi] = useState<CarouselApi | null>(null);

  return (
    <section className="py-16 lg:py-24 px-4 bg-[#FBF7EC]">
      <Carousel className="w-full max-w-7xl mx-auto" setApi={setApi}>
        <CarouselContent>
          {features.map((feature) => (
            <CarouselItem key={feature.hint}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="max-w-180 mx-auto my-auto">
                  <div className="mb-3 flex items-center justify-center lg:justify-start gap-x-2 relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => api?.scrollPrev()}
                    >
                      <ChevronLeftIcon />
                    </Button>
                    <p className="text-center lg:text-left text-base font-semibold text-[#004182]">
                      {feature.hint}
                    </p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => api?.scrollNext()}
                    >
                      <ChevronRightIcon />
                    </Button>
                  </div>
                  <h3 className="mb-12 text-[40px] leading-tight font-bold font-serif text-[#181D27]">
                    {feature.title}
                  </h3>
                  <p className="mb-12 text-lg text-[#535862]">
                    {feature.description}
                  </p>
                  <Button
                    asChild
                    className="w-fit p-6 rounded-full bg-[#F4E7C5] text-[#181D27]"
                    size="lg"
                  >
                    <Link href={feature.button.href} target="_blank">
                      {feature.button.text}
                      <ChevronRightIcon />
                    </Link>
                  </Button>
                </div>
                <div className="relative h-60 lg:h-160 w-full lg:w-120">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-transparent border-none hidden lg:flex" />
        <CarouselNext className="bg-transparent border-none hidden lg:flex" />
      </Carousel>
    </section>
  );
}
