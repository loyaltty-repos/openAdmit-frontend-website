import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  description: string;
  downloadChecklistLink: string;
  downloadChecklistText: string;
  bookConsultationLink: string;
  bookConsultationText: string;
  heroImageSrc: string;
  heroImageAlt: string;
}

export function Hero({
  title,
  description,
  downloadChecklistLink,
  downloadChecklistText,
  bookConsultationLink,
  bookConsultationText,
  heroImageSrc,
  heroImageAlt,
}: HeroProps) {
  return (
    <section className="bg-[#00162B]">
      <div className="grid lg:grid-cols-2 gap-x-8 items-stretch max-w-7xl mx-auto pl-4">
        <div className="flex">
          <div className="py-16 lg:py-24 px-4 lg:px-8 my-auto space-y-8 max-w-3xl">
            <h1 className="text-[40px] leading-tight lg:text-[56px] font-bold font-serif text-white">
              {title}
            </h1>
            <p className="text-lg lg:text-xl text-[#C5CACF] whitespace-pre-line">
              {description}
            </p>
            <div className="flex flex-col gap-4">
              <Button
                asChild
                variant="outline"
                className="gap-1 h-auto px-6 py-4 rounded-full border-[#F2E3BB] bg-transparent text-[#F2E3BB] hover:bg-transparent hover:text-[#F2E3BB]"
              >
                <Link href={downloadChecklistLink} target="_blank">
                  {downloadChecklistText}
                  <ChevronRightIcon className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                className="group gap-1 h-auto px-6 py-4 rounded-full bg-[#F4E7C5] text-[#181D27] hover:bg-[#F4E7C5]/80"
              >
                <Link href={bookConsultationLink} target="_blank">
                  {bookConsultationText}
                  <ChevronRightIcon className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative min-h-80 lg:min-h-180 w-full lg:w-[50vw]">
          <Image
            src={heroImageSrc}
            alt={heroImageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
