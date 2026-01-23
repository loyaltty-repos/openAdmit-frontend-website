import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import type { CASE_STUDY_QUERYResult } from "../../../sanity.types";
import { CaseStudyShareButtons } from "./case-study-share-buttons";

export function CaseStudy({
  caseStudy,
}: {
  caseStudy: CASE_STUDY_QUERYResult;
}) {
  const { title, description, summary, mainImage, body, studentQuote } =
    caseStudy ?? {};

  return (
    <div className="min-h-screen bg-[#FBF7EC]">
      <section className="bg-[#031A30] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-16">
          <div className="text-center">
            <p className="text-sm uppercase tracking-wider mb-4">Case study</p>
            {title && (
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {title}
              </h1>
            )}
            {description && (
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>

          {mainImage?.asset?._ref && (
            <div className="relative">
              <Image
                src={urlFor(mainImage.asset._ref).width(1200).height(600).url()}
                width={1200}
                height={600}
                alt={title ?? ""}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-16">
          {summary && (
            <div className="bg-white rounded-lg p-8 mb-12 shadow-sm">
              <h2 className="text-2xl font-bold text-[#181D27] mb-6">
                Summary
              </h2>
              <div className="prose prose-lg max-w-none text-[#535862]">
                <p>{summary}</p>
              </div>
            </div>
          )}

          {body && (
            <div className="prose prose-lg max-w-none text-[#181D27]">
              <PortableText value={body} />
            </div>
          )}
        </div>
      </section>

      {studentQuote && (
        <section className="bg-[#031A30] text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-16">
            <div className="border-l-4 pl-8" style={{ borderColor: "#0056AD" }}>
              <p className="text-xl italic mb-6 text-white/90">
                "{studentQuote}"
              </p>
            </div>
          </div>
        </section>
      )}

      <CaseStudyShareButtons title={title} />

      <section className="bg-[url('/images/case-studies-cta-bg.png')] bg-cover bg-center text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Story Could Be Next.
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your admissions journey with Open Admits today.
          </p>
          <Link
            href="https://meet.openadmits.com/#/IvyLeague"
            target="_blank"
            className="inline-block bg-[#0056AD] hover:bg-[#0056AD]/90 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-200"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
