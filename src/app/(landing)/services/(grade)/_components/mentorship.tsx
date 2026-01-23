import type { LucideIcon } from "lucide-react";
import Image from "next/image";

interface MentorshipProps {
  badge: string;
  heading: string;
  description: string;
  mentorshipImageSrc: string;
  mentorshipImageAlt: string;
  features: Array<{ icon: LucideIcon; title: string; description: string }>;
}

export function Mentorship({
  badge,
  heading,
  description,
  mentorshipImageSrc,
  mentorshipImageAlt,
  features,
}: MentorshipProps) {
  return (
    <section className="bg-[#FBF7EC] py-16 sm:py-24 px-4 sm:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 space-y-4 text-center">
          <p className="text-sm sm:text-base text-[#0056AD] font-medium">
            {badge}
          </p>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#181D27]">
            {heading}
          </h2>
          <p className="text-lg lg:text-xl text-[#535862] max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="relative w-full rounded-2xl">
          <div className="relative h-96 lg:h-[500px] w-full overflow-hidden">
            <Image
              src={mentorshipImageSrc}
              alt={mentorshipImageAlt}
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          <div className="absolute -bottom-40 left-0 right-0 p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="bg-white rounded-xl p-6 space-y-4 shadow-lg"
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
        </div>
      </div>
    </section>
  );
}
