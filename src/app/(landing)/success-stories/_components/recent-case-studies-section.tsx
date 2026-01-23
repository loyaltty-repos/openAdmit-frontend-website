import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import type { RECENT_CASE_STUDIES_QUERYResult } from "../../../../../sanity.types";

export function RecentCaseStudiesSection({
  caseStudies,
}: {
  caseStudies: RECENT_CASE_STUDIES_QUERYResult;
}) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#181D27]">
              Our Recent Top Admits
            </h2>
            <p className="text-[#535862] mt-1">
              Real stories of perseverance, strategy, and success featuring Open
              Admits students who made it to the world’s best programs.
            </p>
          </div>
          <Button
            asChild
            className="bg-[#0056AD] hover:bg-[#0056AD]/90 text-white hover:text-white"
          >
            <Link href="/case-studies" className="font-medium">
              View all stories
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies?.slice(0, 3).map((caseStudy) => (
            <Link
              key={caseStudy?._id}
              href={`/case-studies/${caseStudy?.slug?.current ?? ""}`}
              className="group block"
            >
              <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-white">
                {caseStudy?.mainImage ? (
                  <Image
                    src={urlFor(caseStudy.mainImage)
                      .width(1200)
                      .height(800)
                      .url()}
                    alt={caseStudy?.title ?? "Case study image"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : null}
              </div>
              <div className="mt-3">
                <h3 className="text-lg sm:text-xl font-semibold text-[#181D27] group-hover:text-[#0B5CC4]">
                  {caseStudy?.title}
                </h3>
                <p className="text-[#535862] mt-1">{caseStudy?.description}</p>
                <div className="rounded-full mt-2 bg-[#E6F0FB] text-[#004182] border border-[#99C4EF] px-2.5 py-0.5 text-sm w-min">
                  {caseStudy.category}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
