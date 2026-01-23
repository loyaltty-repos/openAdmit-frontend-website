import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function UnderGraduateServicesHero() {
  return (
    <section className="bg-[#00162B]">
      <div className="grid lg:grid-cols-2 items-stretch max-w-7xl mx-auto px-4 sm:px-16">
        <div className="flex">
          <div className="py-16 lg:py-24 px-4 lg:px-8 my-auto space-y-8 max-w-3xl">
            <h1 className="text-[40px] leading-tight lg:text-[56px] font-bold font-serif text-white">
              Achieve Your Dream College with Expert Undergraduate Admission
              Consulting
            </h1>
            <p className="text-lg lg:text-xl text-[#C5CACF]">
              Receive personalized guidance to navigate the college application
              process and secure admissions at top universities.
            </p>
            <div>
              <Button
                asChild
                className="h-auto px-6 py-4 rounded-full bg-[#F4E7C5] text-[#181D27] hover:bg-[#F4E7C5]/80"
              >
                <Link
                  href="https://meet.openadmits.com/#/IvyLeague"
                  target="_blank"
                >
                  Book Your Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative min-h-80 lg:min-h-180 w-full">
          <Image
            src="/images/services/undergraduate-admissions/hero.png"
            alt="Image of bachelors students going to school"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
