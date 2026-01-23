import type { LucideIcon } from "lucide-react";

interface ApplicationJourneyProps {
  heading: string;
  description: string;
  backgroundImageSrc: string;
  headerIcon?: LucideIcon;
  phases: Array<{ icon: LucideIcon; title: string; content: string }>;
}

export function ApplicationJourney({
  heading,
  description,
  backgroundImageSrc,
  headerIcon: HeaderIcon,
  phases,
}: ApplicationJourneyProps) {
  return (
    <section
      className="bg-cover bg-center py-16 sm:py-24 px-4 sm:px-16"
      style={{
        background: `url('${backgroundImageSrc}'), #00162B`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-6">
            {HeaderIcon && (
              <div className="size-16 rounded-lg bg-[#5BA3E8] flex items-center justify-center">
                <HeaderIcon className="size-8 text-white" />
              </div>
            )}
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-white leading-tight">
              {heading}
            </h2>
            <p className="text-lg lg:text-xl text-white max-w-2xl">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {phases.map((phase) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.title}
                  className="bg-[#00162B] rounded-lg p-6 space-y-4 border border-[#2A2A2A]"
                >
                  <div className="size-10 rounded-lg bg-[#5BA3E8] flex items-center justify-center">
                    <Icon className="size-5 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-white text-base font-semibold">
                      {phase.title}
                    </h3>
                    <p className="text-[#C5CACF] text-sm leading-relaxed">
                      {phase.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
