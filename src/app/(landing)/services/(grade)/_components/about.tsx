import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface AboutProps {
  heading: string;
  paragraphs: string[];
  ctaLink: string;
  ctaText: string;
  aboutImageSrc: string;
  aboutImageAlt: string;
}

export function About({
  heading,
  paragraphs,
  ctaLink,
  ctaText,
  aboutImageSrc,
  aboutImageAlt,
}: AboutProps) {
  return (
    <section className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-16">
      <div className="grid lg:grid-cols-2 items-stretch">
        <div className="flex">
          <div className="py-16 lg:py-24 px-4 lg:px-8 my-auto space-y-8 max-w-3xl">
            <p className="text-[#004182] font-semibold">Our program</p>
            <h2 className="text-[32px] leading-tight lg:text-[40px] font-bold text-[#181D27]">
              {heading}
            </h2>
            {paragraphs.map((paragraph, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: This is ok
              <p key={index} className="text-lg lg:text-xl text-[#535862]">
                {paragraph}
              </p>
            ))}
            <div>
              <Button
                asChild
                size="lg"
                className="w-fit p-6 text-white bg-[#0056AD] hover:bg-[#0056AD]/90"
              >
                <Link href={ctaLink} target="_blank">
                  {ctaText}
                  <ChevronRightIcon />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative min-h-80 lg:min-h-180 w-full">
          <Image
            src={aboutImageSrc}
            alt={aboutImageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
