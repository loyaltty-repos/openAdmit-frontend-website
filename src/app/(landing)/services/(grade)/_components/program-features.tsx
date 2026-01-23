import type { LucideIcon } from "lucide-react";

interface ProgramFeaturesProps {
  badge: string;
  heading: string;
  description: string;
  features: Array<{ icon: LucideIcon; title: string; description: string }>;
}

export function ProgramFeatures({
  badge,
  heading,
  description,
  features,
}: ProgramFeaturesProps) {
  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 space-y-4">
          <p className="text-sm sm:text-base text-[#0056AD] font-medium">
            {badge}
          </p>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#181D27]">
            {heading}
          </h2>
          <p className="text-lg lg:text-xl text-[#535862] max-w-3xl">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-gray-50 rounded-lg border border-gray-200 p-6 space-y-4"
              >
                <div className="size-10 rounded-lg bg-[#0056AD] flex items-center justify-center">
                  <Icon className="size-5 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-[#181D27] text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-[#535862] text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
