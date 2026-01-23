import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutUsWhoWeAre() {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="my-auto space-y-12">
          <h1 className="font-semibold text-3xl lg:text-4xl text-[#181D27]">
            Who we are
          </h1>
          <div className="text-lg text-[#535862] whitespace-break-spaces">
            <p>
              At Open Admits, we are a team of Ivy League alumni passionate
              about helping individuals turn their unique stories into standout
              applications that impress top admissions committees around the
              world.We specialize in transforming personal experiences into
              compelling narratives that highlight each applicant’s authentic
              strengths and aspirations. Our approach blends strategic insight,
              authentic storytelling, and hands-on mentorship from consultants
              who have successfully navigated the admissions process
              themselves.Our results speak for themselves — with 130+ successful
              admits, $7M+ in scholarships, and a 97% success rate across
              leading MBA, MS, and undergraduate programs.
              <br />
              At Open Admits, we don’t just guide you through the admissions
              journey — we partner with you to shape the next chapter of your
              success.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <Button
              asChild
              size="lg"
              className="w-fit p-6 text-white bg-[#0056AD] hover:bg-[#0056AD]/90"
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
        <div className="relative h-60 lg:h-160 w-full">
          <Image
            src="/images/about-us/who-we-are.png"
            alt="About Us Approach"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
