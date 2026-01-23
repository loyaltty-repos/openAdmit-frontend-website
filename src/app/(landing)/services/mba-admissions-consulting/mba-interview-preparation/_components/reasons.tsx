import { Check } from "lucide-react";
import Image from "next/image";

export function ReasonsSection() {
  const bullets: { title: string; description: string }[] = [
    {
      title: "First Impressions Count",
      description:
        "Admissions panels evaluate not just answers, but confidence, clarity, and presence.",
    },
    {
      title: "Storytelling Wins",
      description:
        "Strong narratives make your achievements memorable and impactful.",
    },
    {
      title: "Avoid Common Mistakes",
      description:
        "Overly generic responses and lack of structure can hurt even top candidates.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-3">
          <h2 className="text-[#181D27] text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Why MBA Interview Prep is Critical
          </h2>
          <p className="text-[#535862] max-w-3xl text-base sm:text-xl">
            Securing an MBA admit often comes down to the interview. Even the
            strongest profiles can fall short without clear communication,
            confidence, and well-structured answers. Our MBA interview
            preparation ensures you’re ready to shine when it matters most.
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
              src="/images/mba/services/mba-interview-prep/reasons.png"
              alt="Programs"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
