import { Check } from "lucide-react";

interface KeyOutcomesProps {
  heading: string;
  outcomes: Array<{ title: string; description: string }>;
}

export function KeyOutcomes({ heading, outcomes }: KeyOutcomesProps) {
  return (
    <section className="bg-[#FBF7EC] py-16 sm:py-24 px-4 sm:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-poppins font-bold text-[#181D27] mb-12">
          {heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {outcomes.map((outcome) => (
            <div
              key={outcome.title}
              className="bg-white rounded-lg shadow-sm p-6 space-y-4"
            >
              <div className="size-10 rounded-full bg-[#E6F0FB] flex items-center justify-center">
                <Check className="size-5 text-[#0056AD]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-[#181D27] text-lg font-semibold">
                  {outcome.title}
                </h3>
                <p className="text-[#535862] text-sm sm:text-base">
                  {outcome.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
