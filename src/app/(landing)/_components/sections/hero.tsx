"use client";

import Autoplay from "embla-carousel-autoplay";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
    hint: "Next-Gen Scholars",
    image: "/images/hero/feature-4.jpg",
    title: "Guiding Future Leaders to Top Global Universities",
    description:
      "From Ivy League to Oxbridge, Open Admits empowers high school students to build exceptional profiles, craft authentic essays, and secure admits to world-class undergraduate programs through strategic, story-driven guidance.",
    primaryCtaLabel: "Book Your Free Consultation",
    primaryCtaHref: "https://meet.openadmits.com/#/IvyLeague",
    secondaryCtaLabel: "View Success Stories",
    secondaryCtaHref: "/success-stories",
  },
  {
    hint: "Global MBA Admissions Expertise",
    image: "/images/hero/feature-2.png",
    title: "Best Boutique MBA Admission Consulting Services",
    description:
      "Open Admits helps ambitious professionals earn admission to the world’s most competitive MBA programs including Harvard, Wharton, and Stanford. With personalized guidance from Ivy League-trained consultants, we craft compelling applications that showcase your unique strengths and transform aspirations into admissions success at top global business schools.",
    primaryCtaLabel: "Book Your Free Consultation",
    primaryCtaHref: "https://meet.openadmits.com/#/IvyLeague",
    secondaryCtaLabel: "View Success Stories",
    secondaryCtaHref: "/success-stories",
  },
  {
    hint: "",
    image: "/images/hero/feature-1.png",
    title: "Expert Admissions Consulting for Ivy League Schools",
    description:
      "Open Admits delivers personalized Ivy League admissions consulting with alumni mentors and expert counselors, guiding students into Harvard, Stanford, Columbia, Duke, and beyond.",
    primaryCtaLabel: "Book Your Free Consultation",
    primaryCtaHref: "https://meet.openadmits.com/#/IvyLeague",
    secondaryCtaLabel: "View Success Stories",
    secondaryCtaHref: "/success-stories",
  },
  {
    hint: "130+ Admits & $7M+ in Scholarships",
    image: "/images/hero/feature-3.png",
    title: "Trusted by Top Applicants Worldwide",
    description:
      "Our students have earned admission to the world’s most competitive MBA, MiM, and MiF programs securing over $7M in scholarships. Guided by Ivy League admissions experts, they’ve unlocked opportunities aligned with their passions and goals. This success reflects our commitment to delivering transformative, results-driven admissions consulting.",
    primaryCtaLabel: "Book Your Free Consultation",
    primaryCtaHref: "https://meet.openadmits.com/#/IvyLeague",
    secondaryCtaLabel: "View Success Stories",
    secondaryCtaHref: "/success-stories",
  },
];

export function HeroSection() {
  const [api, setApi] = useState<CarouselApi | null>(null);

  return (
    <section className="py-16 lg:py-24 px-4 bg-[url('/images/hero/bg.png')] bg-cover bg-center">
      <Carousel
        className="w-full max-w-7xl mx-auto"
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
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
                      className="sm:hidden"
                    >
                      <ChevronLeftIcon />
                    </Button>
                    <p className="text-center lg:text-left text-base font-semibold text-[#99C4EF]">
                      {feature.hint}
                    </p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => api?.scrollNext()}
                      className="sm:hidden"
                    >
                      <ChevronRightIcon />
                    </Button>
                  </div>
                  <h3 className="mb-12 text-5xl leading-tight font-bold font-serif text-white">
                    {feature.title}
                  </h3>
                  <p className="mb-12 text-[#99C4EF]">{feature.description}</p>

                  <div className="flex flex-col gap-y-4">
                    <Button
                      asChild
                      className="w-full sm:w-fit p-6 rounded-full bg-[#F4E7C5] hover:bg-[#F4E7C5]/80 text-[#181D27]"
                      size="lg"
                    >
                      <Link href={feature.primaryCtaHref} target="_blank">
                        {feature.primaryCtaLabel}
                        <ChevronRightIcon />
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="bg-transparent p-6 hover:bg-transparent border-[#F2E3BB] text-[#F2E3BB] hover:text-[#F2E3BB] w-full sm:w-fit rounded-full"
                    >
                      <Link href={feature.secondaryCtaHref}>
                        {feature.secondaryCtaLabel}
                        <ChevronRightIcon className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
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
        <CarouselPrevious className="bg-transparent border-none hidden lg:flex text-white" />
        <CarouselNext className="bg-transparent border-none hidden lg:flex text-white" />
      </Carousel>
    </section>
  );
}
