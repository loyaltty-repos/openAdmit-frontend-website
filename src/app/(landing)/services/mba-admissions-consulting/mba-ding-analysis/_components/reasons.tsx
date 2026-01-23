import { Check } from "lucide-react";
import Image from "next/image";

export function ReasonsSection() {
  const bullets: { title: string; description: string }[] = [
    {
      title: "Weak Essays",
      description:
        "Lacking clarity, storytelling, or alignment with the school’s mission.",
    },
    {
      title: "Incomplete Profile Evaluation",
      description:
        "Failing to identify gaps in academics, leadership, or extracurriculars.",
    },
    {
      title: "Poor Recommendations",
      description:
        "Letters that do not highlight unique strengths or achievements.",
    },
    {
      title: "Misaligned School Selection",
      description:
        "Applying without considering program fit or competitiveness.",
    },
    {
      title: "Limited Interview Preparation",
      description:
        "Not effectively demonstrating leadership potential or fit for the program.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-3">
          <h2 className="text-[#181D27] text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Why Your MBA Application Was Rejected
          </h2>
          <p className="text-[#535862] max-w-3xl text-base sm:text-xl">
            Many capable candidates face rejection due to avoidable mistakes,
            such as:
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="space-y-12">
            {bullets.map((b) => (
              <div key={b.title} className="flex gap-8">
                <div className="size-10 shrink-0 rounded-lg bg-[#12B76A]/20 flex items-center justify-center">
                  <Check className="size-5 text-[#12B76A]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-[#181D27] text-lg sm:text-2xl font-semibold">
                    {b.title}
                  </h3>
                  <p className="text-[#535862] text-sm sm:text-lg max-w-xl">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative h-80 lg:h-140 max-w-40 w-full">
            <Image
              src="/images/mba/services/mba-ding-analysis/why.jpg"
              alt="Why Choose Us"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
