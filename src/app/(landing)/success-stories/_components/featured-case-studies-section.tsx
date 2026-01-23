import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import type { FEATURED_CASE_STUDIES_QUERYResult } from "../../../../../sanity.types";

export async function FeaturedCaseStudiesSection({
  caseStudies,
}: {
  caseStudies: FEATURED_CASE_STUDIES_QUERYResult;
}) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#181D27]">
              Our Latest Admits & Achievements
            </h2>
            <p className="text-[#535862] mt-1">
              Explore how recent applicants crafted standout stories and secured
              admits at the world’s most competitive MBA programs.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="text-sm rounded-full px-4 py-2 border border-[#E9EAEB] text-[#002B56] hover:bg-white"
          >
            View all stories
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies?.map((item) => {
            return (
              <Link
                key={item._id}
                href={`/case-studies/${item.slug?.current}`}
                className="overflow-hidden"
              >
                <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-white">
                  {item?.mainImage ? (
                    <Image
                      src={urlFor(item.mainImage).width(1200).height(800).url()}
                      alt={item?.title ?? "Case study image"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : null}
                </div>
                <div className="p-4 space-y-1">
                  <h3 className="text-[#181D27] font-medium line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#535862]">{item.description}</p>
                  <div className="rounded-full bg-[#E6F0FB] text-[#004182] border border-[#99C4EF] px-2.5 py-0.5 text-sm w-min">
                    {item.category}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
