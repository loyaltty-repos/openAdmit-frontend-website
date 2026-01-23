import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function UnderGraduateServicesAbout() {
  return (
    <section className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-16">
      <div className="grid lg:grid-cols-2 items-stretch">
        <div className="flex">
          <div className="py-16 lg:py-24 px-4 lg:px-8 my-auto space-y-8 max-w-3xl">
            <h2 className="text-[32px] leading-tight lg:text-[40px] font-bold text-[#181D27]">
              Why Choose Our Undergraduate Consulting?
            </h2>
            <p className="text-lg lg:text-xl text-[#535862]">
              Open Admits combines expert insights, individualized planning, and
              proven strategies to guide students through every step of the
              college admissions process, ensuring applications are strong,
              competitive, and impactful.
            </p>
            <p className="text-lg lg:text-xl text-[#535862]">
              <span className="font-medium">Expert Consultants:</span> Decades
              of experience guiding students to elite colleges.
            </p>
            <p className="text-lg lg:text-xl text-[#535862]">
              <span className="font-medium">Tailored Guidance:</span> Strategies
              customized for your unique profile and goals.
            </p>
            <p className="text-lg lg:text-xl text-[#535862]">
              <span className="font-medium">Comprehensive Support:</span>{" "}
              Assistance with essays, applications, and interviews.
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
            src="/images/services/undergraduate-admissions/about.jpg"
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
