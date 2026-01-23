import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function GraduateServicesAbout() {
  return (
    <section className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-16">
      <div className="grid lg:grid-cols-2 items-stretch">
        <div className="flex">
          <div className="py-16 lg:py-24 px-4 lg:px-8 my-auto space-y-8 max-w-3xl">
            <h2 className="text-[32px] leading-tight lg:text-[40px] font-bold text-[#181D27]">
              Why Choose Our Specialized Graduate Consulting
            </h2>
            <p className="text-lg lg:text-xl text-[#535862]">
              At Open Admits, we specialize in crafting compelling narratives
              that resonate with admissions committees. Our expert consultants
              provide tailored strategies to enhance your application, ensuring
              you stand out in competitive fields like MIM, MIF, and MIS.
            </p>
            <p className="text-lg lg:text-xl text-[#535862]">
              <span className="font-medium">Proven Success:</span> Assisting
              applicants to gain admission to top-tier graduate programs
              globally.
            </p>
            <p className="text-lg lg:text-xl text-[#535862]">
              <span className="font-medium">Tailored Strategies:</span>{" "}
              Customized guidance aligning with your unique profile and career
              aspirations.
            </p>
            <p className="text-lg lg:text-xl text-[#535862]">
              <span className="font-medium">Comprehensive Support:</span>{" "}
              End-to-end assistance from application review to interview
              preparation.
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
            src="/images/services/graduate-admissions/about.png"
            alt="Graduation celebration"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
